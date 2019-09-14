const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEmployerSchema = new Schema({
  name: { type: String, required: true },

});

const UserEmployer = mongoose.model("UserEmployer", userEmployerSchema);

module.exports = UserEmployer;
