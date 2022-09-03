import React from "react";

const KakaoCallback = (props) => {
    // const dispatch = useDispatch();

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    // React.useEffect(async () => {
    //     await dispatch(userActions.kakaoLogin(code));
    // }, []);


    // 1) 백엔드 서버에 code 전달하고 userId를 받아온다.
    // 2) 세션에 userId 저장
}

export default KakaoCallback;