const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  location: [{ type: String, required: true }],
  description: String,
  image: { type: String, trim: true },
  employerName: { type: String},
  category: {type: String, required: true},
  isAvailable: {type: Boolean, required: true, default: true},
  salaryRange: {type: String},
  date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
