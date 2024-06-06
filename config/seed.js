// Require connection file to connect
const mongoose = require("./db-connection.js");
//==========================================================================================//
// Require Models for delete and create operations;
const Trainer = require("../models/Post.js");
const TrainingPackage = require("../models/User.js");
const Member = require("../models/User.js");
//==========================================================================================//

const trainers = [
  {
    email: "john@doe.com",
    password: "123456",
    age: 40,
    isCool: true,
  },
  {
    email: "boba@fett.com",
    password: "jetpackdude",
    age: 35,
    isCool: true,
  },
  {
    email: "darth@vader.com",
    password: "iamyourfather",
    age: 60,
    isCool: false,
  },
];

const trainingPackages = [
  {
    email: "john@doe.com",
    password: "123456",
    age: 40,
    isCool: true,
  },
  {
    email: "boba@fett.com",
    password: "jetpackdude",
    age: 35,
    isCool: true,
  },
  {
    email: "darth@vader.com",
    password: "iamyourfather",
    age: 60,
    isCool: false,
  },
];

const members = [
  {
    title: "Star Wars",
    content: "its really cool",
    author: "Josh",
  },
  {
    title: "MongoDB",
    content: "its a database",
    author: "Per Scholas",
  },
  {
    title: "Dogs are Cool",
    content: "Do i really need to explain??",
    author: "Doglover123",
    comments: [
      {
        content: "you so right",
        author: "dogsdogsdogs",
      },
      {
        content: "true true",
        author: "albert",
      },
    ],
  },
];

async function seed() {
  try {
    await Trainer.deleteMany({});
    await TrainingPackage.deleteMany({});
    await Member.deleteMany({});

    const createdTrainers = await Trainer.create(trainers);

    console.log("Trainers: ", createdTrainers);

    const createdTrainingPackages = await TrainingPackage.create(
      trainingPackages
    );

    console.log("TrainingPackages: ", createdTrainingPackages);

    const createdMembers = await Member.create(members);

    console.log("Members: ", createdMembers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();
