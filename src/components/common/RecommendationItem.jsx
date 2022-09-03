import Button from "./Button";
import React from "react";
import Test from "../../assets/img/elements/2.jpg";
function RecommendationItem() {
  return (
    <div className="col">
      <div href="#" className="card-img-top">
        {/* <img class="card-img-top" src={Test} alt="Card image cap" /> */}
        {/* <a href="#" class="btn btn-primary mb-3">내 옷장에 담기</a> */}
        <div
          style={{
            width: "420px",
            height: "600px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            }}
        >
          <img
            src={Test}
            className="card"
            alt="today-recommendation-img"
            width="420px"
            height="500px"
          />
          <div
            style={{
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 10px",
            }}
          >
            <Button text="내 옷장에 담기" />
            <Button text="피팅룸으로 가기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationItem;
