import React from "react";
import "./BookingOnline.css";
import { useSelector } from "react-redux";
function BookingChair() {

  const chairlist = useSelector((state) => state.order.getChairStatus.listChair);
  const roomResponse = useSelector((state) => state.order.getRoomMovie.roomResponse);
  const room = roomResponse?.[0];

  if (!room) {
    return <div>Loading room information...</div>;
  }

  const rows = room.numberOfSeatsInAColumn;
  const columns = room.numberOfSeatsInARow;
  let chairsGrid = [];

  for (let i = 0; i < rows; i++) {
    let rowChairs = [];
    for (let j = 0; j < columns; j++) {
      const chairIndex = i * columns + j;
      const chair = chairlist[chairIndex];
      const isBooked = chair?.status !== 'Trống'; 
      const chairType = chair?.chairType;

      rowChairs.push(
        <div key={`${i}-${j}`}
          className={`chair ${isBooked ? 'booked' : ''} ${chairType === 'VIP' ? 'vip' : 'normal'}`}>
          {chair.chairName}
        </div>
      );
    }
    chairsGrid.push(<div key={i} className="chair-row">{rowChairs}</div>);
  }
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
