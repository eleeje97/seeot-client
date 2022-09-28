import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../components/common/LogoSeeot"
import { BiSave, BiUpload } from 'react-icons/bi';
import { GiArmoredPants } from 'react-icons/gi';
import { FaTshirt, FaHome } from 'react-icons/fa';
import { FiUser } from "react-icons/fi"
import { TbArrowBigTop } from "react-icons/tb"
import Clothes from "../components/common/Clothes";
import { seeotApi } from "../Api";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import UploadModal from "../components/common/UploadModal"
import LoadingModal from "../components/common/LoadingModal";

function FittingRoom() {

    const location = useLocation();
    const user = location.state?.userInfo.user;
    const id = user.id;
    const [fullbody, setFullbody] = useState('');
    const [myClothesState, setMyClothesState] = useState(true);
    const [seeotClothesState, setSeeotClothesState] = useState(false);
    const [fittingModalOpen, setFittingModalOpen] = useState(false);
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [myClothes, setMyClothes] = useState([]);
    const [seeotClothes, setSeeotClothes] = useState([]);
    const [top, setTop] = useState(-1);
    const [bottom, setBottom] = useState(-1);
    const [clothesId, setClothesId] = useState('');
    const [topCheck, setTopCheck] = useState(false);
    const [bottomCheck, setBottomCheck] = useState(false);
    const [loadingModalOpen, setLoadingModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);



    const openFittingModal = (clothes_id) => {
        if (top === clothes_id) {
            setTopCheck(true);
        } else {
            setTopCheck(false);
        }

        if (bottom === clothes_id) {
            setBottomCheck(true);
        } else {
            setBottomCheck(false);
        }

        setFittingModalOpen(true);
        setClothesId(clothes_id);
    };

    const closeFittingModal = () => {
        setFittingModalOpen(false);
    };

    const openUploadModal = () => {
        setUploadModalOpen(true);
    };

    const closeUploadModal = () => {
        setUploadModalOpen(false);
    };

    const closeLoadingModal = () => {
        setLoadingModalOpen(false);
    }

    const checkBoxClicked = (garment) => {
        if (garment === 'top') {
            if (top === clothesId) {
                setTop(-1);
                setTopCheck(false);
            } else {
                setTop(clothesId);
                setTopCheck(true);
            }
        } else {
            if (bottom === clothesId) {
                setBottom(-1);
                setBottomCheck(false);
            } else {
                setBottom(clothesId);
                setBottomCheck(true);
            }
        }
    }

    const clothesList = useCallback(
        async (userId) => {
            await seeotApi
                .clothesList(userId)
                .then((res) => {
                    if (res.status === 200) {
                        setMyClothes(res.data.user_clothes);
                        setSeeotClothes(res.data.recommend_clothes);
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );

    if (user.full_body_img_path === null) {
        alert("Please Save Your Profile");
    }

    useEffect(() => {
        if (user.full_body_img_path) {
            setFullbody('http://210.106.99.80:5050/' + user.full_body_img_path);
        }
        clothesList(id);
    }, []);


    const tabClick = (tab) => {
        if (tab === 'myclothes') {
            setMyClothesState(true);
            setSeeotClothesState(false);

        } else {
            setMyClothesState(false);
            setSeeotClothesState(true);
        }
    }


    const downRef = useRef();
    const downloadImage = () => {
        const down = downRef.current;
        domtoimage
            .toBlob(down)
            .then((blob) => {
                saveAs(blob, { fullbody });
            });
    };


    const tryon = useCallback(
        async (id, top, bottom) => {
            await seeotApi
                .tryon(id, top, bottom)
                .then((res) => {
                    if (res.status === 200) {
                        setFullbody(res.data.output_img);
                        setLoading(false);
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );

    const tryOnBtnClicked = () => {
        setLoadingModalOpen(true);
        tryon(id, top, bottom);
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <>
            <Logo />
            <LoadingModal openState={loadingModalOpen} close={closeLoadingModal} text={'Try On'} loading={loading} />
            <div className="container-xxl text-end">
                <a href={"/"} className="btn btn-outline-primary me-2"><FaHome />&nbsp;Home</a>
                <a href="/mypage" className="btn btn-outline-primary me-2"><FiUser />&nbsp;Mypage</a>
                {/* <Link to={{ pathname: "/mypage" }}>
                    <button className="btn btn-outline-primary me-2" type="submit">
                        <FiUser />&nbsp;Mypage
                    </button>
                </Link> */}
                <button className="btn btn-primary" onClick={openUploadModal}><BiUpload /> Upload</button>
                <UploadModal openState={uploadModalOpen} close={closeUploadModal} userInfo={user} />
                <div className={uploadModalOpen ? "modal-backdrop fade show" : ""}></div>
            </div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="layout-container">
                    {/* Fitting */}
                    <div className="container-p-y card-body">
                        <img className="d-block card-img-size" ref={downRef}
                            src={fullbody} alt="" viewBox="0 0 70 42" width="300" />
                        <div className="demo-vertical-spacing btn d-flex demo-inline-spacing">
                            <button className="btn btn-primary d-grid w-100" type="submit"
                                onClick={tryOnBtnClicked}>
                                Try On
                            </button>
                            <button className="btn btn-icon btn-outline-primary"
                                onClick={downloadImage}>
                                <BiSave />
                            </button>
                        </div>
                    </div>
                    {/* /Fitting */}
                    {/* Choose */}
                    <div className="nav-align-top mb-4 container-xxl">
                        <ul className="nav nav-tabs nav-pills nav-fill">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={myClothesState ? "nav-link active" : "nav-link"}
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-justified-home"
                                    aria-controls="navs-pills-justified-home"
                                    aria-selected="true"
                                    onClick={() => tabClick('myclothes')}
                                >
                                    <FaTshirt /> My Clothes
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={seeotClothesState ? "nav-link active" : "nav-link"}
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-justified-profile"
                                    aria-controls="navs-pills-justified-profile"
                                    aria-selected="false"
                                    onClick={() => tabClick('seeot')}
                                >
                                    <GiArmoredPants /> See옷 Clothes
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className={myClothesState ? "tab-pane fade d-flex show active" : "tab-pane fade"} id="navs-pills-justified-home" role="tabpanel">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                                        {myClothes.map((clothes) => (
                                            <Clothes
                                                key={clothes.origin_img_path}
                                                modalOpen={fittingModalOpen} openModal={openFittingModal} closeModal={closeFittingModal}
                                                img_src={'http://210.106.99.80:5050/' + clothes.origin_img_path}
                                                topCheck={topCheck}
                                                bottomCheck={bottomCheck}
                                                onClick={checkBoxClicked}
                                                clothes_id={clothes.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={seeotClothesState ? "tab-pane fade d-flex show active" : "tab-pane fade"} id="navs-pills-justified-profile" role="tabpanel">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                                        {seeotClothes.map((clothes) => (
                                            <Clothes
                                                key={clothes.origin_img_path}
                                                modalOpen={fittingModalOpen} openModal={openFittingModal} closeModal={closeFittingModal}
                                                img_src={'http://210.106.99.80:5050/' + clothes.origin_img_path}
                                                topCheck={topCheck}
                                                bottomCheck={bottomCheck}
                                                onClick={checkBoxClicked}
                                                clothes_id={clothes.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="me-5">
                        <button className="btn btn-icon btn-outline-primary scroll-top"
                            onClick={handleScroll}><TbArrowBigTop /></button>
                    </div>
                    {/* /Choose */}
                </div>
            </div>
        </>
    )
}
export default FittingRoom;