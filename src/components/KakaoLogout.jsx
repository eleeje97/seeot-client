import { useEffect } from "react";
import { seeotApi } from "../Api";
import { useLocation } from "react-router-dom";
import {KAKAO_AUTH_URL} from "../OAuth";

const KakaoLogout = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    try {
        seeotApi.kakaoLogout(userId).then((res) => {
    });

    } catch(error) {
        console.error(error);
    }

    useEffect(() => {
        localStorage.removeItem('userId');
        window.location.href = KAKAO_AUTH_URL.Logout;
      }, []);

    }
    
export default KakaoLogout;