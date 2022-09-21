
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
                        <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col mb-3">
                                <label for="nameSmall" class="form-label">Name</label>
                                <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div class="row g-2">
                            <div class="col mb-0">
                                <label class="form-label" for="emailSmall">Email</label>
                                <input type="text" class="form-control" id="emailSmall" placeholder="xxxx@xxx.xx" />
                            </div>
                            <div class="col mb-0">
                                <label for="dobSmall" class="form-label">DOB</label>
                                <input id="dobSmall" type="text" class="form-control" placeholder="DD / MM / YY" />
                            </div>
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