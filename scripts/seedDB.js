const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jobApp"
);

const jobSeed = [
    {
      title: "Test Data at Columbia University",
      employer: "Professor Smith",
      description: "These are the details that describe the job at Columbia",
      hiredWorkers: ["Bob", "Jim", "Dale"],
      address: "116th St and Broadway, New York, NY 10027",
      location: {
          lat: 40.8075345132,
          lng: -73.9625730902
      },
      date: new Date(Date.now())
    },
    {   
      title: "Test Data at Museum of Natural History",
      employer: "Professor Smith",
      description: "These are the details that describe the job at The Museum",
      hiredWorkers: ["Jane", "Joe"],
      address: "Central Park West and 79th St, New York, NY 10024",
      location: {
          lat: 40.781,
          lng: -73.9731
      },
      date: new Date(Date.now())
    },
    {
      title: "Job at Madison Square Garden",
      employer: "The Knicks",
      description: "These are the details that describe the job at MSG",
      hiredWorkers: ["Kevin", "Leela"],
      adddress: "Two Pennsylvania Plaza, New York, NY 10121-0091",
      location: {
          lat: 40.7503,
          lng: -73.9930
      },
      date: new Date(Date.now())
    },
    {
      title: "Zookeeper at Central Park Zoo",
      employer: "First Zookeeper",
      description: "Clean animal cages",
      hiredWorkers: ["Donny", "Diana", "John Doe"],
      address: "East 64th Street, New York, NY 10021",
      location: {
        lat: 40.767916,
        lng: -73.971855
      },
      date: new Date(Date.now())
    }
];

const userSeed = [
  {
    name: "John Doe",
    statement: "This is what John Doe says on his profile page",
    badges: [ "badge1", "badge1", "badge2" ], //I was thinking users can get multiple copies of the same badge 
    savedJobs: [], 
    appliedJobs: [],
    hiredJobs: ["5d7eb8dddf17cc2070359e20"],
    address: "817 5th Ave, New York, NY 10065",
    location: {
      lat : 40.766618,
      lng : -73.971023
    },
    dateJoined: new Date(Date.now())
  }
];

const empSeed = [
  {
    name: "Testing Employment Agency",
    statement: "Hiring organization. Could also be an Individual",
    badges: [ "favEmployer1", "favEmployer2", "favEmployer2" ], //could be a string that explains the type of badge to show on profile
    businessAddress: "232-2398 31st Ave, Astoria, NY 11106",
    location: {
      lat : 40.766375,
      lng : -73.927807
    },
    dateJoined: new Date(Date.now())
  }
]

db.Jobs
  .remove({})
  .then(() => db.Jobs.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " job records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " jobseeker records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserEmployers
  .remove({})
  .then(() => db.UserEmployers.collection.insertMany(empSeed))
  .then(data => {
    console.log(data.result.n + " employer records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });