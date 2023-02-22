const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuSchema = new Schema({});
module.exports = mongoose.model("Menus", MenuSchema);
