import Button from "./common/Button";
import React from "react";
// import { BiCloset } from 'react-icons/fa';

function SideBar() {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <img
            src="../assets/img/favicon/logo.png"
            viewBox="0 0 50 42"
            width="50"
            alt=""
          />
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            See옷
          </span>
        </a>

        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item">
          <a href="layouts-blank.html" className="menu-link">
            {/* <BiCloset /> */}
            <div data-i18n="Blank">Fitting Room</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" className="menu-link">
            <i className="menu-icon tf-icons bx bx-user"></i>
            <div data-i18n="Analytics">Mypage</div>
          </a>
        </li>
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
        <Button text="Sign in" />
      </ul>
    </aside>
  );
}
export default SideBar;
