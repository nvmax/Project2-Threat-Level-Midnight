const { User, GpuInfo, CpuInfo, SteamUsers, Steam } = require("../../models");
const Op = require("sequelize").Op;

// Format generated requirement data into the structure we need for query use
function recsToQTerms(specs, parsed) {
  console.log(parsed);
  for (item of specs) {
    if (item.Processor) {
      // console.log(item.Processor);
      let cositas = item.Processor.replace(
        / or | ?\/ ?|;|,| and |\|/gi,
        "/"
      ).split("/");
      console.log(cositas);
      for (cosisita of cositas) {
        // we will use the intel example to compare benchmarks
        if (cosisita.match(/intel|pentium|core/i)) {
          parsed[0].push(
            cosisita
              .match(/((intel)?[\w- .]+h?z?) ?\/?/i)[1]
              .replace(
                /(\d )?cpus? ?|processor ?|generation ?|first ?|second ?|third ?|fourth ?|fifth ?|sixth ?|seventh ?|eighth ?|ninth ?|tenth ?|eleventh ?|twelfth ?|thirteenth ?/gi,
                ""
              )
              .replace(/\-/, " ")
              .replace(/(\d\d?)th/i, "$1500")
              .replace(/(\d\.\d)\d/, "$10")
              .replace(/(\d.\d\d?) ?(ghz) ?(intel) ?(i\d)/i, "$3 $4 $1 $2")
              .match(/\d.\d\d?|[\w-]+|[gm]hz/gi)
          );
          break;
          // console.log(parsed[0]);
        } else if (cosisita.match(/amd|ryzen|threadripper|FX|athlon/i)) {
          parsed[0].push(
            cosisita
              .match(/((amd )?(ryzen )? ?[\w-]+( \w+)?( \w+)?)/i)[1]
              .replace(/(\d )?cpus? ?|processor ?|generation ?/gi, "")
              .match(/\w+/gi)
          );
          break;
        }
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
      let cositas = cosa.replace(/ or | ?\/ ?|;|,| and |\|/gi, "/").split("/");
      console.log(cositas);
      // console.log(cosa);
      // console.log(item.VideoCard);
      for (cosisita of cositas) {
        console.log(cosisita);
        // we will use nvidia examples to compare benchmarks
        if (cosisita.match(/nvidia|gtx|rtx/i)) {
          parsed[2].push(
            cosisita
              .replace(
                /nvidia ?|gpu ?|better ?|equivalent ?|ddr4 ?|vram ?/gi,
                ""
              )
              // .match(/([\w]+ ?[\w]+? [\d]{2,}\w? ?(super)?(\w+)?\+?)/i)[0]
              .replace(/\d\d?gb?/gi, "")
              .replace(/(\d\d\d)(ti)/i, "$1 $2")
              .match(/\w+/gi)
          );
          break;
          console.log(parsed[2]);
        } else if (cosisita.match(/radeon/i)) {
          parsed[2].push(
            cosisita
              .replace(/amd ?|gpu ?|better ?|equivalent ?|ddr4 ?|vram ?/gi, "")
              // .match(/([\w]+ ?[\w]+? ?[\d]{2,})/i)[0]
              .match(/\w+/gi)
          );
          break;
        }
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
  console.log(proc);
  console.log(mem);
  console.log(storage);
  console.log(gpu);
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
  // console.log(user);
  let verdict = {};

  // cpu compare
  if (proc.length && user.cpuinfo) {
    if (proc[0]) {
      const procMin = proc[0].join("%");

      const cpuDataMin = await CpuInfo.findOne({
        where: { cpu: { [Op.like]: `%${procMin}%` } },
      });
      if (cpuDataMin) {
        if (user.cpuinfo.benchmark >= cpuDataMin.dataValues.benchmark) {
          verdict.cpuMeetsMin = true;
        } else {
          verdict.cpuMeetsMin = false;
        }
      }
    }
    if (proc[1]) {
      console.log(proc[1]);
      const procRec = proc[1].join("%");
      const cpuDataRec = await CpuInfo.findOne({
        where: { cpu: { [Op.like]: `%${procRec}%` } },
      });
      if (cpuDataRec) {
        if (user.cpuinfo.benchmark >= cpuDataRec.dataValues.benchmark) {
          verdict.cpuMeetsRec = true;
        } else {
          verdict.cpuMeetsRec = false;
        }
      }
    }
  }
  // gpu compare
  console.log(gpu);
  if (gpu.length && user.gpuinfo) {
    if (gpu[0]) {
      const gpuMin = gpu[0].join("%");
      const gpuDataMin = await GpuInfo.findOne({
        where: { gpu: { [Op.like]: `%${gpuMin}%` } },
      });
      if (gpuDataMin) {
        if (user.gpuinfo.benchmark >= gpuDataMin.dataValues.benchmark) {
          verdict.gpuMeetsMin = true;
        } else {
          verdict.gpuMeetsMin = false;
        }
      }
    }
    if (gpu[1]) {
      const gpuRec = gpu[1].join("%");
      const gpuDataRec = await GpuInfo.findOne({
        where: { gpu: { [Op.like]: `%${gpuRec}%` } },
      });
      if (gpuDataRec) {
        if (user.gpuinfo.benchmark >= gpuDataRec.dataValues.benchmark) {
          verdict.gpuMeetsRec = true;
        } else {
          verdict.gpuMeetsRec = false;
        }
      }
    }
  }
  // convert to GB if needed and compare mem
  if (mem.length && user.ramsize !== null) {
    if (mem[0] && mem[0].length) {
      if (mem[0][1].match(/mb/i)) mem[0][0] = mem[0][0] / 1000;
      if (user.ramsize >= mem[0][0]) {
        verdict.ramMeetsMin = true;
      } else {
        verdict.ramMeetsMin = false;
      }
    }
    if (mem[1] && mem[1].length) {
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
  // console.log(verdict);
  return verdict;
}

// takes in array of recommended and minimum requirments in object form as well as a user id and uses them to query and return comparison data
async function compareRelevant(recMin, userId) {
  const parsed = [[], [], [], []];
  recsToQTerms(recMin.min, parsed);
  console.log("parsed1")
  recsToQTerms(recMin.rec, parsed);
  console.log("parsed2")
  console.log(...parsed);
  return compareToUser(...parsed, userId);
}

module.exports = { compareRelevant };
