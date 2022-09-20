import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/common/LogoSeeot"
import Second from "../images/sample_2.jpg";
import Third from "../images/sample_3.jpg";
// import { Button } from "bootstrap";
import Button from "../components/common/Button";
import { BiSave } from 'react-icons/bi';

function FittingRoom() {

    const location = useLocation();
    const user = location.state?.userInfo.user;
    const [fullbody, setFullbody] = useState('');
    console.log("profile"+user.full_body_img_path);
    const navigate = useNavigate();
    if (user.full_body_img_path === null) {
        alert("Please Save Your Profile");
        // window.location.replace()
        // navigate("/mypage", {state: {userInfo: location.state?.userInfo}});
    }

    useEffect(() => {
        if (user.full_body_img_path) {
            setFullbody('http://210.106.99.80:5050/' + user.full_body_img_path);
        }
    }, []);

    return (
        <>
            <Logo />
            <div className="layout-container">
                {/* Fitting */}
                <div className="container-p-y card-body">
                    <img className="d-block" src={fullbody} alt="" viewBox="0 0 70 42" width="300" />
                    <div className="demo-vertical-spacing btn">
                        <Button text="Fitting" />
                        <BiSave />
                    </div>
                </div>
                {/* /Fitting */}
                {/* Choose */}
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-pills mb-3 nav-fill">
                        <li class="nav-item">
                            <button
                                type="button"
                                class="nav-link active"
                                role="tab"
                                data-bs-toggle="tab"
                                data-bs-target="#navs-pills-justified-home"
                                aria-controls="navs-pills-justified-home"
                                aria-selected="true"
                            >
                                <i class="tf-icons bx bx-home"></i> Home
                                <span class="badge rounded-pill badge-center h-px-20 w-px-20 bg-danger">3</span>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                type="button"
                                class="nav-link"
                                role="tab"
                                data-bs-toggle="tab"
                                data-bs-target="#navs-pills-justified-profile"
                                aria-controls="navs-pills-justified-profile"
                                aria-selected="false"
                            >
                                <i class="tf-icons bx bx-user"></i> Profile
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                            <img className="d-block w-100" src={Second} alt="First slide" />
                        </div>
                        <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                            <img className="d-block w-100" src={Third} alt="First slide" />
                        </div>
                    </div>
                </div>
                {/* /Choose */}
            </div>
        </>
    )
}
export default FittingRoom;