import React from "react";

import "./HomeCustomer.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function HomeCustomer() {
  return (
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
                    className="w-full h-full oje"
                    src="https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgvlive_apr2023_rb_1.png"
                    alt=""
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full"
                    src="https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_79.png"
                    alt=""
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    className="w-full h-full"
                    src="https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_rolling_banner_1.jpg"
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
          <OwlCarousel
            className="owl-theme mt-3"
            loop
            margin={10}
            nav
            items={4}
          >
            <div class="item">
              <div className="movie-item ">
                <div className="movie-image">
                  <img
                    src="https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgvlive_apr2023_rb_1.png"
                    alt=""
                  />
                </div>
                <div className="movie-informations">
                  <h4 className="text-center font-bold font-mono text-white mt-2">
                    tên phim
                  </h4>
                  <div className=" flex justify-around">
                    <div className="movie-button">
                      <Link to={"/detail"}>
                        <button
                          variant="outline-secondary"
                          className="text-center font-medium font-mono text-white "
                        >
                          Chi tiết
                        </button>{" "}
                      </Link>
                    </div>
                    <div className="movie-button">
                      <button
                        variant="outline-secondary"
                        className="text-center font-medium font-mono text-white "
                      >
                        Mua vé <i class="fa-solid fa-ticket"></i>
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
            <div class="item">
              <h4>5</h4>
            </div>
            <div class="item">
              <h4>6</h4>
            </div>
            <div class="item">
              <h4>7</h4>
            </div>
            <div class="item">
              <h4>8</h4>
            </div>
            <div class="item">
              <h4>9</h4>
            </div>
            <div class="item">
              <h4>10</h4>
            </div>
            <div class="item">
              <h4>11</h4>
            </div>
            <div class="item">
              <h4>12</h4>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
    </div>
  );
}

export default HomeCustomer;
