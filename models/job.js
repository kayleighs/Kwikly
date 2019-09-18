const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  employer: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  hiredWorkers: [{ type: String }],
  address: { type: String, required: true },
  location: {
    lat : { type: String, required: true },
    lng : { type: String, required: true }
  },
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
