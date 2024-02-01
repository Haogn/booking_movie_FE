import React, { useState } from "react";
import "./BookingOnline.css";
import { useDispatch, useSelector } from "react-redux";
import { getListChairSuccess } from "../../../redux/reducers/orderSlice";
function BookingChair() {
  const dispatch = useDispatch();
  const [selectedChairs, setSelectedChairs] = useState([]);
  const chairlist = useSelector(
    (state) => state.order.getChairStatus.listChair
  );
  const roomResponse = useSelector(
    (state) => state.order.getRoomMovie.roomResponse
  );
  let room;
  if (roomResponse && roomResponse.length > 0) {
    room = roomResponse[0];
  } else {
    console.log("chưa có phòng");
  }
  if (!room) {
    return <div>Loading room information...</div>;
  }

  const rows = room.numberOfSeatsInAColumn;
  const columns = room.numberOfSeatsInARow;
  let chairsGrid = [];

  for (let j = 0; j < columns; j++) {
    let columnChairs = [];
    for (let i = 0; i < rows; i++) {
      const chairIndex = i * columns + j;
      const chair = chairlist[chairIndex];
      const isBooked = chair?.status !== "Trống";
      const chairType = chair?.chairType;
      const isDelete = chair?.delete; 

      if (isDelete) {
        columnChairs.push(<div key={`${i}-${j}`} className="chair not">X</div>);
        continue; 
      }

      const chairElement = (
        <div
          key={`${i}-${j}`}
          className={`chair ${isBooked ? "booked" : ""} ${
            chairType === "VIP" ? "VIP" : "NORMAL"
          } ${
            selectedChairs.some(
              (selectedChair) => selectedChair.id === chair.id
            )
              ? "selected"
              : ""
          }`}
          {...(!isBooked && { onClick: () => handleChoseChair(chair) })}
        >
          {chair.chairName}
        </div>
      );

      columnChairs.push(chairElement);
    }
    chairsGrid.unshift(
      <div key={j} className="chair-column">
        {columnChairs}
      </div>
    );
}



  const handleChoseChair = (chair) => {
    const index = selectedChairs.findIndex(
      (selectedChair) => selectedChair.id === chair.id
    );

    let updatedChairs = [...selectedChairs];
    if (index === -1) {
      updatedChairs.push(chair); // Thêm ghế vào danh sách
    } else {
      updatedChairs.splice(index, 1); // Loại bỏ ghế từ danh sách
    }

    setSelectedChairs(updatedChairs);
    dispatch(getListChairSuccess(updatedChairs)); // Gửi action với danh sách ghế đã cập nhật
  };

  return (
    <div className="booking_chair font-mono">
      <div className="head_chair">
        <h1>Người / Ghế</h1>
      </div>
      <div className="screen">
        <h1>SCREEN</h1>
      </div>
      <div className="w-[400px] h-[400px]  mx-auto">
        <div className="chairs m-1">{chairsGrid}</div>
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
