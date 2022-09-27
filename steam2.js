const router = require("express").Router();
// const withAuth = require('../utils/auth');
const axios = require("axios");
const { User, GpuInfo, CpuInfo, SteamUsers, Steam } = require("./models");
const sequelize = require("./config/connection");
const { Op } = require("sequelize");

const id = 10;
// const id = 251570;
// const id = 626600;
// const id = 499450;
// const id = 627530;
// const id = 105600;

// const url = 'https://store.steampowered.com/api/appdetails?appids=10';
// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body

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
  console.log(requirements);
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
      console.log(item.Processor);
      // we will use the intel example to compare benchmarks
      if (item.Processor.match(/intel/i)) {
        parsed[0].push(
          item.Processor.replace(/ or /gi, ' / ').match(/(intel[\w- .]+h?z?) ?\/?/i)[1].replace(/cpu /gi,'').match(
            /\d.\d\d?|[\w-]+|[gm]hz/gi
          )
        );
        console.log(parsed[0]);
      }
    } else if (item.Memory) {
      // console.log(item.Memory);
      parsed[1].push(item.Memory.match(/(\d+) ?(\w+)/i).slice(1, 3));
      // console.log(mem);
    } else if (item.Graphics || item.VideoCard) {
      let cosa = {};
      if(item.Graphics){
        cosa = item.Graphics;
      }else{cosa = item.VideoCard}
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

// Use requirements tp generate sequelize calls
async function generateSql(proc, mem, gpu, storage) {
  // convert to GB if needed
  if (mem.length) {
    if (mem[0].length) {
      if (mem[0][1].match(/mb/i)) mem[0][0] = mem[0][0] / 1000;
    }
    if (mem[1].length) {
      if (mem[1][1].match(/mb/i)) mem[1][0] = mem[1][0] / 1000;
    }
  }
  if (storage.length) {
    if (storage[0].length) {
      if (storage[0][1].match(/mb/i)) storage[0][0] = storage[0][0] / 1000;
    }
    if (storage[1].length) {
      if (storage[1][1].match(/mb/i)) storage[1][0] = storage[1][0] / 1000;
    }
  }
  // console.log(proc);
  if (proc.length && gpu.length) {
    procMin = proc[0].join("%");
    procRec = proc[1].join("%");

    gpuMin = gpu[0].join("%");
    gpuRec = gpu[1].join("%");

    const cpuDataMin = await CpuInfo.findOne({
      where: { cpu: { [Op.like]: `%${procMin}%` } },
      // attributes: ["benchmark"],
    });
    const gameCPUBenchMin = cpuDataMin.dataValues.benchmark;
    const cpuDataRec = await CpuInfo.findOne({
      where: { cpu: { [Op.like]: `%${procRec}%` } },
      // attributes: ["benchmark"],
    });
    const gameCPUBenchRec = cpuDataRec.dataValues.benchmark;

    const gpuDataMin = await GpuInfo.findOne({
      where: { gpu: { [Op.like]: `%${gpuMin}%` } },
      // attributes: ["benchmark"],
    });
    const gameGPUBenchMin = gpuDataMin.dataValues.benchmark;
    const gpuDataRec = await GpuInfo.findOne({
      where: { gpu: { [Op.like]: `%${gpuRec}%` } },
      // attributes: ["benchmark"],
    });
    const gameGPUBenchRec = gpuDataRec.dataValues.benchmark;
    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: 1,
      },
      include: [
        { model: GpuInfo },
        { model: CpuInfo },
        { model: Steam, Through: SteamUsers, as: "steam_users" },
      ],
    });
    userCPUBench = user.cpuinfo.benchmark;
    userGPUBench = user.gpuinfo.benchmark;
    userRam = user.ramsize;
    userStorage = user.hddsize;

    console.log(userCPUBench);
    console.log(gameCPUBenchMin);
    console.log(gameCPUBenchRec);
    console.log(userGPUBench);
    console.log(gameGPUBenchMin);
    console.log(gameGPUBenchRec);
    console.log(userRam);
    console.log(mem[0][0]);
    console.log(mem[1][0]);
    console.log(userStorage);
    console.log(storage[0][0]);
    console.log(storage[1][0]);

    if (
      userCPUBench >= gameCPUBenchRec &&
      userGPUBench >= gameGPUBenchRec &&
      userRam >= mem[1][0] &&
      userStorage >= storage[1][0]
    ) {
      console.log("This game should run well on your system!");
    } else if (
      userCPUBench >= gameCPUBenchMin &&
      userGPUBench >= gameGPUBenchMin &&
      userRam >= mem[0][0] &&
      userStorage >= storage[0][0]
    ) {
      console.log("This game should somewhat run on your system!");
    } else {
      console.log(
        "Your system is beneath this game. Don't insult it by trying to run it."
      );
    }
  } else {
    console.log("Unclear. It's an older game, so you should be good to go.");
  }
}

// Fetch from api, print other general data, pull out requirements section, call parser and sql functions
function main() {
  const url = `https://store.steampowered.com/api/appdetails?appids=${id}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(Object.keys(data)[0]);
      if (data[Object.keys(data)[0]].data) {
        const game = data[Object.keys(data)[0]].data;
        console.log(data[Object.keys(data)[0]].data.type);
        if (game) {
          const parsed = [[], [], [], []];
          // game name
          if (game.name) {
            console.log(`Name: ${game.name}`);
          }

          // game price
          if (game.is_free) console.log(`Free? Yes!`);
          else console.log("Free? No.");

          // how well it will run
          // full description (any of them work)
          if (game.detailed_description) {
            console.log(`Description: ${game.detailed_description}`);
          }

          // release date
          if (game.release_date) {
            console.log(`Release Date: ${game.release_date.date}`);
          }

          // wallpaper (not raw)
          if (game.background) {
            console.log(`Wallpaper Link: ${game.background}`);
          }

          // which platforms it runs on (windows mac linux)
          if (
            typeof game.mac_requirements.recommended === "string" ||
            typeof game.mac_requirements.minimum === "string"
          ) {
            console.log(`Runs on Mac (Intel)`);
            // console.log(typeof game.mac_requirements.minimum);
            // requirements = game.mac_requirements;
            // parseSpecs(requirements);
          }
          if (
            typeof game.linux_requirements.recommended === "string" ||
            typeof game.linux_requirements.minimum === "string"
          ) {
            console.log(`Runs on Linux`);
            // console.log(game.linux_requirements);
            // requirements = game.linux_requirements;
            // parseSpecs(requirements);
          }
          if (
            typeof game.pc_requirements.recommended === "string" ||
            typeof game.pc_requirements.minimum === "string"
          ) {
            requirements = game.pc_requirements;
            console.log(`Runs on PC`);
            parseSpecs(requirements, parsed);
          }
          generateSql(...parsed);
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

main();
