import React, { useEffect } from "react";
import { seeotApi } from "../Api";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    const navigate = useNavigate();
    
    useEffect(() => {
        try {
            seeotApi.kakaoLogin(code).then((res) => {
                let userId = res.data.user_id;
                localStorage.setItem('userId', userId);
            });

        } catch(error) {
            console.error(error);
        }
        navigate("/");
      }, []);
}

export default KakaoCallback;