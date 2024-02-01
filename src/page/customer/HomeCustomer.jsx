import React, { useEffect, useState } from "react";

import "./HomeCustomer.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  getAllMovieSelect,
  getMovie,
} from "./../../redux/api/service/movieRequest";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HomeCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listMovie = useSelector((state) => state.movies.movie.listMovieSelect);

  useEffect(() => {
    getAllMovieSelect(dispatch);
  }, [dispatch]);

  console.log("listMovie", listMovie);
  const handleFindById = async (idMovie) => {
    await getMovie(dispatch, token, idMovie);
    navigate("/detail");
  };

  const [selectedTab, setSelectedTab] = useState("default-day");
  // Default selected tab
  const handleTabDay = (tab) => {
    setSelectedTab(tab);
  };

  const [selectedLocation, setSelectedLocation] = useState("default-location");
  // Default selected tab
  const handleTabLocation = (tab) => {
    setSelectedLocation(tab);
  };

  const [selectedType, setSelectedType] = useState("default-type");
  // Default selected tab
  const handleTabType = (tab) => {
    setSelectedType(tab);
  };

  return listMovie ? (
    <div>
      <div className="w-screen h-[1000px]">
        <div className="content-top">
          <ul>
            <li>
              <a href="">Rạp CGV</a>
            </li>
            <li>
              <a href="">Phim Đang Chiếu</a>
            </li>
            <li>
              <a href="">Đặc trưng CGV</a>
            </li>
            <li>
              <a href="">Thuê Rạp & vé nhóm</a>
            </li>
            <li>
              <a href="">Liên hệ</a>
            </li>
            <li>Tin mới & Ưu đãi</li>
            <li>
              <a href="">Đăng ký ngay</a>
            </li>
          </ul>
        </div>
        {/* slide-content */}
        <div className="slide">
          <div className="w-[70%] mx-auto mt-2">
            <Carousel slide={false}>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/1/t1_-_movie_-_cgv_merchant_t_t_980x448_.jpg"
                    alt=""
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/m/a/mai_rolling-banner_ban-ve.jpg"
                    alt=""
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_rolling_banner_1.jpg"
                    alt=""
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/o/rolling_banner_22.jpg"
                    alt=""
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/* movie-selection */}
        <div className="movie-selection" id="movie-selection">
          <h2>-MOVIE SELECTION-</h2>
          {/* modal booking movie */}
          <div
            className="modal fade "
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered  booking-movie">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                    Đặt vé xem phim
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* day */}
                <div className="modal-body w-full h-[90px] p-[20px] bg-slate-300 flex gap-2 days border-y-2 border-black my-1">
                  <div
                    className={`cursor-pointer w-[74px] h-[45px] p-1  rounded-[3px]  font-mono flex items-center justify-around day-item ${
                      selectedTab === "default-day"
                        ? "text-gray-950 border border-black rounded-[3px] bg-red-100 py-2 "
                        : ""
                    }`}
                    onClick={() => handleTabDay("default-day")}
                  >
                    <div className="flex flex-col">
                      <p>01</p>
                      <p>Thu</p>
                    </div>
                    <div className="">
                      <p className="text-3xl">25</p>
                    </div>
                  </div>

                  <div
                    className={`cursor-pointer w-[74px] h-[45px] p-1  rounded-[3px]  font-mono flex items-center justify-around day-item ${
                      selectedTab === "next-day"
                        ? "text-gray-950 border border-black rounded-[3px] bg-red-100 py-2 "
                        : ""
                    }`}
                    onClick={() => handleTabDay("next-day")}
                  >
                    <div className="flex flex-col">
                      <p>01</p>
                      <p>Thu</p>
                    </div>
                    <div className="">
                      <p className="text-3xl">25</p>
                    </div>
                  </div>
                </div>
                {/* location */}
                <div className="modal-body w-[95%] h-[70px] border-b-2 border-black mx-auto ">
                  <div className="flex items-center gap-2">
                    {/*  */}
                    <p
                      className={`cursor-pointer h-[40px] w-[110px] font-mono text-center rounded-[5px] py-[7px] ${
                        selectedLocation === "default-location"
                          ? " bg-gray-950 text-white border border-black rounded-[3px]  py-2 "
                          : ""
                      }`}
                      onClick={() => handleTabLocation("default-location")}
                    >
                      Hồ Chí Minh
                    </p>

                    <p
                      className={`cursor-pointer h-[40px] w-[110px] font-mono text-center rounded-[5px] py-[7px] ${
                        selectedLocation === "next-location"
                          ? " bg-gray-950 text-white border border-black rounded-[3px]  py-2 "
                          : ""
                      }`}
                      onClick={() => handleTabLocation("next-location")}
                    >
                      Hà Nội
                    </p>
                  </div>
                </div>
                {/* type */}
                <div className="modal-body w-[95%] h-[70px] p-[20px] bg-slate-300 flex gap-2 days border-b-2 border-black mx-auto">
                  <div className="flex gap-3">
                    <p
                      className={`cursor-pointer h-[35px] w-[150px] font-mono text-center rounded-[5px] py-[5px] ${
                        selectedType === "default-type"
                          ? " bg-gray-950 text-white border border-black rounded-[3px]  py-2 "
                          : ""
                      }`}
                      onClick={() => handleTabType("default-type")}
                    >
                      2D Phụ Đề Việt
                    </p>

                    <p
                      className={`cursor-pointer h-[35px] w-[150px] font-mono text-center rounded-[5px] py-[5px] ${
                        selectedType === "next-type"
                          ? " bg-gray-950 text-white border border-black rounded-[3px]  py-2 "
                          : ""
                      }`}
                      onClick={() => handleTabType("next-type")}
                    >
                      3D Phụ Đề Việt
                    </p>
                  </div>
                </div>
                {/* theater and time */}
                <div className="modal-body w-[95%] h-[110px] p-[20px] bg-slate-300  days border-b-2 border-black mx-auto">
                  <h3 className="font-mono font-bold text-lg">
                    CGV Lý Chính Thắng
                  </h3>
                  <div className="flex gap-2 items-center times">
                    <p className="w-[126px] h-[35px] text-center  py-[5px] font-mono font-medium border border-black time-item">
                      10:05 PM
                    </p>
                  </div>
                </div>{" "}
                <div className="modal-body w-[95%] h-[110px] p-[20px] bg-slate-300  days border-b-2 border-black mx-auto">
                  <h3 className="font-mono font-bold text-lg">
                    CGV Lý Chính Thắng
                  </h3>
                  <div className="flex gap-2 items-center times">
                    <p className="w-[126px] h-[35px] text-center  py-[5px] font-mono font-medium border border-black time-item">
                      10:05 PM
                    </p>
                  </div>
                </div>
                <div className="modal-body w-[95%] h-[110px] p-[20px] bg-slate-300  days border-b-2 border-black mx-auto">
                  <h3 className="font-mono font-bold text-lg">
                    CGV Lý Chính Thắng
                  </h3>
                  <div className="flex gap-2 items-center times">
                    <p className="w-[126px] h-[35px] text-center  py-[5px] font-mono font-medium border border-black time-item">
                      10:05 PM
                    </p>
                  </div>
                </div>
                <div className="modal-body w-[95%] h-[110px] p-[20px] bg-slate-300  days border-b-2 border-black mx-auto">
                  <h3 className="font-mono font-bold text-lg">
                    CGV Lý Chính Thắng
                  </h3>
                  <div className="flex gap-2 items-center times">
                    <p className="w-[126px] h-[35px] text-center  py-[5px] font-mono font-medium border border-black time-item">
                      10:05 PM
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <p>footer booking</p>
                </div>
              </div>
            </div>
          </div>
          <OwlCarousel
            className="owl-theme mt-3"
            loop
            margin={10}
            nav
            items={4}
          >
            {listMovie.slice(0, 6).map((item) => (
              <div key={item.id} className="item">
                <div className="movie-item ">
                  <div className="movie-image">
                    <img src={item.movieImage} alt="" />
                  </div>
                  <div className="movie-informations">
                    <h4 className="text-center font-bold font-mono text-white mt-2">
                      {item.movieName}
                    </h4>
                    <div className=" flex justify-around mt-2">
                      <div className="movie-button">
                        {/* <Link to={"/detail"}> */}
                        <button
                          variant="outline-secondary"
                          className="text-center font-medium font-mono text-white "
                          onClick={() => handleFindById(item.id)}
                        >
                          Chi tiết
                        </button>{" "}
                        {/* </Link> */}
                      </div>
                      <div className="movie-button">
                        <button
                          variant="outline-secondary"
                          className="text-center font-medium font-mono text-white "
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Mua vé <i className="fa-solid fa-ticket"></i>
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
          ;
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HomeCustomer;
