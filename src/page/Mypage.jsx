import React, { useCallback, useState, useEffect } from "react";
import Logo from "../components/common/LogoSeeot"
import Upload from "../images/mypage.png";
import { useLocation, Link } from "react-router-dom";
import { seeotApi } from "../Api";
import LoadingModal from "../components/common/LoadingModal";
import FooterMypage from "../components/FooterMypage";
import { FaHome } from "react-icons/fa"
import { BiCloset } from "react-icons/bi"
import First from "../images/sample_1.jpg"
import Second from "../images/sample_2.jpg"
import Third from "../images/sample_3.jpg"

function Mypage() {
    const location = useLocation();
    const user = location.state?.userInfo.user;
    const [nickname, setNickname] = useState('');
    // const [gender, setGender] = useState('');
    const gender = user.gender;
    const [fullbody, setFullbody] = useState(Upload);
    const [loadingModalOpen, setLoadingModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const closeModal = () => {
        setLoadingModalOpen(false);
    }

    useEffect(() => {
        setNickname(user.nickname);
        // setGender(user.gender);
        if (user.full_body_img_path) {
            setFullbody('http://210.106.99.80:5050/' + user.full_body_img_path);
        }
    }, []);

    const encodeFileToBase64 = (fileBlob) => {
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
        const genderValue = document.getElementById('gender').value;
        setLoadingModalOpen(true);
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
                        setLoading(false);
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );

    return (
        <>
            <LoadingModal openState={loadingModalOpen} close={closeModal} text={'Update Profile'} loading={loading} />
            <div className="card-body">
                <Logo />
                <div style={{ float: 'right' }}>
                    <a href={"/"} className="btn btn-outline-primary me-2"><FaHome />&nbsp;Home</a>
                    <Link to={{ pathname: "/fittingroom" }} state={{ userInfo: { 'user': user } }}>
                        <button className="btn btn-outline-primary me-4" type="submit">
                            <BiCloset />&nbsp;Fitting Room
                        </button>
                    </Link>
                </div>
            </div>

            <div className="demo-vertical-spacing card-body">
                <div className="card demo-vertical-spacing">
                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <div className="btn">
                            <img src={fullbody} className="card-img-top card-img-bottom card-img-size" />
                        </div>

                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" class="form-label">Name</label>
                                <input className="form-control" type="text" id="name" name="name" value={nickname}></input>
                            </div>

                            <div className="mb-3 col-md-6">
                            </div>

                            <div className="mb-3 col-md-6">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select id="gender" className="select2 form-select" defaultValue={gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="mb-3 col-md-6">
                            </div>


                            <div className="mb-3 col-md-6">
                                <label htmlFor="name" class="form-label">
                                    배경이 깔끔한 정자세의 전신사진을 올려주세요. <br />
                                    아래와 같은 사진들은 피팅의 결과물이 좋지 않을 수 있습니다. <br />
                                    (ex. 앉아있는 사진, 휴대폰과 같은 소지품, 옆모습, 뒷모습 등)
                                    </label>
                                <div className="row row-cols-md-3 g-4">
                                    <img className="" src={First}></img>
                                    <img className="" src={Second}></img>
                                    <img className="" src={Third}></img>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card-body">
                        <label htmlFor="file" className="btn btn-primary me-2" tabIndex="0">
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
                            onClick={() => user.full_body_img_path ? setFullbody('http://210.106.99.80:5050/' + user.full_body_img_path) : setFullbody(Upload)}>
                            <i className="bx bx-reset d-block d-sm-none"></i>
                            <span className="d-none d-sm-block">Reset</span>
                        </button>

                        <button type="submit" className="btn btn-primary me-2 " onClick={saveProfile}
                            style={{ float: 'right' }}>Save changes</button>
                        <LoadingModal />
                    </div>
                </div>
            </div>
            <FooterMypage />
        </>
    )
}
export default Mypage;