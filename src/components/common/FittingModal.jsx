import { useState, useEffect } from "react";

const FittingModal = ({ openState, close, topCheck, bottomCheck, onClick, clothes_id }) => {
    console.log('Fitting Moddal: '+clothes_id);
    // const [id, setId] = useState(clothes_id);
    // console.log('ddd ' + id)

    // useEffect(() => {
    //     console.log(id);
    // }, [id]);

    return (
        // <div class= "modal fade" id="smallModal" tabindex="-1" aria-hidden="true" >
        <div className={openState ? "modal fade show" : "modal fade"}
            id="smallModal"
            tabindex="-1"
            style={openState ? { display: "block" } : { display: "none" }}
            aria-modal={openState ? "true" : ""}
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">상의 / 하의 선택 {clothes_id}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <label className="form-label">이 옷에서 어떤 옷을 입어볼지 선택해주세요.</label>
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="top" id="top"
                                checked={topCheck ? true : false}
                                onChange={() => {
                                    // console.log(clothes_id);
                                    onClick('top', clothes_id);
                                }} />
                            <label className="form-check-label" htmlFor="top"> 상의 </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="bottom" id="bottom"
                                checked={bottomCheck ? true : false}
                                onChange={() => onClick('bottom', clothes_id)} />
                            <label class="form-check-label" htmlFor="bottom"> 하의 </label>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={close}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FittingModal;