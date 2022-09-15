import {Keys} from './key/KakaoKey.js';

export const KAKAO_AUTH_URL = {
    Login: `https://kauth.kakao.com/oauth/authorize?client_id=${Keys.REST_API_KEY}&redirect_uri=${Keys.REDIRECT_URI}&response_type=code`,
    Logout: `https://kauth.kakao.com/oauth/logout?client_id=${Keys.REST_API_KEY}&logout_redirect_uri=${Keys.LOGOUT_REDIRECT_URI}`
}