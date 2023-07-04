const express = require("express");

const router = express.Router();
const mySkillsRoute = require("./myskills");
const aboutMeRoute = require("./aboutme");

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("pages/index", { pageTitle: "Welcome" });
  });

  router.use("/myskills", mySkillsRoute());
  router.use("/aboutMe", aboutMeRoute());

  return router;
};
