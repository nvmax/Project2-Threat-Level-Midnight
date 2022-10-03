const parser = require("./parseReqs");
const comparison = require("./queryAndCompare");
require("dotenv").config();

// Fetch from api, print other general data, pull out requirements section, call parser and sql functions
async function specCompare(userId, appid) {
  console.log("comparing");
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
          // const parsed = [[], [], [], []];
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

            const recMin = parser.parseSpecs(requirements);
            console.log(recMin);

            

            systemReadiness = {
              gameInfo: game,
              worthy: await comparison.compareRelevant(recMin, userId),
            };
            // console.log(await comparison.compareRelevant(recMin, userId));
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  // console.log(systemReadiness);
  return systemReadiness;
}

// returns json object
// gameInfo includes all api-returned game info
// worthy object will be either in form:
// verdict: {
//   {cpuMeetsRec: bool},
//   {gpuMeetsRec: bool},
//   {cpuMeetsRec: bool},
//   {ramMeetsRec: bool},
//   {hddMeetsRec: bool},
//   {cpuMeetsMin: bool},
//   {gpuMeetsMin: bool},
//   {ramMeetsMin: bool},
//   {overall: 0-3}              (unknown, doesn't meet, meets min, meets rec)
// }
// or form:
// verdict: {
//   overall: 0
// }

module.exports = { specCompare };
