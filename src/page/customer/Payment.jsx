import React, { useEffect, useState } from "react";
import "../customer/detailMovie/DetailMovie.css";
import { useSelector } from "react-redux";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("VNPay");
  const [ticketPrice, setTicketPrice] = useState(0);
  const chairs = useSelector((state) => state.order.getListChair.chairs);
  const menus = useSelector((state) => state.order.addToMenu.menu)
  const movie = useSelector((state) => state.order.getMovieInform.movieInform);


  useEffect(() => {
    const newPrice = chairs.reduce((total, chair) => {
      let chairPrice = movie.price;
      if (chair.chairType === 'VIP') {
        chairPrice *= 1.05;
      }
      return total + chairPrice;
    }, 0);
    setTicketPrice(newPrice);
  }, [chairs, movie]);


  let totalMenu = 0;
  if(menus.length > 0) {
    totalMenu = menus.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.quantity * currentItem.price);
    }, 0);
  }
  let total = ticketPrice+totalMenu;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="w-full h-[700px] font-mono">
        <div className="w-full h-[50px] bg-slate-600 text-white font-bold text-2xl text-center">
          <p className="py-2">THANH TOÁN</p>
        </div>

        <div className="flex gap-4">
          <div className=" w-[70%] h-[600px] mt-4">
            <p className="pl-3 pt-1 w-full h-[40px] bg-slate-400">
              Bước 1 : <strong className="font-bold text-2xl ">Giảm Giá</strong>
            </p>
            {/* voucher */}
            <div className="mt-2">
              <p className="pl-3 pt-1 w-full h-[40px] text-xl font-medium bg-gray-200 ">
                CGV Voucher
              </p>
              <div className="flex justify-around mt-1">
                <div className="mb-2 ml-2">
                  <label className="form-label font-mono font-semibold">
                    Mã Voucher: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mã voucher"
                  />
                </div>
                <p>
                  <div className="b">
                    <button className="booking-btn font-mono text-base">
                      Áp dụng
                    </button>
                  </div>
                </p>
              </div>
            </div>
            {/* điểm thưởng */}
            <div className="mt-2">
              <p className="pl-3 pt-1 w-full h-[40px] text-xl font-medium bg-gray-200 ">
                Điểm CGV
              </p>
              <div className="flex justify-around mt-1">
                <div className="mb-2 ml-2">
                  <label className="form-label font-mono font-semibold">
                    Điểm của bạn:{" "}
                    <span className="text-red-500">
                      <strong>100</strong> P
                    </span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nhập số điểm"
                  />
                </div>
                <p>
                  <div className="b">
                    <button className="booking-btn font-mono text-base">
                      Áp dụng
                    </button>
                  </div>
                </p>
              </div>
            </div>
            <p className="pl-3 pt-1 w-full h-[40px] bg-slate-400">
              Bước 2 :{" "}
              <strong className="font-bold text-2xl">
                Hình Thức Thanh Toán
              </strong>
            </p>
            <div className=" bg-gray-200 pl-3 mt-3">
              <dl className="flex flex-col gap-3 py-3">
                <dt>
                  <input
                    defaultValue="VNPay"
                    type="radio"
                    name="paymentMethod"
                    id="VNPay"
                    className="VNPay"
                    checked={selectedOption === "VNPay"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="VNPay">
                    <img
                      className="w-[35px] h-[25px] object-contain inline-block"
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/vnpay_newlogo.png"
                      alt=""
                    />
                    <strong className="pm_name method_label">VNPay</strong>
                  </label>
                </dt>
                <dt>
                  <input
                    defaultValue="onepay"
                    type="radio"
                    name="paymentMethod"
                    className="radio"
                    checked={selectedOption === "onepay"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="p_method_onepay">
                    <img
                      className="w-[35px] h-[25px] object-contain inline-block"
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/atm_icon.png"
                      alt=""
                    />
                    <strong className="pm_name method_label">
                      ATM card (Thẻ nội địa)
                    </strong>
                  </label>
                </dt>
                {/* momo */}
                <dt>
                  <input
                    defaultValue="momo"
                    type="radio"
                    name="paymentMethod"
                    id="momo"
                    className="radio"
                    checked={selectedOption === "momo"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="momo">
                    <img
                      className="w-[35px] h-[25px] object-contain inline-block"
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/momo_icon.png"
                      alt=""
                    />
                    <strong className="pm_name method_label">
                      MoMo - Nhập MMCGV -5k/bill, Vé 9K Bạn Mới
                    </strong>
                  </label>
                </dt>

                {/* zalo */}
                <dt>
                  <input
                    defaultValue="zalo"
                    type="radio"
                    name="paymentMethod"
                    id="zalo"
                    className="radio"
                    checked={selectedOption === "zalo"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="zalo">
                    <img
                      className="w-[35px] h-[25px] object-contain inline-block"
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/icon-HOT-96x96.png"
                      alt=""
                    />
                    <strong className="pm_name method_label">
                      ZaloPay: Bạn Mới vé 14K - Bạn Thân vé 84K
                    </strong>
                  </label>
                </dt>
              </dl>
            </div>
          </div>
          <div className=" w-[30%] h-[600px] mt-4">
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-200 text-xl font-medium text-center border-b-2 border-gray-500">
              Tổng cộng
            </p>
            <div className="pl-3 pt-1 w-full h-[40px] bg-gray-200 text-xl font-medium flex justify-evenly border-b-2 border-gray-500">
              <p className="w-[50%] justify-start">Vé:</p>
              <p className="w-[50%]">{ticketPrice} VNĐ</p>
            </div>
            <div className="pl-3 pt-1 w-full h-[40px] bg-gray-200 text-xl font-medium border-b-2 border-gray-500 flex justify-evenly">
              <p className="w-[50%] justify-start">Bỏng nước:</p>
              <p className="w-[50%]">{totalMenu} VNĐ</p>
            </div>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-500 text-xl font-medium text-center ">
              <span>{total}</span> VNĐ
            </p>

            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-200 text-xl font-medium text-center mt-3 border-b-2 border-gray-500 ">
              Khuyến mãi
            </p>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-500 text-xl font-medium text-center">
              <span>0</span> VNĐ
            </p>

            <p className="pl-3 pt-1 w-full h-[40px] bg-red-600 text-xl font-bold text-white text-center mt-3">
              Tổng Thanh Toán
            </p>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-300 text-xl font-medium text-center ">
              <span>{total}</span> VNĐ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
