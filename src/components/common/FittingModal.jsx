
const FittingModal = ({openState, close}) => {

    return(
        // <div class= "modal fade" id="smallModal" tabindex="-1" aria-hidden="true" >
        <div className={openState ? "modal fade show" : "modal fade"} 
            id="smallModal" 
            tabindex="-1" 
            style={openState ? {display: "block"} : {display: "none"}} 
            aria-modal={openState ? "true" : ""} 
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">상의 / 하의 선택</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                    </div>
                    <div class="modal-body">
                    <label class="form-label">이 옷에서 어떤 옷을 입어볼지 선택해주세요.</label>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="top" id="top" />
                            <label class="form-check-label" for="top"> 상의 </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="bottom" id="bottom" />
                            <label class="form-check-label" for="bottom"> 하의 </label>
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={close}>
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FittingModal;