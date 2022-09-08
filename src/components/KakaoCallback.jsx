import React from "react";
import { seeotApi } from "../Api";
import { Navigate } from "react-router-dom";

const KakaoCallback = () => {

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    // console.log('code: ' + code)

    try {
            seeotApi.kakaoLogin(code).then((res) => {
            let userId = res.data.user_id;
            console.log('userId:' + userId);

            localStorage.setItem('userId', userId);
            console.log('local storage: ' + localStorage.getItem('userId'));
        });

    } catch(error) {
        console.error(error);
    }


    return (
        <Navigate to ="/" />
    )
}

export default KakaoCallback;