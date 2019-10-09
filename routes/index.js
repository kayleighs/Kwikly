const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//axios and dotenv needed to use Directions API
const axios = require("axios");
require("dotenv").config();

// API Routes
router.use("/api", apiRoutes);

// This route below is specific for making axios calls to Directions API, can only be done via backend
// See API.js within the 'utils' folder within 'src' folder to understand how
// The front-end handles this route
router.use("/dir/:originLat/:originLng/:destination/:transitMode", (req, res)=> {
  axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + req.params.originLat + "," + req.params.originLng + "&destination=" + req.params.destination + "&mode=" + req.params.transitMode + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
    .then(DirModel=> res.json(DirModel.data))
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
