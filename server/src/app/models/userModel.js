const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  idAccount: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  role: {
    type: Number, //0:admin,1:user
  },
});
module.exports = mongoose.model("Users", UserSchema);
