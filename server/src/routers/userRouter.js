const router = require("express").Router();

const userController = require("../app/controllers/userController");

//login
router.post("/login", userController.login);
//
router.post("/user/refresh_token", userController.getAccessToken);
//info
router.get("/info", userController.getUserInfor);
//logout
router.get("/logout", userController.logout);
module.exports = router;
