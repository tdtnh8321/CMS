const sql = require("mssql/msnodesqlv8");

const config = {
  server: "DESKTOP-GNO2ID0\\SQLEXPRESS",
  user: "sa",
  password: "sa",
  database: "CMS",
  driver: "msnodesqlv8",
};

const connect = new sql.ConnectionPool(config).connect().then((pool) => {
  console.log("connect sql");
  return pool;
});
module.exports = { connect, sql };
