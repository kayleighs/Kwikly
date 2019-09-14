const router = require("express").Router();
const userEmployerController = require("../../controllers/userEmployerController");

// Matches with "/api/userEmployer"
router.route("/")
  .get(userEmployerController.findAll)
  .post(userEmployerController.create);

// Matches with "/api/userEmployer/:id"
router
  .route("/:id")
  .get(userEmployerController.findById)
  .put(userEmployerController.update)
  .delete(userEmployerController.remove);

module.exports = router;
