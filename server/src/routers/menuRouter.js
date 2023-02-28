const router = require("express").Router();
const menuController = require("../app/controllers/menuController");
//1
router.get("/", menuController.getAllMenu);

module.exports = router;
