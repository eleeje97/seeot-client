import React from "react";
import Main from "./page/Main";
import Footer from "./components/Footer";
import Login from "./page/Login";
import KakaoCallback from "./components/KakaoCallback";
import KakaoLogout from "./components/KakaoLogout";
import FittingRoom from "./page/FittingRoom"
import Mypage from "./page/Mypage";
import NotFound from "./page/NotFound"
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

const AppRouter =() => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<>
                                            <Main />
                                            <Footer />
                                          </>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/login/kakao/callback" element={<KakaoCallback />}></Route>
                <Route path="/logout/" element={<KakaoLogout />}></Route>
                <Route path="/fittingroom" element={<FittingRoom />}></Route>
                <Route path="/mypage" element={<Mypage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;