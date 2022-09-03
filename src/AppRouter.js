import React from "react";
import Main from "./page/Main";
import Footer from "./components/Footer";
import Login from "./page/Login";
// import NotFound from ".page/NotFound"
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
                {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
        </Router>
    )
}

export default AppRouter;