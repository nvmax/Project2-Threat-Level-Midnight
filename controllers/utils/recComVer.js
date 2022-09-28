const { User, GpuInfo, CpuInfo, SteamUsers, Steam } = require("../../models");
const Op = require("sequelize").Op;
require("dotenv").config();

// Parse normally formatted requirements
function parseNormSpecs(specs) {
  // console.log(specs);
  // remove extraneous material and map the relevant data into a useful object
  let dataArray1 = specs
    .replace(/[®™]/g, "")
    .match(/([\w ]+:)(<[\/\w]+>)? ?([\w\/,. \-\(\)+]+)</g)
    .map((item) => {
      item = item.replace(/<\/?\w+> ?|[<+]/g, "");
      let split = item.split(":");
      // console.log(split);
      if (split[0] !== "") {
        split[0] = split[0].replace(/ /g, "");
        return { [split[0]]: split[1].trim() };
      }
    });
  //   console.log(dataArray1);
  return dataArray1;
}

// Parse requirements from older games
function parseOldSpecs(specs) {
  // grap all the relevant material from the html
  let specs1 = specs.match(/[\w \/\-+]+,| [\w \/\-+]+ ?</g).map((item) => {
    item = item.replace(/[<>+,]/g, "");
    // console.log(item);
    // pull out specific details of relevant requirements
    if (item.match(/processor/i)) {
      return {
        ["Processor"]: item.replace(/ ?(\w+ \w+) proc[\w ]+/i, "$1").trim(),
      };
    }
    if (item.match(/wind/i)) {
      return { ["OS"]: item.replace(/ ?(\w+ \w+) ?/i, "$1").trim() };
    }
    if (item.match(/ram/i)) {
      return { ["Memory"]: item.replace(/ ?(\w+) ?ra[\w ]+/i, "$1").trim() };
    }
    if (item.match(/video card/i)) {
      return { ["Graphics"]: item.replace(/ ?(\w+) ?vid[\w ]+/i, "$1").trim() };
    }
    // we don't need mouse and keyboard info for now . . .
    return "";
  });
  const index = specs1.indexOf("");
  if (index > -1) {
    // only splice array when item is found
    specs1.splice(index); // 2nd parameter means remove one item only
  }
  return specs1;
}

// General parsing hub
function parseSpecs(requirements, parsed) {
  // console.log(requirements);
  let min = [];
  let rec = [];
  // recents games have separate recommended section, old ones don't
  if (requirements.recommended) {
    let specs = requirements.recommended;
    rec = parseNormSpecs(specs);
  }
  if (requirements.minimum) {
    // pull out the recommended section from the minimum
    let specs = requirements.minimum;
    if (specs.match(/Recommended:/)) {
      specs = specs.split(/Recommended:/);
      // console.log(specs);
      min = parseOldSpecs(specs[0]);
      rec = parseOldSpecs(specs[1]);
    } else {
      min = parseNormSpecs(specs);
    }
  }

  // console.log(rec);
  // console.log(min);
  finalizeParse(min, parsed);
  finalizeParse(rec, parsed);
}

// Format generated requirement data into the structure we need for query use
function finalizeParse(specs, parsed) {
  for (item of specs) {
    if (item.Processor) {
      // console.log(item.Processor);
      // we will use the intel example to compare benchmarks
      if (item.Processor.match(/intel/i)) {
        parsed[0].push(
          item.Processor.replace(/ or /gi, " / ")
            .match(/(intel[\w- .]+h?z?) ?\/?/i)[1]
            .replace(/cpu /gi, "")
            .match(/\d.\d\d?|[\w-]+|[gm]hz/gi)
        );
        // console.log(parsed[0]);
      }
    } else if (item.Memory) {
      // console.log(item.Memory);
      parsed[1].push(item.Memory.match(/(\d+) ?(\w+)/i).slice(1, 3));
      // console.log(mem);
    } else if (item.Graphics || item.VideoCard) {
      let cosa = {};
      if (item.Graphics) {
        cosa = item.Graphics;
      } else {
        cosa = item.VideoCard;
      }
      // console.log(cosa);
      // console.log(item.VideoCard);
      // we will use nvidia examples to compare benchmarks
      if (cosa.match(/nvidia/i)) {
        parsed[2].push(
          cosa.match(/nvidia (gpu )?([\w]+ ?[\w]+? [\d]+)/i)[2].match(/\w+/gi)
        );
        // console.log(parsed[2]);
      }
    } else if (item.Storage) {
      // console.log(item.Storage);
      parsed[3].push(item.Storage.match(/(\d+) ?(\w+)/i).slice(1, 3));
      // console.log(storage);
    }
  }
}

