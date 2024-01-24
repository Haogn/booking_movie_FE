import React from "react";
import "./BookingOnline.css";
function BookingChair() {
  const rows = 10;
  const columns = 10;
  const chairs = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const chairNumber = i * columns + j + 1;
      chairs.push(
        <div key={`${i}-${j}`} className="chair">
          {chairNumber}
        </div>
      );
    }
  }
  return (
    <div className="booking_chair  font-mono">
      <div className="head_chair">
        <h1>Người / Ghế</h1>
      </div>
      <div className="screen">
        <h1>SCREEN</h1>
      </div>
      <div className="w-[400px] h-[400px]  mx-auto">
        <div className="chairs m-1">{chairs}</div>
      </div>

      <div class="ticketbox-notice row">
        <div class="iconlist col-6">
          <div className="as">
            <div className="chair checked"></div>
            Checked
          </div>
          <div className="as">
            <div className="chair chon"></div>
            Đã chọn
          </div>
          <div className="as">
            <div className="chair not">X</div>
            Không thể chọn
          </div>
        </div>
        <div class="iconlist col-6">
          <div className="as">
            <div className="chair thuong"></div>
            Thường
          </div>
          <div className="as">
            <div className="chair vip"></div>
            VIP
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingChair;
