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
  createMenu: async (req, res) => {
    try {
      const {
        menuId,
        name,
        title,
        icon,
        description,
        parentId,
        link,
        order,
        requiredPermissionId,
        creatorUserId,
        isParent,
        menuColor,
        isActive,
        iconColor,
      } = req.body;
      const d = new Date();
      const pool = await connect;
      const sqlString =
        "exec createMenu @menuId , @name, @title, @icon, @description, @parentId, @link, @creationTime, @order, @requiredPermissionId, @creatorUserId, @isParent, @menuColor, @isActive, @iconColor ";
      return pool
        .request()
        .input("menuId", sql.NVarChar, menuId)
        .input("name", sql.NVarChar, name)
        .input("title", sql.NVarChar, title)
        .input("icon", sql.NVarChar, icon)
        .input("description", sql.NVarChar, description)
        .input("parentId", sql.NVarChar, parentId)
        .input("link", sql.NVarChar, link)
        .input("creationTime", sql.Date, d)
        .input("order", sql.Int, order)
        .input("requiredPermissionId", sql.NVarChar, requiredPermissionId)
        .input("creatorUserId", sql.NVarChar, creatorUserId)
        .input("isParent", sql.Int, isParent)
        .input("menuColor", sql.NVarChar, menuColor)
        .input("isActive", sql.Int, isActive)
        .input("iconColor", sql.NVarChar, iconColor)
        .query(sqlString, (err, data) => {
          if (err) {
            return res.status(500).json({ msg: "createMenu" + err });
          }
          return res.status(200).json(data.recordset);
        });
    } catch (error) {
      return res.status(500).json({ msg: "createMenu" + error });
    }
  },
  //3. Sửa thông tin menu
  updateMenu: async (req, res) => {
    try {
      const {
        menuId,
        name,
        title,
        icon,
        description,
        parentId,
        link,
        order,
        requiredPermissionId,
        creatorUserId,
        isParent,
        menuColor,
        isActive,
        iconColor,
      } = req.body;
      const d = new Date();
      const pool = await connect;
      const sqlString =
        "exec updateMenu @menuId , @name, @title, @icon, @description, @parentId, @link, @creationTime, @order, @requiredPermissionId, @creatorUserId, @isParent, @menuColor, @isActive, @iconColor ";
      return pool
        .request()
        .input("menuId", sql.NVarChar, menuId)
        .input("name", sql.NVarChar, name)
        .input("title", sql.NVarChar, title)
        .input("icon", sql.NVarChar, icon)
        .input("description", sql.NVarChar, description)
        .input("parentId", sql.NVarChar, parentId)
        .input("link", sql.NVarChar, link)
        .input("creationTime", sql.Date, d)
        .input("order", sql.Int, order)
        .input("requiredPermissionId", sql.NVarChar, requiredPermissionId)
        .input("creatorUserId", sql.NVarChar, creatorUserId)
        .input("isParent", sql.Int, isParent)
        .input("menuColor", sql.NVarChar, menuColor)
        .input("isActive", sql.Int, isActive)
        .input("iconColor", sql.NVarChar, iconColor)
        .query(sqlString, (err, data) => {
          if (err) {
            return res.status(500).json({ msg: "updateMenu" + err });
          }
          return res.status(200).json(data.recordset);
        });
    } catch (error) {
      return res.status(500).json({ msg: "updateMenu" + error });
    }
  },
  //4. Xóa customDelete
  customDelete: async (req, res) => {
    try {
      const { menuId } = req.body;
      const pool = await connect;
      const sqlString = "exec customDelete @menuId";
      return pool
        .request()
        .input("menuId", sql.NVarChar, menuId)
        .query(sqlString, (err, data) => {
          if (err) {
            return res.status(500).json({ msg: "customDelete" + err });
          }
          return res.status(200).json(data.recordset);
        });
    } catch (error) {
      return res.status(500).json({ msg: "customDelete" + error });
    }
  },
  //5. xoa hardDelete
  hardDelete: async (req, res) => {
    try {
      const { menuId } = req.body;
      const pool = await connect;
      const sqlString = "exec hardDelete @menuId";
      return pool
        .request()
        .input("menuId", sql.NVarChar, menuId)
        .query(sqlString, (err, data) => {
          if (err) {
            return res.status(500).json({ msg: "hardDelete" + err });
          }
          return res.status(200).json(data.recordset);
        });
    } catch (error) {
      return res.status(500).json({ msg: "hardDelete" + error });
    }
  },
};
module.exports = MenuController;
