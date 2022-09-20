import Button from "./Button";
import React from "react";
function RecommendationItem(img_src) {
  return (
    <div className="col">
      <div href="#" className="card-img-top card-img-bottom">
        <img class="card-img-top card-img-bottom " src={img_src.img_src} alt="Card image cap" />
      </div>
    </div>
  );
}

export default RecommendationItem;
