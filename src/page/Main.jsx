import React from "react";
import RecommendationItem from "../components/common/RecommendationItem";
import SideBar from "../components/SideBar";
import { HiOutlineMenu } from "react-icons/hi"

function Main() {
  console.log('여기는 메인 로컬스토리지:'+localStorage.getItem('userId'));

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />

          {/* 메인 컨텐츠 */}
          <div className="layout-page">
            <nav
              className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)"> {/* js:void(0) */}
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
                <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
                  <RecommendationItem />
                  <RecommendationItem />
                  <RecommendationItem />
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