// Compare user hardware to game hardware reqs
async function compareToUser(proc, mem, gpu, storage, userId) {
  // Use get user info using id
  const user = await User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: userId,
    },
    include: [
      { model: GpuInfo },
      { model: CpuInfo },
      { model: Steam, Through: SteamUsers, as: "steam_users" },
    ],
  });
  let verdict = {};

  // cpu compare
  if (proc.length && user.cpuinfo) {
    procMin = proc[0].join("%");
    procRec = proc[1].join("%");
    const cpuDataMin = await CpuInfo.findOne({
      where: { cpu: { [Op.like]: `%${procMin}%` } },
    });
    const cpuDataRec = await CpuInfo.findOne({
      where: { cpu: { [Op.like]: `%${procRec}%` } },
    });

    if (user.cpuinfo.benchmark >= cpuDataMin.dataValues.benchmark) {
      verdict.cpuMeetsMin = true;
    } else {
      verdict.cpuMeetsMin = false;
    }
    if (user.cpuinfo.benchmark >= cpuDataRec.dataValues.benchmark) {
      verdict.cpuMeetsRec = true;
    } else {
      verdict.cpuMeetsRec = false;
    }
  }
  // gpu compare
  if (gpu.length && user.gpuinfo) {
    gpuMin = gpu[0].join("%");
    gpuRec = gpu[1].join("%");

    const gpuDataMin = await GpuInfo.findOne({
      where: { gpu: { [Op.like]: `%${gpuMin}%` } },
    });
    const gpuDataRec = await GpuInfo.findOne({
      where: { gpu: { [Op.like]: `%${gpuRec}%` } },
    });

    if (user.gpuinfo.benchmark >= gpuDataMin.dataValues.benchmark) {
      verdict.gpuMeetsMin = true;
    } else {
      verdict.gpuMeetsMin = false;
    }
    if (user.gpuinfo.benchmark >= gpuDataRec.dataValues.benchmark) {
      verdict.gpuMeetsRec = true;
    } else {
      verdict.gpuMeetsRec = false;
    }
  }
  // convert to GB if needed and compare mem
  if (mem.length && user.ramsize !== null) {
    if (mem[0].length) {
      if (mem[0][1].match(/mb/i)) mem[0][0] = mem[0][0] / 1000;
      if (user.ramsize >= mem[0][0]) {
        verdict.ramMeetsMin = true;
      } else {
        verdict.ramMeetsMin = false;
      }
    }
    if (mem[1].length) {
      if (mem[1][1].match(/mb/i)) mem[1][0] = mem[1][0] / 1000;
      if (user.ramsize >= mem[1][0]) {
        verdict.ramMeetsRec = true;
      } else {
        verdict.ramMeetsRec = false;
      }
    }
  }
  // convert to GB if needed and compare storage
  if (storage.length && user.hddsize !== null) {
    if (storage[0].length) {
      if (storage[0][1].match(/mb/i)) storage[0][0] = storage[0][0] / 1000;
      if (user.hddsize >= storage[0][0]) {
        verdict.hddMeetsMin = true;
      } else {
        verdict.hddMeetsMin = false;
      }
    }
    if (storage[1].length) {
      if (storage[1][1].match(/mb/i)) storage[1][0] = storage[1][0] / 1000;
      if (user.hddsize >= storage[1][0]) {
        verdict.hddMeetsRec = true;
      } else {
        verdict.hddMeetsRec = false;
      }
    }
  }
  verdict.overall = 0;
  if (Object.keys(verdict).length === 9) {
    if (
      verdict.cpuMeetsRec &&
      verdict.gpuMeetsRec &&
      verdict.ramMeetsRec &&
      verdict.hddMeetsRec
    ) {
      verdict.overall = 3;
    } else if (
      verdict.cpuMeetsMin &&
      verdict.gpuMeetsMin &&
      verdict.ramMeetsMin &&
      verdict.hddMeetsMin
    ) {
      verdict.overall = 2;
    } else {
      verdict.overall = 1;
    }
  }

  return verdict;
}

// Fetch from api, print other general data, pull out requirements section, call parser and sql functions
async function specCompare(appid, userId) {
  let systemReadiness = {};
  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}&?key=${process.env.ST_KEY}`;
  try {
    const data = await (await fetch(url)).json();
    // console.log(data);
    // console.log(appid);
    if (data[appid].data) {
      const game = data[appid].data;
      // console.log(game.type);
      if (game.type === "game") {
        if (game) {
          const parsed = [[], [], [], []];
          // which platforms it runs on (windows mac linux)
          // if (
          //   typeof game.mac_requirements.recommended === "string" ||
          //   typeof game.mac_requirements.minimum === "string"
          // ) {
          //   console.log(`Runs on Mac (Intel)`);
          // }
          // if (
          //   typeof game.linux_requirements.recommended === "string" ||
          //   typeof game.linux_requirements.minimum === "string"
          // ) {
          //   console.log(`Runs on Linux`);
          // }
          if (
            typeof game.pc_requirements.recommended === "string" ||
            typeof game.pc_requirements.minimum === "string"
          ) {
            requirements = game.pc_requirements;
            // console.log(`Runs on PC`);
            parseSpecs(requirements, parsed);
          }
          systemReadiness = compareToUser(...parsed, userId);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  // console.log(systemReadiness);
  return systemReadiness;
}

module.exports = { specCompare };
