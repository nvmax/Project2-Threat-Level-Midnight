const router = require("express").Router();
const withAuth = require("../utils/auth");
const axios = require("axios");
const sequelize = require("../config/connection");
const { Op } = require("sequelize");
const recComVer = require("./utils/recComVer");
const purifier = require("./utils/oxiGame");
const e = require("express");
require("dotenv").config();

router.get("/readiness", withAuth, async (req, res) => {
  //systemReadiness = await recComVer.specCompare(626600, 1);
  systemReadiness = await recComVer.specCompare(req.appid,req.uid);
  console.log(systemReadiness);
  // res.render("readiness", {
  //   readyStatus: systemReadiness,
  // });
});

router.get("/profileupdate", withAuth, async (req, res) => { });

router.get("/search", withAuth, async (req, res) => {
  // systemReadiness = await recComVer.specCompare(626600, 59);
  systemReadiness = await recComVer.specCompare(req.appid,req.uid);
  console.log(systemReadiness);
  const gameArray = [];
  try {
    // https://intense-inlet-78981.herokuapp.com/
    const games =
      "https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?key=" +
      process.env.ST_KEY;
    const response = await axios.get(games);
    gameArray.push(...response.data.response.ranks.map((game) => game.appid));
  } catch (error) {
    console.log(error);
  }
  const toptwenty = [];
  let i = 0;
  while (toptwenty.length < 20 && i < 99) {
    toptwenty.push(...(await purifier.discriminateGames([gameArray[i]])));
    i++;
  }
  res.render("search", {
    top20: toptwenty,
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/search");
    console.log("we got here");
    return;
  }
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/", (req, res) => {
  res.render("index", { logged_in: req.session.logged_in });
});

module.exports = router;
