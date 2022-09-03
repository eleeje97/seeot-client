import {REST_API_KEY} from './key/KakaoKey.js';

const REDIRECT_URI = "http://localhost:3000/login/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;