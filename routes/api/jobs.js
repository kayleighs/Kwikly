const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/jobs"
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/jobs/:id"
//FUTURE need to check if admin, or employee first
router
  .route("/:id")
  .get(jobsController.findById)
  //HERE CHECK USER 
  .put(jobsController.update)
  .delete(jobsController.remove);

router
  .route("/:category")
  .get(jobsController.findByCategory);

module.exports = router;
