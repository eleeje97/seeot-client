import React from "react";
import Logo from "../assets/img/favicon/logo.png";
import Kakao from '../assets/img/icons/brands/large_wide.png';
import {KAKAO_AUTH_URL} from "../OAuth";

function Login () {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    {/* <!-- Register --> */}
                    <div className="card">
                        <div className="card-body">
                        {/* <!-- Logo --> */}
                        <div className="app-brand justify-content-center">
                            <a href={"/"} className="app-brand-link gap-2">
                            <img src={Logo} viewBox="0 0 50 42" width="50"/>
                            <span className="app-brand-text demo text-body fw-bolder">See옷</span>
                            </a>
                        </div>
                        {/* <!-- /Logo --> */}
                        <h4 className="mb-4 text-center">Welcome to See옷! 👋</h4>
                        <p className="mb-4 text-center">Please sign-in to your account and start the adventure</p>
                            <div className="mb-3">
                                <a href={KAKAO_AUTH_URL}>
                                    <input
                                        className="btn d-grid w-100"
                                        type="image"
                                        name="button"
                                        src={Kakao}>
                                    </input>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Register --> */}
                </div>
            </div>
        </div>

    )
}

export default Login;