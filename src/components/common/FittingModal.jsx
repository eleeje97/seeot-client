
const FittingModal = ({ openState, close }) => {

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
                        <h5 className="modal-title" id="exampleModalLabel2">상의 / 하의 선택</h5>
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
                            <input className="form-check-input" type="checkbox" value="top" id="top" />
                            <label className="form-check-label" for="top"> 상의 </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="bottom" id="bottom" />
                            <label class="form-check-label" for="bottom"> 하의 </label>
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