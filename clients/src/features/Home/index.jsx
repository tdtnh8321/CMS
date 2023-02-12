import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
function Home() {
  return (
    <Routes>
      <Route path="" element={<HomePage />}></Route>
    </Routes>
  );
}

export default Home;
