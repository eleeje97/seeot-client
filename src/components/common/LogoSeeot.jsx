import React from "react";
import Logo from "../../images/logo.png";

function LogoSeeot() {
    return (
        < div className="menu-vertical menu mb-fit">
            <div className="demo">
                <a href={"/"} className="app-brand-link">
                    <img
                        src={Logo}
                        viewBox="0 0 50 42"
                        width="85"
                        alt=""
                    />
                    <span className="app-brand-logo demo menu-text fw-bolder ms-2">
                        See옷
                    </span>
                </a>
            </div>
        </div >
    )
}

export default LogoSeeot;