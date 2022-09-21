import React from "react";
import FittingModal from "./FittingModal"

function Clothes({modalOpen, openModal, closeModal, img_src}) {
  
  return (
    <>
    <FittingModal openState={modalOpen} close={closeModal} />
    
    <div className="col">
      <div href="#" className="card-img-top card-img-bottom">
        <img class="card-img-top card-img-bottom " src={img_src} alt="Card image cap" 
          onClick={openModal} />
        <div className={modalOpen ? "modal-backdrop fade show" : ""}></div>

      </div>
    </div>
    
    </>
  );
}

export default Clothes;
