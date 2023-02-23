const express = require("express");
const cors = require('cors');
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
//app.use(cors());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}


const router = express.Router();

//All the body parts will be shown here
router.get("/exercises/bodyPartList",cors(corsOptions), (req, res) => {
  res.status(200).json(allBodyParts)
});

router.get("/exercises/bodyPartList/back",cors(corsOptions), (req, res) => {
  res.status(200).json(back)
});
router.get("/exercises/bodyPartList/cardio",cors(corsOptions), (req, res) => {
  res.status(200).json(cardio)
});
router.get("/exercises/bodyPartList/chest",cors(corsOptions), (req, res) => {
  res.status(200).json(chest)
});
router.get(`/exercises/bodyPartList/lowerarms`,cors(corsOptions), (req, res) => {
  res.status(200).json(lowerArms)
});
router.get("/exercises/bodyPartList/lowerlegs",cors(corsOptions), (req, res) => {
  res.status(200).json(lowerLegs)
});
router.get("/exercises/bodyPartList/neck",cors(corsOptions), (req, res) => {
  res.status(200).json(neck)
});
router.get("/exercises/bodyPartList/shoulders",cors(corsOptions), (req, res) => {
  res.status(200).json(shoulders)
});
router.get("/exercises/bodyPartList/upperArms",cors(corsOptions), (req, res) => {
  res.status(200).json(upperArms)
});
router.get("/exercises/bodyPartList/upperLegs",cors(corsOptions), (req, res) => {
  res.status(200).json(upperLegs)
});
router.get("/exercises/bodyPartList/waist",cors(corsOptions), (req, res) => {
  res.status(200).json(waist)
});

router.get("/exercises/exercise/:id/", cors(corsOptions), (req, res) => {
  const user_id = req.params.id;
  res.send(exerciseData.filter(element=>element.id==user_id))
  //res.status(200).json(exerciseData.filter(element=>element.id==user_id))
});

router.get("/exercises/target/:id/", cors(corsOptions), (req, res) => {
  const user_id = req.params.id;
  //res.send(user_id)
  res.send(exerciseData.filter(element=>element.target==user_id))
  //res.status(200).json(exerciseData.filter(element=>element.id==user_id))
});

router.get("/exercises/equipment/:id/", cors(corsOptions), (req, res) => {
  const user_id = req.params.id;
  //res.send(user_id)
  res.send(exerciseData.filter(element=>element.equipment==user_id))
  //res.status(200).json(exerciseData.filter(element=>element.id==user_id))
});

router.get("/exercises", cors(corsOptions), (req, res) => {
  res.status(200).json(exerciseData)
});


app.use(`/.netlify/functions/api`, router,cors(corsOptions));



module.exports = app;
module.exports.handler = serverless(app);
