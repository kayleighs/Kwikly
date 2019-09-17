const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEmployerSchema = new Schema({
  name: { type: String, required: true },
  statement: {type: String, required: true},
  badges: [ {type: String} ], //could be a string that explains the type of badge to show on profile
  businessAddress: {type: String, required: true},
  location: {
    lat : { type: String, required: true },
    lng : { type: String, required: true }
  },
  dateJoined: { type: Date, default: Date.now }

});

const UserEmployer = mongoose.model("UserEmployer", userEmployerSchema);

module.exports = UserEmployer;
