const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jobApp"
);

const jobSeed = [
    {
        place: "Columbia University",
        location: {
            lat: 40.8075345132,
            lng: -73.9625730902
        },
        date: new Date(Date.now())
    },
    {
        place: "Museum of Natural History",
        location: {
            lat: 40.781,
            lng: -73.9731
        },
        date: new Date(Date.now())
    },
    {
        place: "Madison Square Garden",
        location: {
            lat: 40.7503,
            lng: -73.9930
        },
        date: new Date(Date.now())
    }
];

db.Jobs
  .remove({})
  .then(() => db.Jobs.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });