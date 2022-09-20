import Button from "./Button";
import React from "react";
import Test from "../../assets/img/elements/2.jpg";
function RecommendationItem(img_src) {
  return (
    <div className="col">
      <div href="#" className="card-img-top card-img-bottom">
        <img class="card-img-top" src={img_src.img_src} alt="Card image cap" />
          <div className="btn demo-inline-spacing" >
            <Button text="피팅룸으로 가기" path={"/fittingroom"}/>
          </div>
      </div>
    </div>
  );
}

export default RecommendationItem;
