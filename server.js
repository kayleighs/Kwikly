const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB, altered for making database storage params for photos
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/jobApp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
