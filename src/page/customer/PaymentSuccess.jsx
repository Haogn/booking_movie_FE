import React, { useEffect } from "react";
import "./PaymentSuccess.css";
import Barcode from "react-barcode";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findMenu, findOrder } from "../../redux/api/service/orderRequest";
import { format } from "date-fns";
function PaymentSuccess() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");

  console.log("orderId from URL:", orderId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderId) {
      findOrder(dispatch, orderId);
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderId) {
      findMenu(dispatch, orderId);
    }
  }, [dispatch, orderId]);

  const order = useSelector((state) => state.order.findOrder.orderResponse);
  const menus = useSelector((state) => state.order.findMenu.menuResponse);

  console.log(order);
  console.log(menus);

  let endTime;
  let date;
  if (order && order.bookingDate) {
    const selectedDate = new Date(order.bookingDate);
    if (!isNaN(selectedDate)) {
      date = format(selectedDate, "dd-MM-yyyy");
    } else {
      console.error("selectedDate is not a valid date");
    }
  }

  const hasData =
    order && menus && Object.keys(order).length > 0 && menus.length > 0;

  return hasData ? (
    <div className="flex">
      <div className="w-[30%] h-screen ">
        <img
          className="mt-[200px]"
          src="https://media.istockphoto.com/id/185007865/vi/anh/qu%C3%A0-t%E1%BA%B7ng-v%C3%A9.jpg?s=2048x2048&w=is&k=20&c=enJhNoV9qahkSzDcyxddroPoaOD6eBWyF8vkiHfjG1Q="
          alt=""
        />
      </div>
      <div className="w-[40%] h-[900px] ml-4 mt-4 font-mono   ">
        <div className="ticket">
          <div className="ticket-top text-center text-2xl font-bold pt-3">
            <h1 className="pb-1"> Thanh toán thành công</h1>
          </div>
          <div className="ticket-center">
            <div className="ticket-content w-[80%] h-full ml-10">
              <div className="w-full h-[60%]">
                <div className="mb-4 flex h-[120px]">
                  <div className="w-[50%] h-full">
                    <h3 className="text-2xl font-bold">{order.movieName}</h3>
                    <p className="text-gray-500">{date}</p>
                    <p className="text-gray-500">{order.startTime} ~</p>
                  </div>

                  <div className="w-[50%] h-full">
                    <img
                      className="w-full h-full rounded-xl object-contain"
                      src="https://imagev3.vietnamplus.vn/w820/Uploaded/2024/xpcwvovt/2024_01_29/beekeeper-8349.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="w-[50%]">
                    <h3 className="text-gray-500 text-xl ">Rạp CGV</h3>
                    <p className="">{order.theaterName}</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-gray-500 text-xl ">Phòng Chiếu</p>
                    <p>{order.roomName}</p>
                  </div>
                </div>
                <div className="flex mt-1">
                  <div className="w-[50%] ">
                    <p className="text-gray-500 text-xl">Ghế</p>
                    {order.chairs.map((chair, index) => (
                     
                        <span key={index}>{chair} </span>
                     
                    ))}
                  </div>
                  <div className="w-[50%]">
                    <p className="text-gray-500 text-xl">Combo</p>
                    {menus.map((menu, index) => (
                      <p key={index}>
                        <span>{menu.dishName}  </span> <span>x{menu.quantity}</span>
                      </p>
                    ))}                  
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-center">
                    <span className="text-xl text-gray-500">Tổng:</span>{" "}
                    <strong className="text-red-600">{order.total} VNĐ</strong>
                  </p>
                </div>

                {/* barcode */}
                <p className="text-gray-600 mt-2">
                  Vui lòng đưa mã này đến quầy vé CGV để nhận vé
                </p>
                <div className="w-[80%] h-[80px] mx-auto border-1 border-gray-900 mt-1">
                  <Barcode value={order.code} />
                </div>
              </div>
              <div className="w-full h-[40%]">
                <img
                  className="w-full h-full object-contain"
                  src="https://media.istockphoto.com/id/184151977/vi/anh/%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-r%E1%BA%A1p-chi%E1%BA%BFu-phim.jpg?s=2048x2048&w=is&k=20&c=WeyungQluq6xdoxuuAQNhmnfESS-jt3V2KWVUDsuaaI="
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="ticket-footer"></div>
        </div>
      </div>
      <div className="w-[30%] h-screen ">
        <img
          className="mt-[250px]"
          src="https://media.istockphoto.com/id/174616877/vi/anh/phim-pop-ng%C3%B4-v%E1%BB%9Bi-v%C3%A9-g%C3%B3c-r%E1%BB%99ng.jpg?s=2048x2048&w=is&k=20&c=g7iydsixgQqa_zTjzRDlscZzRnBPGDt2b9jkzobSua4="
          alt=""
        />
      </div>
    </div>
  ) : (
    <div>Không có thông tin</div>
  );
}

export default PaymentSuccess;

function addMinutesToTime(time, minutesToAdd) {
  const timeParts = time.split(":");
  const date = new Date();
  date.setHours(parseInt(timeParts[0]));
  date.setMinutes(parseInt(timeParts[1]));
  date.setSeconds(parseInt(timeParts[2]));

  // Cộng thêm phút
  date.setMinutes(date.getMinutes() + minutesToAdd);

  // Định dạng lại thời gian với HH:mm:ss
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
