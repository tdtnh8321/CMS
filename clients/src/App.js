import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Header from "./components/Header";
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";
import Auth from "./features/Auth";
import Home from "./features/Home";
function App() {
  const auth = useSelector((slice) => slice.auth);
  return (
    <div className="content-wrapper max-w-screen-2xl text-base mx-auto bg-blue-200 font-mono flex flex-row">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div className="basis-1/5">{auth.isLogged && <Header />}</div>
          <div className="basis-4/5 flex flex-col">
            <MenuTop />
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home/*" element={<Home />} />
            </Routes>
          </div>

          {/* {auth.isLogged && <Footer />} */}
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
