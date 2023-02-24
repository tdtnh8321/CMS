const router = require("express").Router();

const userController = require("../app/controllers/userController");

//login
router.post("/login", userController.login);

router.post("/changepassword", userController.changePassword);
module.exports = router;
