import React, { useCallback, useEffect, useState } from "react";
import RecommendationItem from "../components/common/RecommendationItem";
import SideBar from "../components/SideBar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai"
import { BiSave, BiSearch } from 'react-icons/bi';
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
    async (userId, city, date) => {
      await seeotApi
        .recommendation(userId, city, date)
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

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    setUser({});
    let userId = localStorage.getItem('userId');
    setId(userId);
    if (userId) {
      getUserInfo(userId);
    } else {
      setUser({});
    }


    const calendar = document.getElementById('recDate');

    // 한국 시간대를 사용하기 위한 offset
    let date = new Date();
    let offset = date.getTimezoneOffset() * 60000;

    // 현재 날짜
    let minDate = new Date(date.getTime() - offset);
    calendar.value = minDate.toISOString().substring(0, 10);
    calendar.setAttribute('min', minDate.toISOString().substring(0, 10));

    // 13일 후 날짜
    let maxDate = new Date(minDate.setDate(minDate.getDate() + 13));
    calendar.setAttribute('max', maxDate.toISOString().substring(0, 10));


    recommendation(userId, 'Seoul', minDate.toISOString().substring(0, 10));
  }, []);


  const onRecBtnClicked = () => {
    const calendar = document.getElementById('recDate');
    const region = document.getElementById('recRegion');
    console.log(calendar.value);
    console.log(region.value);
    recommendation(id, region.value, calendar.value);
  };

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
              <h5 className="navbar-nav align-items-center me-auto">
                추천 받을 날짜와 도시를 선택해 주세요
              </h5>
              <div className="d-flex align-items-center" id="navbar-collapse">
                <ul className="navbar-nav flex-row align-items-center ms-auto" inputMode="submit">
                  <input id="recDate" className="form-control me-2" type="date"
                    style={{width: '300px'}} ></input>
                  <select id="recRegion" className="select2 form-select me-2">
                    <option value="Seoul">서울</option>
                    <option value="Incheon">인천</option>
                    <option value="Pusan">부산</option>
                    <option value="New York">뉴욕</option>
                    <option value="London">런던</option>
                    <option value="Tokyo">도쿄</option>
                    <option value="Moscow">모스크바</option>
                  </select>
                  <button type="button" className="btn btn-outline-primary"
                    onClick={onRecBtnClicked}><BiSearch /></button>
                </ul>
              </div>
            </nav>
            <div className="btn text-end me-5 scroll-top">
              <button className="btn btn-icon btn-outline-primary"
                onClick={reload}><AiOutlineReload /></button>
            </div>
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                  <RecommendationItem img_src={recommendationImages[0]}
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[1]}
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[2]}
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[3]}
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[4]}
                    userId={id} userInfo={user} season={season} />
                  <RecommendationItem img_src={recommendationImages[5]}
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
