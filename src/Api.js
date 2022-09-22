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
        api.get(`accounts/userinfo?user_id=${userId}`, {}),

    updateProfile: (data) => 
        api.post(`accounts/update/profile`, data, {}),
    
    recommendation: (userId) =>
        api.get(`recommendation?user_id=${userId}`, {}),

    recommendationSave: (userId, imgPath) =>
        api.get(`recommedation/save?user_id=${userId}&img_path=${imgPath}`, {}),

    clothesList: (userId) =>
        api.get(`clothes/list?user_id=${userId}`, {}),

    clothesUpload: (data) =>
        api.post(`clothes/upload`, data, {}),

    clothesUploadSave: (userId, imgPath, season) =>
        api.get(`clothes/upload/save?user_id=${userId}&img_path=${imgPath}&season=${season}`),

}