import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../authSlice";
import axios from "axios";
function LoginPage(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    err: "",
    sussess: "",
  });
  const dispatch = useDispatch();
  const { email, password, err, sussess } = user;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      console.log(res.data.msg);
      setUser({ ...user, err: "", sussess: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(login());

      navigate("/home");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <div className="w-full  p-10">
      <div className="w-96  border-2 border-black m-auto flex flex-col">
        <div className="w-full text-center font-semibold">Login</div>
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="w-full items-center flex flex-col">
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
