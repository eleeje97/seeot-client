import React, {useState} from "react";
import FittingModal from "./FittingModal"

function Clothes({ border, modalOpen, openModal, closeModal, img_src, topCheck, bottomCheck, onClick, clothes_id }) {
  const [id, setId] = useState(clothes_id);

  return (
    <>
      <FittingModal openState={modalOpen} close={closeModal}
        topCheck={topCheck ? true : false} bottomCheck={bottomCheck ? true : false}
        onClick={onClick} clothes_id={id} />

      <div className="col">
        <div href="#" className="card-img-top card-img-bottom">
          <img className={border === 'top' ? "card-img-top card-img-bottom img-top-border" : 
                            border === 'bottom' ? "card-img-top card-img-bottom img-bottom-border" : "card-img-top card-img-bottom"}
               src={img_src} alt="Card image cap"
            onClick={() => {
              openModal(clothes_id);
              setId(clothes_id);
              }} />
          <div className={modalOpen ? "modal-backdrop fade show" : ""}></div>
        </div>
      </div>

    </>
  );
}

export default Clothes;
