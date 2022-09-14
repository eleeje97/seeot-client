import axios from "axios";

const api = axios.create({
    baseURL: "http://210.106.99.80:5050/"
})

export const seeotApi = {
    kakaoLogin: (code) =>
        api.get(`accounts/kakao/login?code=${code}`, {}),

    kakaoLogout: (userId) =>
        api.get(`accounts/kakao/logout?user_id=${userId}`, {}),

    userInfo: (userId) =>
        api.get(`accounts/userinfo?user_id=${userId}`, {})

}