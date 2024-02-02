import React, { useEffect } from "react";
import "./PaymentSuccess.css";
import Barcode from "react-barcode";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { findMenu, findOrder } from "../../redux/api/service/orderRequest";
function PaymentSuccess() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');

  console.log(orderId);
  const dispatch = useDispatch();


  useEffect(() => {
    findOrder(dispatch, orderId)
  },[dispatch,orderId])

  useEffect(() => {
    findMenu(dispatch, orderId)
  },[dispatch,orderId])

const order = useSelector((state)=>state.order.findMenu.orderResponse)
const menus = useSelector((state)=>state.order.findMenu.menuResponse)

  const barcodeData = "YourCode-987";
  return order && menus ? (
    <div>
      <div className="w-[40%] h-[900px] mx-auto mt-4 font-mono   ">
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
                    <p className="text-gray-500">02-02-2024</p>
                    <p className="text-gray-500">
                      18:30:00 ~ startTime + runningTime
                    </p>
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
                    <p className="">CGV Bà Triệu</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-gray-500 text-xl ">Phòng Chiếu</p>
                    <p>Cinema 01</p>
                  </div>
                </div>
                <div className="flex mt-1">
                  <div className="w-[50%] ">
                    <p className="text-gray-500 text-xl">Ghế</p>
                    <p>H4, h5</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-gray-500 text-xl">Combo</p>
                    <p>abc</p>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-center">
                    <span className="text-xl text-gray-500">Tổng:</span>{" "}
                    <strong className="text-red-600">120000 VNĐ</strong>
                  </p>
                </div>

                {/* barcode */}
                <p className="text-gray-600 mt-2">
                  Vui lòng đưa mã này đến quầy vé CGV để nhận vé
                </p>
                <div className="w-[80%] h-[80px] mx-auto border-1 border-gray-900 mt-1">
                  <Barcode value={barcodeData} />
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
    </div>
  ):(<div>
    Không có thông tin
  </div>);
}

export default PaymentSuccess;
