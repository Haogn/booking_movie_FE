import React from "react";
import "./BookingOnline.css";

function BookingDish() {
  return (
    <div className="booking_dish  font-mono">
      <div className="head_chair">
        <h1>Bắp Nước</h1>
      </div>
      <div className="card_list row px-4">
        <div className="cards col-6">
          <div className="left_card ">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-sat-net.jpeg"
              alt=""
            />
          </div>
          <div className="right_card col-6">
            <div>
              <h2>Tên sản phẩm</h2>
              <p>
                <b>Loại: </b> <span>đồ ăn</span>
              </p>
              <p>
                <b>Giá: </b> <span>50.000đ</span>
              </p>
            </div>
            <div className="btn_s_b">
              <button>-</button>
              <div className="text">0</div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cards col-6">
          <div className="left_card ">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-sat-net.jpeg"
              alt=""
            />
          </div>
          <div className="right_card col-6">
            <div>
              <h2>Tên sản phẩm</h2>
              <p>
                <b>Loại: </b> <span>đồ ăn</span>
              </p>
              <p>
                <b>Giá: </b> <span>50.000đ</span>
              </p>
            </div>
            <div className="btn_s_b">
              <button>-</button>
              <div className="text">0</div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cards col-6">
          <div className="left_card ">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-sat-net.jpeg"
              alt=""
            />
          </div>
          <div className="right_card col-6">
            <div>
              <h2>Tên sản phẩm</h2>
              <p>
                <b>Loại: </b> <span>đồ ăn</span>
              </p>
              <p>
                <b>Giá: </b> <span>50.000đ</span>
              </p>
            </div>
            <div className="btn_s_b">
              <button>-</button>
              <div className="text">0</div>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDish;
