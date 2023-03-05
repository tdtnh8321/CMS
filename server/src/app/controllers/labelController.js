const { connect, sql } = require("../../config/db");
const LabelController = {
  //1.Lay danh sach label theo menuId
  getLabelsByMenuId: async (req, res) => {
    try {
      const { menuId } = req.body;
      const pool = await connect;
      const sqlString = "exec getLabelsByMenuId @menuId";
      return pool
        .request()
        .input("menuId", sql.NVarChar, menuId)
        .query(sqlString, (err, data) => {
          if (err) {
            return res.status(500).json({ msg: "getLabelsByMenuId" + err });
          }
          return res.status(200).json(data.recordset);
        });
    } catch (error) {
      return res.status(500).json("getLabelByMenuId ", error);
    }
  },
};
