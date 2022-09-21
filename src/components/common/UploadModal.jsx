const UploadModal = ({openState, close}) => {

    return(
        // <div class= "modal fade" id="smallModal" tabindex="-1" aria-hidden="true" >
        <div className={openState ? "modal fade show" : "modal fade"} 
            id="LargeModal" 
            tabindex="-1" 
            style={openState ? {display: "block"} : {display: "none"}} 
            aria-modal={openState ? "true" : ""} 
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div className="modal-dialog modal-lg" role="document">
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
                        <div className="row g-2">
                            <div className="col mb-0">
                                <label className="form-label" for="emailLarge">Clothes</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-3">
                                <label for="nameLarge" className="form-label">summer</label>
                                <input name="default-radio-1" class="form-check-input" type="radio" value="" id="defaultRadio2" checked="" />
                            </div>
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

export default UploadModal;