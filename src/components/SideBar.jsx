import Button from "./common/Button";
import React, { useState, useEffect } from "react";
import { FiUser } from 'react-icons/fi';
import { BiCloset } from 'react-icons/bi';
import Logo from "../images/logo.png";
import Profile from "../images/profile.jpg";
import { HiChevronLeft } from "react-icons/hi"
import { Link } from "react-router-dom";

function SideBar({user, closeSideBar}) {
  
  const [nickname, setNickname] = useState('');
  const [profile, setProfile] = useState(Profile);
  const [loginText, setLoginText] = useState('Sign In');
  const [loginPath, setLoginPath] = useState('/login');

  // const userInfo = props.user;
  // const closeSideBar = props.closeSideBar;
  const userInfo = user;
  // console.log(user);
  // console.log(closeSideBar);
  const userId = userInfo.id;


  useEffect(() => {
    if (userInfo.nickname) {
      setNickname(userInfo.nickname);      
      setProfile(userInfo.profile_image_url);
      setLoginText('Sign Out');
      setLoginPath('/logout');
    }
    else{
      setNickname("로그인 해주세요!");
    }

  });

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
        <a
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          onClick={() => closeSideBar(false)}
        >
          <HiChevronLeft size="24" color="#FFF" />
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <div className="col-md-12 mb-profile">
          <img
            src={profile}
            alt="user-avatar"
            className="d-block rounded"
            height="150"
            width="150"
            id="uploadedAvatar"
          />
        </div>
        <li className="menu-item">
          <a className="menu-link"><b>{nickname}</b></a>
        </li>

        
        <li className="menu-item" >
          
          <Link to={userId?{ pathname: "fittingroom" }:{ pathname: "login" }} state={{ userInfo: {'user': userInfo }}} className="menu-link" >

            <BiCloset />
            <div data-i18n="Blank">&nbsp; Fitting Room</div>
          </Link>
        </li>

        <li className="menu-item" >
          <Link to={userId?{ pathname: "mypage" }:{ pathname: "login" }} state={{ userInfo: {'user': userInfo } }} className="menu-link">
            <FiUser />
            <div data-i18n="Analytics">&nbsp; Mypage</div>
          </Link>
        </li>
        

        <Button text={loginText} id="gobottom" path={loginPath} userId={userId} />
      </ul>
    </aside>
  );
}
export default SideBar;
