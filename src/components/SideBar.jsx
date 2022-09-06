import Button from "./common/Button";
import React from "react";
import { FiUser } from 'react-icons/fi';
import { BiCloset } from 'react-icons/bi';
import Logo from "../assets/img/favicon/logo.png";
import Profile from "../assets/img/avatars/1.png";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
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

        {/* <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a> 뭔지 모르겠음 */}
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <div class="col-md-12 mb-profile">
          <img
            src={Profile}
            alt="user-avatar"
            class="d-block rounded"
            height="150"
            width="150"
            id="uploadedAvatar"
          />
        </div>

        <li className="menu-item">
          <a href="#" className="menu-link"> {/*피팅룸 페이지로 이동 */}
            <BiCloset />
            <div data-i18n="Blank">&nbsp; Fitting Room</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link"> {/*마이 페이지로 이동 */}
            <FiUser />
            <div data-i18n="Analytics">&nbsp; Mypage</div>
          </a>
        </li>

        {/* 곧 지울 것들 */}
        <li className="menu-item">
          <a href="#" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Authentications</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a
                href="auth-login-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Login</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                href="auth-register-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Register</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                href="auth-forgot-password-basic.html"
                className="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Forgot Password</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-cube-alt"></i>
            <div data-i18n="Misc">Misc</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-misc-error.html" className="menu-link">
                <div data-i18n="Error">Error</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-under-maintenance.html" className="menu-link">
                <div data-i18n="Under Maintenance">Under Maintenance</div>
              </a>
            </li>
          </ul>
        </li>
        {/* /곧 지울 것들 */}

          <Button text="Sign in" id="gobottom" path={"/login"}/>
      </ul>
    </aside>
  );
}
export default SideBar;
