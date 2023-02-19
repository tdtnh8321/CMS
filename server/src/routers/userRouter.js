const router = require("express").Router();

const userController = require("../app/controllers/userController");

//login
router.post("/login", userController.login);
//
// router.post("/refresh_token", userController.getAccessToken);
// //info
// router.get("/info", userController.getUserInfor);
//logout
//router.get("/logout", userController.logout);
//change password
router.post("/changepassword", userController.changePassword);
module.exports = router;
