const id = 1185410;
// const id = 499450;
// const id = 1184350;
const url = `https://store.steampowered.com/api/appdetails?appids=${id}`;
// const url = 'https://store.steampowered.com/api/appdetails?appids=10';
// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body

function parseSpecs(specs) {
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

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(Object.keys(data)[0]);
    if (data[Object.keys(data)[0]].data) {
      const game = data[Object.keys(data)[0]].data;
      if (game) {
        if (game.pc_requirements) {
          console.log(game.pc_requirements);
          // check for obvious recommended section
          if (game.pc_requirements.recommended) {
            let dataArray = game.pc_requirements.recommended;
            console.log("Recommended:");
            parseSpecs(dataArray);
          }
          if (game.pc_requirements.minimum) {
            let dataArray = game.pc_requirements.minimum;
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
                  const [
                    Processor,
                    Memory,
                    Graphics,
                    OS,
                    Mouse,
                    Keyboard,
                    Internet,
                  ] = splitMore;
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
              parseSpecs(dataArray);
            }
          }
        }
      }
    }
  })
  .catch(function (err) {
    console.log(err);
  });
