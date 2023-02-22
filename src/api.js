const express = require("express");
const serverless = require("serverless-http");
const exerciseData = require('./exercises.js')
const chestExercise=require("./BodyParts/chest.js")

const app = express();
const router = express.Router();

router.get("/exercises", (req, res) => {
  res.status(200).json(exerciseData)
});

router.get("/chest", (req, res) => {
  res.status(200).json(chestExercise)
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
