import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoute from "./utils/protectedRoute";

import { Dashboard } from "./pages/CA/Dashboard/Dashboard";
import Landing from "./pages/Windows/Landing";
import { CaHome } from "./pages/CA/Home";
import { Home } from "./pages/Main/Home/Home"
import { CaRegister } from "./pages/CA/Auth/CaRegister";
import { CaLogin } from "./pages/CA/Auth/CaLogin";
import { Events } from "./pages/Main/Event/Events";
import { MainRegister } from "./pages/Main/Auth/MainRegister";
import { MainLogin } from "./pages/Main/Auth/MainLogin";
// import {Schedule} from "./pages/Main/Schedule/Schedule";

function App() {
  const getCaUser = useSelector((state) => state.ca).result;
  const getMainUser = useSelector((state) => state.user).result;
  return (
    <>
      <>
        <Routes>
          <Route path="/" index element={<Landing />} />
          <>
            <Route path="home" element={<Home />} />
            {/* <Route path="faq" element={<Faq />} /> */}
            {/* <Route path="tnc" element={<TnC />} /> */}
            {/* <Route path="schedule" element={<Schedule />} /> */}
            <Route path="login" element={<MainLogin />} />
            <Route path="register" element={<MainRegister />} />
            <Route
              path="events"
              element={
                <ProtectedRoute
                  Component={Events}
                  redirectUrl={"/login"}
                  isLoggedIn={getMainUser.isVerified}
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
                  isLoggedIn={getCaUser.isVerified}
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
