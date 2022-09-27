const e = require("express");

// const id = 10;
// const id = 251570;
const id = 626600;
// const id = 499450;
// const id = 627530;
// const id = 105600;

// const url = 'https://store.steampowered.com/api/appdetails?appids=10';
// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body

function parseNormSpecs(specs) {
  // console.log(specs);
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
function parseOldSpecs(specs) {
  let specs1 = specs.match(/[\w \/\-+]+,| [\w \/\-+]+ ?</g).map((item) => {
    item = item.replace(/[<>+,]/g, "");
    // console.log(item);
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
    return "";
  });
  const index = specs1.indexOf("");
  if (index > -1) {
    // only splice array when item is found
    specs1.splice(index); // 2nd parameter means remove one item only
  }
  return specs1;
}

function parseSpecs(requirements, parsed) {
  console.log(requirements);
  let min = [];
  let rec = [];
  if (requirements.recommended) {
    let specs = requirements.recommended;
    rec = parseNormSpecs(specs);
  }
  if (requirements.minimum) {
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

function finalizeParse(specs, parsed) {
  for (item of specs) {
    if (item.Processor) {
      // console.log(item.Processor);
      if (item.Processor.match(/intel/i)) {
        parsed[0].push(
          item.Processor.match(/intel[\w .]+hz/i)[0].match(
            /\d.\d\d?|[\w-]+|[gm]hz/gi
          )
        );
        // console.log(proc);
      }
    } else if (item.Memory) {
      // console.log(item.Memory);
      parsed[1].push(item.Memory.match(/(\d+) (\w+)/i).slice(1, 3));
      // console.log(mem);
    } else if (item.Graphics || item.VideoCard) {
      // console.log(item.Graphics);
      if (item.Graphics.match(/nvidia/i)) {
        parsed[2].push(
          item.Graphics.match(/nvidia [\w]+ ?[\w]+? [\d]+/i)[0].match(/\w+/gi)
        );
        // console.log(gpu);
      }
    } else if (item.Storage) {
      // console.log(item.Storage);
      parsed[3].push(item.Storage.match(/(\d+) (\w+)/i).slice(1, 3));
      // console.log(storage);
    }
  }
}

function generateSql(proc, mem, gpu, storage) {
  console.log(proc);

  procMin = proc[0].join("%");
  procRec = proc[0].join("%");


  procMin = proc[0].join("%");

  const getCPUBench = `{cpu:{[Op.like]: '%${procMin}',},},
  attributes: ["benchmark"],`;
  console.log(getCPUBench);

  gpuMin = gpu[0].join("%");
  gpuRec = gpu[0].join("%");

  const getGPUBench = `{gpu:{[Op.like]: '%${gpuMin}',},},
  attributes: ["benchmark"],`;
  console.log(getGPUBench);
}

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
