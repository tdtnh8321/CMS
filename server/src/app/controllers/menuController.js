const { connect, sql } = require("../../config/db");
const MenuController = {
  //1. Lấy danh sách menu
  getAllMenu: async (req, res) => {
    try {
      const pool = await connect;
      const sqlString = "exec getAllMenu";
      return pool.request().query(sqlString, (err, data) => {
        if (err) {
          return res.status(500).json({ msg: "getAllMenu" + err });
        }
        return res.status(200).json(data.recordset);
      });
    } catch (error) {
      return res.status(500).json({ msg: "getAllMenu" + error });
    }
  },
  //2. Thêm menu
  //3. Sửa thông tin menu
  //4. Xóa
};
module.exports = MenuController;
