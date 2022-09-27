import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { seeotApi } from "../../Api";

function RecommendationItem({img_src, userId, userInfo, season}) {

  const saveRecommendation = useCallback(
    async (userId, imgPath, season) => {
      await seeotApi
        .recommendationSave(userId, imgPath, season)
        .then((res) => {
          console.log(JSON.stringify(res));
        })
        .catch(function (e) {
          console.log(e);
        });
    }, []
  );

  const btnClicked = () => {
    saveRecommendation(userId, img_src, season);
  }

  return (
    <div className="col">
      <div href="#" className="card-img-top card-img-bottom">
        <img className="card-img-top reco-img-size" src={img_src} alt="Card image cap" />
        <div className="btn demo-inline-spacing" >
          {/* <Button text="피팅룸으로 가기" path={"/fittingroom"} /> */}

          <li className="menu-item">
            <Link to={userId ? { pathname: "fittingroom" } : { pathname: "login" }} state={{ userInfo: { 'user': userInfo } }} className="menu-link" >
              <button className="btn btn-primary d-grid w-100" type="submit"
                onClick={btnClicked}>
                피팅룸으로 가기
              </button>
            </Link>
          </li>

      </div>
    </div>
    </div >
  );
}

export default RecommendationItem;
