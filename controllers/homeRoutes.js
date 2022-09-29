const router = require("express").Router();
const withAuth = require("../utils/auth");
const axios = require("axios");
const sequelize = require("../config/connection");
const { Op } = require("sequelize");
const recComVer = require("./utils/recComVer");
const topGames = require("./utils/top20save");
const e = require("express");
require("dotenv").config();

router.get("/readiness", withAuth, async (req, res) => {
  systemReadiness = await recComVer.specCompare(626600, 1);
  // systemReadiness = await recComVer.specCompare(req.appid,req.uid);
  console.log(systemReadiness);
  // res.render("readiness", {
  //   readyStatus: systemReadiness,
  // });
});

router.get("/profileupdate", withAuth, async (req, res) => {});

router.get("/search", withAuth, async (req, res) => {
  // systemReadiness = await recComVer.specCompare(626600, 59);
  // systemReadiness = await recComVer.specCompare(req.appid,req.uid);
  // console.log(systemReadiness);
  // console.log(topGames.getTop20());
  const data = await topGames.getTop20();
  const parsedData = JSON.parse(data);
  const toptwenty = parsedData.map((item) =>  ({appid:item.appid, name:item.name}));

  
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
