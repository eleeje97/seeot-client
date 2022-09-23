import React, { useState, useEffect, useCallback } from "react";
import { seeotApi } from "../../Api";

const UploadModal = ({ openState, close, userInfo }) => {

    const userId = userInfo.id;
    const gender = userInfo.gender;
    const [uploaded, setUploaded] = useState(false);
    const [imgPath, setImgPath] = useState('');
    const [season, setSeason] = useState('');

    const [spring, setSpring] = useState(false);
    const [summer, setSummer] = useState(false);
    const [winter, setWinter] = useState(false);

    const [loading, setLoading] = useState(true);

    const btnClicked = () => {
        if (uploaded) {
            uploadClothesSave(userId, imgPath, season);
            close();
            window.location.reload();
        } else {
            uploadClothes(userId, gender);
        }
    };

    const radioBtnClicked = (season) => {
        if (season === 'Summer') {
            setWinter(false);
            setSpring(false);
            setSummer(true);
        } else if (season === 'Winter') {
            setSpring(false);
            setSummer(false);
            setWinter(true);
        } else {
            setSummer(false);
            setWinter(false);
            setSpring(true);
        }
    };

    const uploadClothes = useCallback(
        async (userId, gender) => {
            const formData = new FormData();
            formData.append('user_id', userId);
            formData.append('file', document.getElementById('file').files[0]);
            formData.append('gender', gender);
            await seeotApi
                .clothesUpload(formData)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Clothes Upload Success!");
                        setUploaded(true);
                        setImgPath(res.data.img_path);
                        setSeason(res.data.season);
                        setLoading(false);
                        console.log(season);
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );

    useEffect(() => {
        console.log(season);
        if (season === 'Summer') {
            setSummer(true);
        } else if (season === 'Winter') {
            setWinter(true);
        } else {
            setSpring(true);
        }
    }, [season]);

    const uploadClothesSave = useCallback(
        async (userId, imgPath, season) => {
            await seeotApi
                .clothesUploadSave(userId, imgPath, season)
                .then((res) => {
                    if (res.status === 200) {
                        console.log('save ' + JSON.stringify(res.data));
                    }
                })
                .catch(function (e) {
                    console.log(e);
                }, []);
        },
        []
    );

    return (
        // <div class= "modal fade" id="smallModal" tabindex="-1" aria-hidden="true" >
        <div className={openState ? "modal fade show" : "modal fade"}
            id="LargeModal"
            tabindex="-1"
            style={openState ? { display: "block" } : { display: "none" }}
            aria-modal={openState ? "true" : ""}
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel3">Clothes Upload</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-2" style={uploaded ? { display: 'none' } : {}}>
                            <div className="col mb-0">
                                <label className="form-label" for="emailLarge">Clothes</label>
                                <input class="form-control" type="file" id="file" />
                            </div>
                        </div>
                        <div className="col-md" style={uploaded ? {} : { display: 'none' }}>
                            {/* <div className="col-md"> */}
                            <div className="col mb-3">
                                <input name="season" class="form-check-input" type="radio" value="Spring_fall" id="Spring_fall"
                                    checked={spring ? true : false} onClick={() => radioBtnClicked('Spring')} />
                                <label for="nameLarge" className="form-label">&nbsp;spring & fall</label>
                            </div>
                            <div className="col mb-3">
                                <input name="season" class="form-check-input" type="radio" value="Summer" id="Summer"
                                    checked={summer ? true : false} onClick={() => radioBtnClicked('Summer')} />
                                <label for="nameLarge" className="form-label">&nbsp;summer</label>
                            </div>
                            <div className="col mb-3">
                                <input name="season" class="form-check-input" type="radio" value="Winter" id="Winter"
                                    checked={winter ? true : false} onClick={() => radioBtnClicked('Winter')} />
                                <label for="nameLarge" className="form-label">&nbsp;winter</label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="spinner-border spinner-border-lg text-primary"
                            style={loading ? { display: 'none' } : {}} role="status"></div>
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={btnClicked}>{uploaded ? 'Save' : 'Upload'}</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UploadModal;