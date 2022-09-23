const id = 214630;
// const id = 499450;
// const id = 1184350;
const url = `https://store.steampowered.com/api/appdetails?appids=${id}`;
// const url = 'https://store.steampowered.com/api/appdetails?appids=10';
// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body

function parseNormSpecs(specs) {
  // console.log("there");
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
        if (game.free) {
          console.log(`Free? ${game.free}`);
        }
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
          console.log(`Runs on Mac`);
          // console.log(typeof game.mac_requirements.minimum);
          // requirements = game.mac_requirements;
          // parseSpecs(requirements);
          // }
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
            console.log(typeof game.pc_requirements);
            parseSpecs(requirements);
          }
        }
      }
    }
  })
  .catch(function (err) {
    console.log(err);
  });

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
