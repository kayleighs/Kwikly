const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/byname/:username")
  .get(userController.findByName)

router
  .route("/by-email/:email")
  .get(userController.findByEmail)
  .put(userController.updateByEmail);

module.exports = router;
