const router = require("express").Router();
const { Steam } = require("../../models");
const Op = require("sequelize").Op;
const axios = require("axios");

// GET /api/steam

router.get("/", async (req, res) => {
  // Access our User model and run .findAll() method)
  try {
    const steamData = await Steam.findAll();
    res.status(200).json(steamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all games with a partial name match
router.get("/:name", async (req, res) => {
  try {
    if (req.params.name.match(/^\s*\d+\s*$/g)) {
      const steamData = await Steam.findAll({
        where: {
          appid: {
            [Op.like]: `${req.params.name.trim()}`,
          },
        },
        raw: true,
      });
    } else if (req.params.name.includes("%")) {
      const steamData = await Steam.findAll({
        where: {
          name: {
            [Op.contains]: `%${req.params.name}%`,
          },
        },
        raw: true,
      });
    } else {
      const nameArr = req.params.name.split(" ");
      const name = nameArr.join("%");

      const steamData = await Steam.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
        raw: true,
      });
    //   console.log(steamData);
        const cleanedData = [];
        let i = 0;
        // looop through list and check content type to only show games
      for (item of steamData) {
        console.log(i);
        i++;
        try {
          const data = (await axios.get(
            `https://store.steampowered.com/api/appdetails?appids=${item.appid}`
          )).data;
        //   console.log(data);
          if (data) {
            if (data[item.appid].data) {
              // console.log(data[Object.keys(data)[0]].data);
              if (data[item.appid].data.type === "game") {
                //   console.log(data[Object.keys(data)[0]].data.type);
                cleanedData.push(item)
              }
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    //   console.log(cleanedData);
      res.status(200).render("search", { game: cleanedData });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


// It work but takes a long time and is prone to hitting the api call limit. A good solution might be to add an isGame column to our existing steam db
// and prefer to use our table values instead, if we have them. I reckon after only a relatively few searches and updates we'll have most of the popular
// searches and top-played games filled out and won't need to rely all the much on the api, leaving things faster, and more reliable.
// I wrote some rough code that might work for this so that it can hopefully be thrown together really quickly and we don't have to think about it further.
// We may also consider something to make sure we don't query/api call if it's the same search and your idea about a local save would be helpful. I feel those
// solutions would be less helpful and maybe even more tricky than this one though.

// // possible new steam column, prefilled with null values until seen for first time
// {
//     {"id": "1"},
//     {"name":"Counterstrike"},
//     {"appid":"10"},
//     {"isGame":true},
// }

// // to update a steam row
// Steam.update(game, {
//     where: {
//         id: id
//     }
// })

// // tentative code to prefer using existing table value or, if not seen before, to use the api to get the value and update the table in the process accordingly
// const cleanedData = [];
// for (item of steamData) {
// console.log(i);
// if(item.isGame !== null){
//     if(item.isGame === true)
//     {cleanedData.push(item);}
// }
// else{
// try {
//   const data = (await axios.get(
//     `https://store.steampowered.com/api/appdetails?appids=${item.appid}`
//   )).data;
//   if (data) {
//     if (data[item.appid].data) {
//       if (data[item.appid].data.type === "game") {
//         Steam.update({isGame:true}, {
//             where: {
//                 appid: appid,
//             }
//         })
//         cleanedData.push(item)
//       }else{
//         Steam.update({isGame:false}, {
//             where: {
//                 appid: appid,
//             }
//         })
//       }
//     }
//   }
// } catch (error) {
//   console.log(error.message);
// }
// }}