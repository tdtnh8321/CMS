const UserModel = require("../models/userModel");

const UserController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email, password });
      if (!user)
        return res
          .status(400)
          .json({ msg: "Email or password is not exists." });
      res.cookie("refreshtoken", user._id, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      if (user.role == 0) {
        return res.status(200).json({ msg: "Login admin success!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: "Login: " + err });
    }
  },
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      console.log(rf_token);
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

      res.json({ access_token: rf_token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserInfor: async (req, res) => {
    try {
      const id = req.header("Authorization");
      const user = await UserModel.findById(id).select("-password");
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = UserController;
