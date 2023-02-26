import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserInfo from "./pages/UserInfo";
function Home() {
  return (
    <Routes>
      <Route path="" element={<HomePage />}></Route>
      <Route path="/userInfo" element={<UserInfo />}></Route>
    </Routes>
  );
}

export default Home;
