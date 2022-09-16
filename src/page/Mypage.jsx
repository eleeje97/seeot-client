// import { Button } from "bootstrap";
import React, { useCallback, useState, useEffect } from "react";
import Logo from "../images/logo.png";
import Upload from "../images/mypage.png";
import Button from "../components/common/Button";
import { useLocation } from "react-router-dom";
import { seeotApi } from "../Api";

function Mypage() {

    const location = useLocation();
    // console.log("location" + JSON.stringify(location.state?.userInfo.user));
    const user = location.state?.userInfo.user;
    const [nickname, setNickname] = useState('');
    // const [gender, setGender] = useState('');
    const gender = user.gender;
    const [fullbody, setFullbody] = useState(Upload);

    useEffect(() => {
        setNickname(user.nickname);
        // setGender(user.gender);
        if (user.full_body_img_path) {
            setFullbody('http://210.106.99.80:5050/' + user.full_body_img_path);
        }
        // console.log(fullbody);
    });

    const encodeFileToBase64 = (fileBlob) => {
        console.log(fileBlob);
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setFullbody(reader.result);
                resolve();
            };
        });
    };

    const saveProfile = () => {
        console.log(user.id);
        // console.log(fullbody);
        const genderValue = document.getElementById('gender').value;

        updateProfile(user.id, genderValue);
    };

    const updateProfile = useCallback(
        async (userId, gender) => {
            const formData = new FormData();
            formData.append('user_id', userId);
            formData.append('file', document.getElementById('file').files[0]);
            formData.append('gender', gender);
            await seeotApi
                .updateProfile(formData)
                .then((res) => {
                    console.log(res);
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );


    //   useEffect(() =>{ 
    //     setUser({});
    //     let userId = localStorage.getItem('userId');
    //     if(userId) {
    //       getUserInfo(userId);
    //     } else {
    //       setUser({})
    //     }

    //    }, []);


    return (
        <>
            {/* Logo */}
            <div
                // id="layout-menu"
                className="menu-vertical menu bg-menu-theme mb-fit"
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
                </div>
            </div>
            {/* /Logo */}
            <div className="demo-vertical-spacing card-body">
                <div className="card demo-vertical-spacing btn">
                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <div className="btn">
                            <img src={fullbody} className="card-img-top card-img-bottom card-img-size" />
                        </div>
                        <div className="button-wrapper me-2">
                            <a className="btn">{nickname}</a>
                            <select id="gender" className="select2 form-select" defaultValue={gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex">
                        <label for="file" className="btn btn-primary me-2" tabindex="0">
                            <span className="d-none d-sm-block">Upload new photo</span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                                onChange={(e) => {
                                    encodeFileToBase64(e.target.files[0]);
                                }}
                                type="file"
                                id="file"
                                className="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                            />
                        </label>
                        <button type="button" className="btn btn-outline-secondary account-image-reset me-2"
                            onClick={() => setFullbody(Upload)}>
                            <i className="bx bx-reset d-block d-sm-none"></i>
                            <span className="d-none d-sm-block">Reset</span>
                        </button>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary me-2 " onClick={saveProfile}>Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mypage;