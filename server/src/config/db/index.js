const sql = require("mssql/msnodesqlv8");

const config = {
  server: "localhost",
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
