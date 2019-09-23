const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
/*   password: { type: String, required: true }, */
  email: { type: String },
  isAdmin: { type: Boolean, required: true, default: false },
  _id: String,
  statement: {type: String},
  badges: [ {type: String} ], //could be a string that explains the type of badge to show on profile
  savedJobs: [{type: String} ], //This will probably be equal to the _id of the Jobs object
  appliedJobs: [{type: String} ],
  hiredJobs: [{type: String} ], 
  address: {type: String},
  location: {
    lat : { type: String},
    lng : { type: String}
  },
  dateJoined: { type: Date, default: Date.now }

});

const User = mongoose.model("User", userSchema);

module.exports = User;