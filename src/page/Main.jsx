import React, { useCallback, useEffect, useState } from "react";
import RecommendationItem from "../components/common/RecommendationItem";
import SideBar from "../components/SideBar";
import { HiOutlineMenu } from "react-icons/hi";
import { seeotApi } from "../Api";

function Main() {
  const [user, setUser] = useState({});
  const [recommendationImages, setRecommendationImages] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [id, setId] = useState();
  const [season, setSeason] = useState('');

  const getUserInfo = useCallback(
    async (userId) => {
      setUser({});
      await seeotApi
        .userInfo(userId)
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(function () {
          console.log('API 통신 오류');
        }, []);
    },
    [user]
  );

  const recommendation = useCallback(
    async (userId) => {
      await seeotApi
        .recommendation(userId)
        .then((res) => {
          setRecommendationImages(res.data.clothes);
          setSeason(res.data.season);
        })
        .catch(function (e) {
          console.log(e);
        });
    }, [recommendationImages]
  );

  const openSideBar = () => {
    setSideBarOpen(true);
  }

  // const closeSideBar = () => {
  //   setSideBarOpen(false);
  // }


  useEffect(() => {
    setUser({});
    let userId = localStorage.getItem('userId');
    setId(userId);
    if (userId) {
      getUserInfo(userId);
    } else {
      setUser({})
    }

    recommendation(userId);

  }, []);



  return (
    <div>
      <div className={sideBarOpen ? "layout-wrapper layout-content-navbar layout-menu-expanded" : "layout-wrapper layout-content-navbar"}>
        <div className="layout-container">
          <SideBar user={user} closeSideBar={setSideBarOpen} />

          {/* 메인 컨텐츠 */}
          <div className="layout-page">
            <nav
              className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" onClick={openSideBar}>
                  <HiOutlineMenu />
                </a>
              </div>
              <h5 className="navbar-nav align-items-center">
                Today's&nbsp;Recommendation
              </h5>
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ul className="navbar-nav flex-row align-items-center ms-auto"></ul>
              </div>
            </nav>
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                  <RecommendationItem img_src={recommendationImages[0]} 
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[1]} 
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[2]} 
                    userId={id} userInfo={user} season={season} />
                </div>
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>

      <script src="../assets/vendor/libs/jquery/jquery.js"></script>
      <script src="../assets/vendor/libs/popper/popper.js"></script>
      <script src="../assets/vendor/js/bootstrap.js"></script>
      <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

      <script src="../assets/vendor/js/menu.js"></script>
      <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>
      <script src="../assets/js/main.js"></script>

      <script src="../assets/js/dashboards-analytics.js"></script>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </div>
  );
}

export default Main;
