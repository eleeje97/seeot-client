import React from "react";
import Logo from "../images/logo.png";
import First from "../assets/img/elements/13.jpg";
import Second from "../assets/img/elements/2.jpg";
import Third from "../assets/img/elements/18.jpg";
// import { Button } from "bootstrap";
import Button from "../components/common/Button";
import { BiSave } from 'react-icons/bi';

function FittingRoom() {
    
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
                <div className="container-p-y card-body">
                    <img className="d-block" src={Second} alt="" viewBox="0 0 70 42" width="300" />
                    <div 
                        style={{
                            height: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "0 10px",
                          }}
                    >
                        <Button text="Fitting"/>
                        <BiSave />
                    </div>
                </div>
                <div className="container-xxl flex-grow-1 container-p-y ">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <img className="d-block w-100" src={Second} alt="First slide" />
                        </div>
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={First} alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>First slide</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Second} alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Second slide</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Third} alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Third slide</h3>
                                    </div>
                                </div>
                            </div>
                            <a 
                                className="carousel-control-prev"
                                href="#carouselExample"
                                role="button"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExample"
                                role="button"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <img className="d-block w-100" src={Third} alt="First slide" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FittingRoom;