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
import {
  getChair,
  getLocation,
  getMovieInform,
  getRoom,
  startBuy,
} from "../../redux/api/service/orderRequest";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getOrderInformations } from "../../redux/reducers/orderSlice";

function HomeCustomer() {
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const currentDate = new Date();
  const formattedDate = format(currentDate, "yyyy-MM-dd");
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [selectedType, setSelectedType] = useState("TWO_D");
  const [days, setDays] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationUpdated, setIsLocationUpdated] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listMovie = useSelector((state) => state.movies.movie.listMovieSelect);

  const listLocation = useSelector(
    (state) => state.order.getLocation.listLocation
  );

  const timeSlosts = useSelector((state) => state.order.startBuy.informations);

  useEffect(() => {
    const today = new Date();
    const nextDays = getNextDays(today, 11);
    setDays(nextDays);
    if (nextDays.length > 0) {
      setSelectedTab(nextDays[0].date);
    }
  }, []);

  useEffect(() => {
    if (listLocation && listLocation.length > 0) {
      setSelectedLocation(listLocation[0]);
      setIsLocationUpdated(true); // Cập nhật trạng thái khi listLocation thay đổi
    }
  }, [listLocation]);

  useEffect(() => {
    getLocation(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (selectedLocation && selectedMovieId !== null) {
      startBuy(
        dispatch,
        selectedMovieId,
        selectedDate,
        selectedType,
        selectedLocation.locationName
      );
    }
  }, [selectedDate, selectedLocation, selectedType, selectedMovieId, dispatch]);

  useEffect(() => {
    const selectedDay = days.find(
      (day) => day.date.getTime() === selectedTab.getTime()
    );
    if (selectedDay) {
      setSelectedDate(format(selectedDay.date, "yyyy-MM-dd"));
    }
  }, [selectedTab, days]);

  const handleTabDay = (day) => {
    setSelectedTab(day);
  };
  const handleTabLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleTabType = (type) => {
    setSelectedType(type);
  };

  const handleViewTimeSlot = (idMovie) => {
    setSelectedMovieId(idMovie);
    setIsLocationUpdated(false);
  };

  const handleGetTimeSlot = async (theater, time) => {
    if (token === null) {
      navigate("/login");
    } else {
      const payload = {
        idMovie: selectedMovieId,
        locationName: selectedLocation.locationName,
        selectedDate,
        theater,
        time,
      };
      dispatch(getOrderInformations(payload));

      // Đợi cho getRoom hoàn thành và lấy roomId
      const rooms = await getRoom(
        dispatch,
        selectedMovieId,
        time,
        selectedType,
        theater,
        selectedDate
      );
      const roomId = rooms?.[0]?.id; // Truy cập id của phòng đầu tiên
      console.log(rooms);
      if (roomId) {
        getChair(dispatch, roomId, time);
        getMovieInform(dispatch, navigate, selectedMovieId);
      } else {
        // Xử lý khi không tìm thấy phòng
      }
    }
  };
  useEffect(() => {
    getAllMovieSelect(dispatch);
  }, [dispatch]);

  const handleFindById = async (idMovie) => {
    await getMovie(dispatch, token, idMovie);
    navigate("/detail");
  };

  return listMovie ? (
    <div>
      <div className="w-screen h-full">
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
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer w-[74px] h-[45px] p-1 rounded-[3px] font-mono flex items-center justify-around day-item ${
                        selectedTab.getTime() === day.date.getTime()
                          ? "text-gray-950 border border-black rounded-[3px] bg-red-100 py-2"
                          : ""
                      }`}
                      onClick={() => handleTabDay(day.date)}
                    >
                      <div className="flex flex-col">
                        <p>{day.dayOfWeek}</p>
                        <p>{`${String(day.day).padStart(2, "0")}/${String(
                          day.month
                        ).padStart(2, "0")}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* location */}
                <div className="modal-body w-[95%] h-[70px] border-b-2 border-black mx-auto ">
                  <div className="flex items-center gap-2">
                    {listLocation ? (
                      listLocation.map((location, index) => (
                        <p
                          key={index}
                          className={`cursor-pointer h-[40px] w-[110px] font-mono text-center rounded-[5px] py-[7px] ${
                            selectedLocation &&
                            selectedLocation.id === location.id
                              ? "bg-gray-950 text-white border border-black rounded-[3px] py-2"
                              : ""
                          }`}
                          onClick={() => handleTabLocation(location)}
                        >
                          {location.locationName}
                        </p>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {/* type */}
                <div className="modal-body w-[95%] h-[70px] p-[20px] bg-slate-300 flex gap-2 days border-b-2 border-black mx-auto">
                  <div className="flex gap-3">
                    <p
                      className={`cursor-pointer h-[35px] w-[150px] font-mono text-center rounded-[5px] py-[5px] ${
                        selectedType === "TWO_D"
                          ? "bg-gray-950 text-white border border-black rounded-[3px] py-2"
                          : ""
                      }`}
                      onClick={() => handleTabType("TWO_D")}
                    >
                      2D Phụ Đề Việt
                    </p>

                    <p
                      className={`cursor-pointer h-[35px] w-[150px] font-mono text-center rounded-[5px] py-[5px] ${
                        selectedType === "THREE_D"
                          ? "bg-gray-950 text-white border border-black rounded-[3px] py-2"
                          : ""
                      }`}
                      onClick={() => handleTabType("THREE_D")}
                    >
                      3D Phụ Đề Việt
                    </p>
                  </div>
                </div>
                {/* theater and time */}
                {timeSlosts && Object.keys(timeSlosts).length > 0 ? (
                  Object.keys(timeSlosts).map((theater) => (
                    <div
                      className="modal-body w-[95%] h-[110px] p-[20px] bg-slate-300 days border-b-2 border-black mx-auto"
                      key={theater}
                    >
                      <h3 className="font-mono font-bold text-lg">
                        CGV - {theater}
                      </h3>
                      <div className="flex gap-2 items-center times">
                        {timeSlosts[theater].map((time) => (
                          <p
                            onClick={() => handleGetTimeSlot(theater, time)}
                            className="w-[126px] h-[30px] text-center py-[5px] font-mono font-medium border border-black time-item btn-close"
                            key={time}
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            {time}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <>Không có suất chiếu nào</>
                )}
                <div className="modal-footer">
                  <p>booking movie</p>
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
                          onClick={() => handleViewTimeSlot(item.id)}
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

function getNextDays(startDate, numDays) {
  const days = [];
  for (let i = 0; i < numDays; i++) {
    const nextDay = new Date(startDate.getTime());
    nextDay.setDate(startDate.getDate() + i);

    days.push({
      date: nextDay,
      dayOfWeek: nextDay.toLocaleString("default", { weekday: "short" }),
      day: nextDay.getDate(),
      month: nextDay.getMonth() + 1, // Tháng trong JavaScript bắt đầu từ 0
      year: nextDay.getFullYear(),
    });
  }
  return days;
}
