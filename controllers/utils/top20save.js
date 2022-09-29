const fs = require("fs").promises;
const purifier = require("./oxiGame");
const axios = require("axios");
require("dotenv").config();

async function updateTop20() {
  const gameArray = [];
  try {
    // https://intense-inlet-78981.herokuapp.com/
    const games = `https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?key=${process.env.ST_KEY}`;

    const response = await axios.get(games);
    gameArray.push(...response.data.response.ranks.map((game) => game.appid));

    const toptwenty = [];
    let i = 0;
    while (toptwenty.length < 20 && i < 99) {
      toptwenty.push(
        ...(await purifier.discriminateGames([gameArray[i]], "all"))
      );
      i++;
    }
    await fs.writeFile("./assets/top20.json", JSON.stringify(toptwenty));
  } catch (error) {
    console.log(error);
  }
  setTimeout(updateTop20, 6000000);
}

async function getTop20() {
  try {
    const top20 = fs.readFile("./assets/top20.json", "utf-8");

    return top20;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { updateTop20, getTop20 };
