const LoadingModal = ({ openState, close, text, loading}) => {

    return (
        <div className={openState ? "modal fade show" : "modal fade"}
            id="modalCenter"
            tabIndex="-1"
            style={openState ? { display: "block" } : { display: "none" }}
            aria-modal={openState ? "true" : ""}
            role={openState ? "dialog" : ""}
            aria-hidden={openState ? "" : "true"}>
            <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel3">{text}</h5>                        
                    </div>
                    <div className="modal-body card-body">
                        <div className="spinner-border spinner-border-lg text-primary"
                            style={loading ? {} : { display: 'none' }}
                            role="status">
                        </div>
                        <div className=""
                            style={loading ? { display: 'none' } : {}}>
                            SUCCESS!
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={close}
                            style={loading ? { display: 'none' } : {}}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoadingModal;