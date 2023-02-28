const userRouter = require("./userRouter");
const menuRouter = require("./menuRouter");
function route(app) {
  app.use("/user", userRouter);
  app.use("/menu", menuRouter);
}
module.exports = route;
