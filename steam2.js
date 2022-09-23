const e = require("express");

// const id = 626600;
const id = 499450;
// const id = 627530;
const url = `https://store.steampowered.com/api/appdetails?appids=${id}`;
// const url = 'https://store.steampowered.com/api/appdetails?appids=10';
// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body

let proc = [];
let mem = [];
let gpu = [];
let directx = [];
let storage = [];
let os = [];

function parseBetter() {
  console.log(proc);
  console.log(mem);
  console.log(gpu);
  console.log(directx);
  console.log(storage);
  console.log(os);

  if (gpu.length !== 0) {
    gpu[0] = gpu[0].replace(/™/gi, '');
    let gpuRecNv = gpu[0].match(/Geforce (\w+ \d+)/i);
    let gpuRecAMD = gpu[0].match(/Radeon (\w+ \d+)/i);

    if (gpuRecNv !== null) console.log(`Rec Nvidia GPU: ${gpuRecNv[0]}`);
    // console.log(`Nvidia Model #: ${gpuRecNv[2]}`);
    if (gpuRecAMD !== null) console.log(`Rec AMD GPU: ${gpuRecAMD[0]}`);
    // console.log(`AMD Model #: ${gpuRecAMD[2]}`);

    gpu[1] = gpu[1].replace(/™/gi, '');
    let gpuMinNv = gpu[1].match(/Geforce(( \w+)? \d+ )/i);
    let gpuMinAMD = gpu[1].match(/Radeon(( \w+)? \d+)/i);

    if (gpuMinNv !== null) console.log(`Min Nvidia GPU: ${gpuMinNv[0]}`);
    // console.log(`Nvidia Model #: ${gpuMinNv[2]}`);
    if (gpuMinAMD !== null) console.log(`Min AMD GPU: ${gpuMinAMD[0]}`);
    // console.log(`AMD Model #: ${gpuRecAMD[2]}`);
  }
  // convert min and rec ram values to mb and just get the number. mult because floats are big
  mem = mem.map((item) => {
    let mult = 1;
    if (item.toLowerCase().match(/gb/i)) {
      mult = 1000;
    }
    return item.match(/\d+/) * mult;
  });
  console.log(`Min ram in MB: ${mem[1]}`);
  console.log(`Rec ram in MB: ${mem[0]}`);

  // convert min and rec storage values to mb and just get the number. mult because floats are big
  storage = storage.map((item) => {
    let mult = 1;
    if (item.toLowerCase().match(/gb/i)) {
      mult = 1000;
    }
    return item.match(/\d+/) * mult;
  });
  console.log(`Min storage in MB: ${storage[1]}`);
  console.log(`Rec storage in MB: ${storage[0]}`);

  // separate min and max amd and intel
  proc = proc.map((item) => {
    let ghzRegex = /( [\d\.]+ ?GHz([\w ]+)?)|( or AMD equivalent([ \w]+)?)|( or greater)|(, equivalent or better)/gi;
    item = item.replace(ghzRegex, "").replace(/ or /, '/');
    let item0 = item.match(/Intel[\w\d -]+/i);
    if (item0 !== null) item0[0] = item0[0].replace(/ ?Intel CPU (Intel )?/gi, "");
    let item1 = item.match(/AMD[\w\d -]+/i);
    if (item1 !== null) item1[0] = item1[0].replace(/ ?AMD CPU (AMD )?/gi, "");
    return [item0, item1];
  });

  if (proc[1][0] !== null) {
    console.log(`Min Intel CPU: ${proc[1][0]}`);
  }
  if (proc[1][1] !== null) {
    console.log(`Min AMD CPU: ${proc[1][1]}`);
  }

  if (proc[0][0] !== null) {
    console.log(`Rec Intel CPU: ${proc[0][0]}`);
  }
  if (proc[0][1] !== null) {
    console.log(`Rec AMD CPU: ${proc[0][1]}`);
  }
}

