import React from "react";
import "./HomeCustomer.css";

function Event() {
  return (
    <div>
      <div className="event">
        <h1>Tin mới & Sự Kiện</h1>
      </div>

      <div className="w-[70%] h-full mx-auto ">
        <p>Hiển thị 1 list danh sách không phân trang</p>
        <div className="event-list">
          <div className="">
            <img
              className="w-[230px] h-[230px] object-cover mx-auto"
              src="https://www.cgv.vn/media/wysiwyg/2024/012024/T4VV_N_O_240x201.jpg"
              alt=""
            />
            <div>
              <p>
                <i className="fa-solid fa-cake-candles text-xl text-red-600"></i>{" "}
                <span className="font-semibold text-xl">Tên sự kiện</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
