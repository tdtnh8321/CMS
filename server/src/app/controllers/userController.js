const { connect, sql } = require("../../config/db");
const UserController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const pool = await connect;
      const sqlString = "exec loginUser @email, @password ";
      return pool
        .request()
        .input("email", sql.NVarChar, email)
        .input("password", sql.NVarChar, password)
        .query(sqlString, (err, data) =>
          res.status(200).json(data.recordset[0])
        );
    } catch (err) {
      return res.status(500).json({ msg: "Login: " + err });
    }
  },
  changePassword: async (req, res) => {
    try {
      const { _id, password } = req.body;
      // await UserModel.findByIdAndUpdate(_id, password).then(() => {
      //   return res.status(200).json({ msg: "Update succeess" });
      // });
      const pool = await connect;
      const sqlString = "exec changePassword @_id, @password";
      return pool
        .request()
        .input("_id", sql.Int, _id)
        .input("password", sql.NVarChar, password)
        .query(sqlString, (err, data) =>
          res.status(200).json(data.recordset[0])
        );
    } catch (error) {
      return res.status(500).json({ msg: "changePassword: " + error });
    }
  },
};
module.exports = UserController;
