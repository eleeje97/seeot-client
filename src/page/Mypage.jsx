// import { Button } from "bootstrap";
import React from "react";
import Logo from "../images/logo.png";
import Upload from "../images/sample_1.jpg";
import Button from "../components/common/Button";

function Mypage() {
    
    return (
        <>
            {/* Logo */}
            <div
                // id="layout-menu"
                className="menu-vertical menu bg-menu-theme mb-fit"
            >
                <div className="app-brand demo">
                    <a href={"/"} className="app-brand-link">
                        <img
                            src={Logo}
                            viewBox="0 0 50 42"
                            width="50"
                            alt=""
                        />
                        <span className="app-brand-text demo menu-text fw-bolder ms-2">
                            See옷
                        </span>
                    </a>
                </div>
            </div>
            {/* /Logo */}
            <div className="layout-container">
                <div className="card-body">
                    <img className="d-block" src={Upload} alt="" viewBox="0 0 70 42" width="300" />
                    <div
                        style={{
                            height: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "0 10px",
                          }}
                    >
                        <Button text="Upload" />
                    </div>
                </div>
                <div className="flex-grow-1 container-p-y">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        <img className="d-block" src={Upload} alt="" viewBox="0 0 70 42" width="300" />
                        <img className="d-block" src={Upload} alt="" viewBox="0 0 70 42" width="300" />
                        <img className="d-block" src={Upload} alt="" viewBox="0 0 70 42" width="300" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mypage;