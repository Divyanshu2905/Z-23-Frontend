import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoute from "./utils/protectedRoute";

import { Dashboard } from "./pages/CA/Dashboard/Dashboard";
import Landing from "./pages/Windows/Landing";
import { Home as CaHome } from "./pages/CA/Home";
import { CaRegister } from "./pages/CA/Auth/CaRegister";
import { CaLogin } from "./pages/CA/Auth/CaLogin";
import { Events } from "./pages/Main/Event/Events";
import { MainRegister } from "./pages/Main/Auth/MainRegister";
import { MainLogin } from "./pages/Main/Auth/MainLogin";

function App() {
  const getCaUser = useSelector((state) => state.ca).result;
  const getMainUser = useSelector((state) => state.user).result;
  return (
    <>
      <>
        <Routes>
          <Route path="/" index element={<Landing />} />
          <>
            {/* <Route path="home" index element={<Home />} /> */}
            {/* <Route path="faq" index element={<Faq />} /> */}
            {/* <Route path="tnc" index element={<TnC />} /> */}
            <Route path="login" element={<MainLogin />} />
            <Route path="register" element={<MainRegister />} />
            <Route
              path="events"
              element={
                <ProtectedRoute
                  Component={Events}
                  redirectUrl={"/login"}
                  isLoggedIn={
                    Object.keys(getMainUser).length === 0 ||
                    Object.keys(getMainUser).length === 1
                      ? false
                      : true
                  }
                />
              }
            />
          </>
          <Route path="campus-ambassador" element={<CaHome />}>
            <Route path="register" element={<CaRegister />}></Route>
            <Route path="login" element={<CaLogin />}></Route>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute
                  Component={Dashboard}
                  redirectUrl={"/campus-ambassador/login"}
                  isLoggedIn={
                    Object.keys(getCaUser).length === 0 ||
                    Object.keys(getCaUser).length === 1
                      ? false
                      : true
                  }
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </>
  );
}

export default App;
