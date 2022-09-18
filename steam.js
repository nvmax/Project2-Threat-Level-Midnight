const https = require("https");
let id = 2100;
let url = `https://store.steampowered.com/api/appdetails?appids=${id}`;

let thing = JSON.parse(
  `[{"name":"minimum","Supported_OS":["Windows® 7 32/64-bit / Vista 32/64 / XP"],"Processor":["Pentium 4 3.0GHz"],"Memory":["1 GB"],"Graphics":["128 MB, Shader model 2.0, ATI 9600, NVidia 6600 or better"],"Hard_Drive":["At least 7.5 GB of free space"],"Sound_Card":["DirectX 9.0c compatible sound card"]},{"name":"recommended","Supported_OS":["Windows® 7 32/64-bit / Vista 32/64 / XP"],"Processor":["Intel core 2 duo 2.4GHz"],"Memory":["1 GB"],"Graphics":["Shader model 3.0, NVidia 7600, ATI X1600 or better"]}]`
);
// console.log(thing);

https.get(url, async (res) => {
  // get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body
  try {
    let data = "";

    // A chunk of data has been received.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on("end", () => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      const game = parsedData[Object.keys(parsedData)[0]];
      if (game.success) {
        console.log(game.data.release_date);
        let recommended = game.data.pc_requirements;
        console.log(JSON.stringify(recommended));
        recommended = JSON.parse(
          `${JSON.stringify(recommended)
            .replace(/"<[:</ >\w\\]+class=[\\\w"]+>/g, ",")
            .replace(/("\w+"):/g, '"name":$1')
            .replace(/{/g, "[")
            .replace(/ *<br>(\\t)*<\/li>| {2,}/g, "")
            .replace(/<li><strong>/g, '"],"')
            .replace(/:<\/strong/g, '":')
            .replace(/> /g, '["')
            .replace(/<[\/\w><]+>/g, '"],')
            .replace(/("[\w .]+),([\w .]+")/g, "$1 or$2")
            .replace(/("name)/g, "{$1")
            .replace(/,"}/g, "}]")
            .replace(/,",/g, "},")
            .replace(/(]?,"\w+) (\w+":)/g, "$1_$2")
            .replace(/","]/g, '"')
            .replace(/,(\w+): /g, ',"$1":["')
            .replace(/>/g, '["')
            .toLowerCase()}`
        );

        //   console.log(recommended);
        console.log(recommended);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// alec ottersons job

// example return. some only return min specs and some items aren't included sometimes. Some are formatted extra different 
// and will take different method: usually those are really old games. Depending how we proceed, maybe check date and if it's from more than 10 years ago call it good?
// Just randomly found and tested several games. Probably need a bigger sample size to get a better idea of the general patterns. 

// [
//   {
//     name: "minimum",
//     OS: ["Windows 7"],
//     Processor: ["Intel Core 2 or AMD equivalent"],
//     Memory: ["1 GB RAM"],
//     Network: ["Broadband Internet connection"],
//     Storage: ["200 MB available space"],
//     "Additional Notes": [
//       "Network Bandwidth of 5Mbps for 540p or 3Mbps for 360p.",
//     ],
//   },
//   {
//     name: "recommended",
//     OS: ["Windows 10"],
//     Processor: [
//       "Intel Core I3+ or AMD equivalent recommended for HD 1080p playback",
//     ],
//     Memory: ["2 GB RAM"],
//     Network: ["Broadband Internet connection"],
//     Storage: ["500 MB available space"],
//     "Additional Notes": [
//       "Network Bandwidth of 12Mbps for 1080p or 8Mbps for 720p.",
//     ],
//   },
// ]
