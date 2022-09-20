import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/common/LogoSeeot"
import First from "../images/sample_1.jpg";
import Second from "../images/sample_2.jpg";
import Third from "../images/sample_3.jpg";
// import { Button } from "bootstrap";
import Button from "../components/common/Button";
import { BiSave } from 'react-icons/bi';
import { GiArmoredPants } from 'react-icons/gi';
import { FaTshirt } from 'react-icons/fa';
import Clothes from "../components/common/Clothes";

function FittingRoom() {

    const location = useLocation();
    const user = location.state?.userInfo.user;
    const [fullbody, setFullbody] = useState('');
    console.log("profile" + user.full_body_img_path);
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
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="layout-container">
                    {/* Fitting */}
                    <div className="container-p-y card-body">
                        <img className="d-block card-img-size" src={fullbody} alt="" viewBox="0 0 70 42" width="300" />
                        <div className="demo-vertical-spacing btn d-flex demo-inline-spacing">
                            <Button text="Fitting" />
                            <button className="btn btn-icon btn-outline-primary"><BiSave /></button>
                        </div>
                    </div>
                    {/* /Fitting */}

                    {/* Choose */}
                    <div class="nav-align-top mb-4">
                        <ul class="nav nav-tabs nav-pills nav-fill">
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
                                    <FaTshirt /> My Clothes
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
                                    <GiArmoredPants /> Seeot Clothes
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active d-flex" id="navs-pills-justified-home" role="tabpanel">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                                        <Clothes img_src={First} />
                                        {/* <Clothes img_src={Second} /> */}
                                        {/* <Clothes img_src={Third} /> */}
                                    </div>
                                </div>


                            </div>
                            <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                                <img className="d-block w-100" src={Third} alt="First slide" />
                            </div>
                        </div>
                    </div>
                    {/* /Choose */}

                </div>
            </div>
        </>
    )
}
export default FittingRoom;