const router = require("express").Router();
const menuController = require("../app/controllers/menuController");

router.post("/create", menuController.createMenu);
router.put("/update", menuController.updateMenu);
router.delete("/customdelete", menuController.customDelete);
router.delete("/harddelete", menuController.hardDelete);

//1
router.get("/", menuController.getAllMenu);

module.exports = router;
