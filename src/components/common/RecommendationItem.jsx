import Button from "./Button";
import React from "react";
import Test from "../../assets/img/icons/brands/asana.png";
function RecommendationItem() {
  return (
    <div
      style={{
        width: "320px",
        height: "600px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
      }}
    >
      <img
        src={Test}
        alt="today-recommendation-img"
        width="320px"
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
        <Button text="Go somewhere" />
        <Button text="Go somewhere" />
      </div>
    </div>
  );
}

export default RecommendationItem;
