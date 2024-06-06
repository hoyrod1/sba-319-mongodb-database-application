// Require connection file to connect
const mongoose = require("./db-connection.js");
//==========================================================================================//
// Require Models for delete and create operations;
const Trainer = require("../model/Trainer.js");
const TrainingPackage = require("../model/TrainingPackage.js");
const Member = require("../model/Member.js");
//==========================================================================================//

const trainers = [
  {
    name: "Kaden",
    username: "BooBoo",
    email: "booboo@example.com",
  },
  {
    name: "Kamori",
    username: "KingKam",
    email: "king_kam@example.com",
  },
  {
    name: "Justin",
    username: "JustInTime",
    email: "justin@example.com",
  },
  {
    name: "Rodney",
    username: "Hot Rod",
    email: "hoyrod1@aol.com",
  },
];

const trainingPackages = [
  {
    type: "resistance-training",
    pricePerHour: "$100",
    description:
      "The use of Free weights, resistance bands and the use of body wight",
  },
  {
    type: "cardio-training",
    pricePerHour: "$100",
    description:
      "The use of stationary machines, the use of out-door activity and swimming",
  },
  {
    type: "flexability-training",
    pricePerHour: "$100",
    description:
      "The use of static, dynamic stretching, ballistic stretching, active stretching, PNF stretching",
  },
  {
    type: "combination-training",
    pricePerHour: "$200",
    description:
      "This training regiment includes resistance training, cardio training and stretching",
  },
];

const members = [
  {
    name: "Curtis Jackson",
    username: "BooBoo",
    email: "booboo@example.com",
  },
  {
    name: "Camron Dipset",
    username: "KingKam",
    email: "king_kam@example.com",
  },
  {
    name: "Carmelo Anthony",
    username: "JustInTime",
    email: "justin@example.com",
  },
  {
    id: 4,
    name: "Ronnie Coleman",
    username: "Mr-Olympia",
    email: "MrOlympia@aol.com",
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
