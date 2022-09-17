import React from "react";
import Logo from "../../images/logo.png";

function LogoSeeot() {
    {/* Logo */ }
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
    {/* /Logo */ }
}

export default LogoSeeot;