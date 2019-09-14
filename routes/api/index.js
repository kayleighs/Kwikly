const router = require("express").Router();
const jobRoutes = require("./jobs");
const userEmployerRoutes = require("./userEmployer");
const userRoutes = require("./user");

// Book routes
router.use("/jobs", jobRoutes);
router.use("/userEmployer", userEmployerRoutes);
router.use("/user", userRoutes);

module.exports = router;
