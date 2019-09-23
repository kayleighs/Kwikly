const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//axios and dotenv needed to use Directions API and photo uploading
const axios = require("axios");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// API Routes
router.use("/api", apiRoutes);
router.use(fileUpload());

// This route below is specific for making axios calls to Directions API, can only be done via backend
// See API.js within the 'utils' folder within 'src' folder to understand how
// The front-end handles this route
router.use("/dir/:origin/:destination/:transitMode", (req, res)=> {
  axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + req.params.origin + "&destination=" + req.params.destination + "&mode=" + req.params.transitMode + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
    .then(DirModel=> res.json(DirModel.data))
    .catch(err => res.status(422).json(err));
});

//--------------------------Use for adding photos to file-----------------
router.use("/add-photo", (req, res)=> {
  if(req.files === null) {
    return res.status(400).json({ msg: "no file uploaded" })
  }
  const file = req.files.file;

  file.mv(`client/public/photos/${file.name}`, err=> {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/photos/${file.name}`})
  })
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
