import React, { useCallback, useState, useEffect } from "react";
import Logo from "../components/common/LogoSeeot"
import Upload from "../images/mypage.png";
import { useLocation } from "react-router-dom";
import { seeotApi } from "../Api";
import { useCookies } from "react-cookie";

function Mypage() {
    const location = useLocation();
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
        // deleteProfile();
        // console.log('useEffect '+fullbody);

    }, []);

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        // console.log('encoder '+ fullbody);
        return new Promise((resolve) => {
            reader.onload = () => {
                setFullbody(reader.result);
                resolve();
            };
        });
    };

    const saveProfile = () => {
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
                    if (res.status === 200) {
                        alert("Profile Update Success!");
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );
    // const removeCookie = useCookies();
    // const deleteProfile = () => {
    //     removeCookie('saveProfile');
    // };

    return (
        <>
            <Logo />
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
                        {/* {deleteProfile.saveProfile} */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mypage;