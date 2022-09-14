import React, { useEffect } from "react";
import { seeotApi } from "../Api";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoLogout = () => {
    const location = useLocation();
    const userId = location.state?.userId;
    const navigate = useNavigate();

    try {
        seeotApi.kakaoLogout(userId).then((res) => {
    });

    } catch(error) {
        console.error(error);
    }

    useEffect(() => {
        localStorage.removeItem('userId');
        navigate("/");
      }, []);
    }

export default KakaoLogout;