function parseNormSpecs(specs) {
  // console.log(specs.minimum);
  let dataArray1 = specs.split("<strong>");
  let dataArray2 = dataArray1.map((item) => {
    let split = item.split("</strong>");
    if (split[0] !== "") {
      return { [split[0]]: split[1] };
    }
  });

  finalArray = dataArray2.map((item) => {
    if (item) {
      // console.log(item);
      let key = Object.keys(item)[0];
      let value = item[key];
      if (value) {
        value = value.replace(/<br>/g, "");
        value = value.replace(/<li>/g, "");
        value = value.replace(/<\/li>/g, "");
        value = value.replace(/<ul>/g, "");
        value = value.replace(/<\/ul>/g, "");
        value = value.replace(/'/g, '"');
        key = key.replace(/'/g, '"');
        key = key.replace(/:/g, "");
        key = key.replace(/®/g, "");
        return { [key]: value };
      }
    }
  });
  let retrieved = {
    processor: false,
    memory: false,
    graphics: false,
    directx: false,
    storage: false,
  };

  // console.log(finalArray);
  // find key Processor and report value
  finalArray.forEach((item) => {
    if (item) {
      let key = Object.keys(item)[0];
      if (key === "Processor" && retrieved.processor === false) {
        proc.push(item[key]);
        console.log(item[key]);
        retrieved.processor = true;
      }
    }
  });
  // find key Memory and report value
  finalArray.forEach((item) => {
    if (item) {
      let key = Object.keys(item)[0];
      if (key === "Memory" && retrieved.memory === false) {
        mem.push(item[key]);
        console.log(item[key]);
        retrieved.memory = true;
      }
    }
  });
  // find key Graphics and report value
  finalArray.forEach((item) => {
    if (item) {
      let key = Object.keys(item)[0];
      if (
        (key === "Graphics" || key === "Video Card") &&
        retrieved.graphics === false
      ) {
        gpu.push(item[key]);
        console.log(item[key]);
        retrieved.graphics = true;
      }
    }
  });
  // find key Graphics and report value
  finalArray.forEach((item) => {
    if (item) {
      let key = Object.keys(item)[0];
      if (key === "DirectX" && retrieved.directx === false) {
        directx.push(item[key]);
        console.log(item[key]);
        retrieved.directx = true;
      }
    }
  });
  // find key Storage and report value
  finalArray.forEach((item) => {
    if (item) {
      let key = Object.keys(item)[0];
      if (
        (key === "Storage" || key === "Hard Disk Space") &&
        retrieved.storage === false
      ) {
        storage.push(item[key]);
        console.log(item[key]);
        retrieved.storage = true;
      }
    }
  });
}

function parseSpecs(requirements) {
  // check for obvious recommended section
  if (requirements.recommended) {
    let dataArray = requirements.recommended;
    console.log("Recommended:");
    parseNormSpecs(dataArray);
  }
  if (requirements.minimum) {
    // console.log("here");
    // console.log(requirements.minimum);
    let dataArray = requirements.minimum;
    if (dataArray.includes("\t\t\t")) {
      console.log("alternate");
      dataArray = dataArray
        .replace(/\t|<\/?p>|\n|<br ?\/?.|\r+|&reg;/g, "")
        .replace(/,( or)/g, "$1");
      let dataArray1 = dataArray.split("<strong>");
      let finalArray = dataArray1.map((item) => {
        let split = item.split("</strong>");
        if (split[0] !== "") {
          let splitMore = split[1].split(",");
          const [Processor, Memory, Graphics, OS, Mouse, Keyboard, Internet] =
            splitMore;
          return {
            Processor,
            Memory,
            Graphics,
            OS,
            Mouse,
            Keyboard,
            Internet,
          };
        }
      });
      console.log(finalArray);
      finalArray.splice(0, 1);
      proc.push(finalArray[1].Processor);
      mem.push(finalArray[1].Memory);
      gpu.push(finalArray[1].Graphics);
      os.push(finalArray[1].OS);
      proc.push(finalArray[0].Processor);
      mem.push(finalArray[0].Memory);
      gpu.push(finalArray[0].Graphics);
      os.push(finalArray[0].OS);
      console.log("Minimum:");
      console.log(finalArray[0].Processor);
      console.log(finalArray[0].Memory);
      console.log(finalArray[0].Graphics);
      console.log(finalArray[0].OS + "\n");
      // console.log(finalArray[0].Mouse);
      // console.log(finalArray[0].Keyboard);
      // console.log(finalArray[0].Internet);
      console.log("Recommended:");
      console.log(finalArray[1].Processor);
      console.log(finalArray[1].Memory);
      console.log(finalArray[1].Graphics);
      console.log(finalArray[1].OS + "\n");
      // console.log(finalArray[1].Mouse);
      // console.log(finalArray[1].Keyboard);
      // console.log(finalArray[1].Internet);
    } else {
      console.log("Minimum:");
      parseNormSpecs(dataArray);
    }
  }
}

function main() {
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
            parseSpecs(requirements);
          }
        }
        parseBetter();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

main();
// use steamspy.com/api.php?request=top100in2weeks

//   const url1 = "https://steamspy.com/api.php?request=top100in2weeks";

//  // create function to get data from url1

//   fetch(url1)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log(err);
//     }
//     );
