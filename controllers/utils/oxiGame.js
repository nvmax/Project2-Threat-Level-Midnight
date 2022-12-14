const { Steam } = require("../../models");
const Op = require("sequelize").Op;
const axios = require("axios");
require("dotenv").config();

// function to filter out non-game data
async function discriminateGames(dirtyArray, returnAmount = "partial") {
  // identify if appid or full steam object and get steam object if needed
  if (typeof dirtyArray[0] === "number") {
    dirtyArray = await Steam.findAll({
      where: {
        appid: { [Op.or]: dirtyArray },
      },
      raw: true,
    });
  }
  // loop through array and check content type to only show games
  const purifiedArray = [];
  let i = 0;
  for (suspect of dirtyArray) {
    i++;
    if (suspect.isgame !== null) {
      if (suspect.isgame === 1) {
        purifiedArray.push(suspect);
      }
    } else {
      try {
        // console.log(suspect);
        const data = (
          await axios.get(
            `https://store.steampowered.com/api/appdetails?appids=${suspect.appid}&?key=${process.env.ST_KEY}`
          )
        ).data;
        // console.log(data);
        if (data) {
          if (data[suspect.appid].data) {
            // console.log(data[Object.keys(data)[0]].data);
            if (data[suspect.appid].data.type === "game") {
              // console.log(data[Object.keys(data)[0]].data.type);
              // update steam game column
              Steam.update(
                { isgame: true },
                {
                  where: {
                    id: suspect.id,
                  },
                }
              );
              if (returnAmount === "all") {
                purifiedArray.push(data[suspect.appid].data);
              }
              else{purifiedArray.push(suspect);}
              continue;
            }
          }
        }
        Steam.update(
          { isgame: false },
          {
            where: {
              id: suspect.id,
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return purifiedArray;
}

module.exports = { discriminateGames };
