const express = require("express");
const serverless = require("serverless-http");
const allBodyParts=require("./BodyParts/AllBodyParts.js")
const exerciseData = require('./exercises.js')
const back=require("./BodyParts/back.js")
const cardio=require("./BodyParts/cardio.js")
const chest=require("./BodyParts/chest.js")
const lowerArms=require("./BodyParts/lowerArms.js")
const lowerLegs=require("./BodyParts/lowerLegs.js")
const neck=require("./BodyParts/neck.js")
const shoulders=require("./BodyParts/shoulders.js")
const upperArms=require("./BodyParts/upperArms.js")
const upperLegs=require("./BodyParts/upperLegs.js")
const waist=require("./BodyParts/waist.js")

const chestExercise=require("./BodyParts/chest.js")

const app = express();
const router = express.Router();

//All the body parts will be shown here
router.get("/exercises/bodyPartList", (req, res) => {
  res.status(200).json(allBodyParts)
});

router.get("/exercises/bodyPartList/back", (req, res) => {
  res.status(200).json(back)
});
router.get("/exercises/bodyPartList/cardio", (req, res) => {
  res.status(200).json(cardio)
});
router.get("/exercises/bodyPartList/chest", (req, res) => {
  res.status(200).json(chest)
});
router.get(`/exercises/bodyPartList/lowerarms`, (req, res) => {
  res.status(200).json(lowerArms)
});
router.get("/exercises/bodyPartList/lowerlegs", (req, res) => {
  res.status(200).json(lowerLegs)
});
router.get("/exercises/bodyPartList/neck", (req, res) => {
  res.status(200).json(neck)
});
router.get("/exercises/bodyPartList/shoulders", (req, res) => {
  res.status(200).json(shoulders)
});
router.get("/exercises/bodyPartList/upperArms", (req, res) => {
  res.status(200).json(upperArms)
});
router.get("/exercises/bodyPartList/upperLegs", (req, res) => {
  res.status(200).json(upperLegs)
});
router.get("/exercises/bodyPartList/waist", (req, res) => {
  res.status(200).json(waist)
});

router.get("/exercises", (req, res) => {
  res.status(200).json(exerciseData)
});


app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
