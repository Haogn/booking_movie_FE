import React, { useEffect, useState } from "react";
import "../customer/detailMovie/DetailMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../redux/api/service/customerRequest";
import { couponApply, pointApply } from "../../redux/reducers/orderSlice";
import { getCouponByUser,applyCoupon } from "../../redux/api/service/orderRequest";

function Payment() {
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("VNPay");
  const [codeCoupon, setCodeCoupon] = useState("");
  const [point, setPoint] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [errorPoint, setErrorPoint] = useState();
  const [errorCoupon, setErrorCoupon] = useState("");
  const chairs = useSelector((state) => state.order.getListChair.chairs);
  const menus = useSelector((state) => state.order.addToMenu.menu);
  const movie = useSelector((state) => state.order.getMovieInform.movieInform);
  const couponList = useSelector(
    (state) => state.order.getCouponOfUser.listCoupon
  );
  const errCoupon = useSelector(
    (state) => state.order.checkCoupon.errorCoupon
  );
  const userProfile = useSelector(
    (state) => state.customer.profile.userProfile
  );

  console.log(couponList);
  const saleCoupon = useSelector(
    (state) => state.order.checkCoupon.couponResponse
  );

  useEffect(() => {
    const newPrice = chairs.reduce((total, chair) => {
      let chairPrice = movie.price;
      if (chair.chairType === "VIP") {
        chairPrice *= 1.05;
      }
      return total + chairPrice;
    }, 0);
    setTicketPrice(newPrice);
  }, [chairs, movie]);

  useEffect(() => {
    getCouponByUser(dispatch, token);
  }, [dispatch, token]);

  useEffect(() => {
    profileUser(dispatch, token);
  }, [dispatch, token]);

  let totalMenu = 0;
  if (menus.length > 0) {
    totalMenu = menus.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity * currentItem.price;
    }, 0);
  }
  let total = ticketPrice + totalMenu;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckCopon = () => {
    if (codeCoupon === "Chọn" || codeCoupon.trim() === "") {
      setErrorCoupon("Xin vui lòng chọn mã giảm giá.");
    } else {
      applyCoupon(dispatch, codeCoupon);
      setErrorCoupon("");
    }
  };

  let discount = 0;
  let discountCoupon = 0;
  if (saleCoupon && saleCoupon !== 0) {
    discountCoupon = (ticketPrice * saleCoupon) / 100;
  }

  let discountPoint = 0;
  const handleApplyPoint = (e) => {
    e.preventDefault();
    const inputPoint = parseInt(e.target.elements["point"].value, 10);
    if (isNaN(inputPoint) || inputPoint < 0) {
      setErrorPoint("Vui lòng nhập một số hợp lệ.");
      return;
    }
    if (!userProfile || inputPoint > userProfile.point) {
      setErrorPoint("Điểm nhập vào quá lớn.");
      return;
    }
    if (inputPoint * 1000 > total / 2) {
      setErrorPoint(
        "Bạn chỉ có thể dùng điểm để thanh toán 50% giá trị đơn hàng."
      );
      return;
    }
    const discountPoint = inputPoint * 1000;
    if (discountPoint > total - discountCoupon) {
      setErrorPoint("Điểm nhập vào quá lớn.");
      return;
    }
    setPoint(inputPoint);
    setErrorPoint("");
  };

  dispatch(pointApply(point));
  dispatch(couponApply(saleCoupon));
  discountPoint = point * 1000;
  discount = discountCoupon + discountPoint;
  let subTotal = total - discount;

  const hasData = userProfile;

  return hasData && hasData ? (
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
                <span>(Chỉ áp dụng cho vé phim) </span>
              </p>
              {couponList && couponList.length > 0 ? (
                <div className="flex justify-around mt-1">
                  <div className="mb-3 ml-2">
                    <label className="form-label font-mono font-semibold">
                      Coupon: <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={codeCoupon}
                      onChange={(e) => setCodeCoupon(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option defaultValue>Chọn</option>
                      {couponList &&
                        couponList.map((coupon, index) => (
                          <option key={index} value={coupon.code}>
                            {coupon.code} ({coupon.sale}%)
                          </option>
                        ))}
                    </select>
                    {errorCoupon && (
                      <div className="text-red-500">{errorCoupon}</div>
                    )}
                      {errCoupon && errCoupon ? (
                      <div className="text-red-500">{errCoupon.data}</div>
                    ):(<></>)}
                  </div>
                  <div className="b">
                    <button
                      className="booking-btn font-mono text-base"
                      onClick={handleCheckCopon}
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-around mt-1">
                  <div className="mb-3 ml-2">
                  <div className="mb-3 ml-2">
                    Không có mã giảm giá nào.
                    </div>
                    </div>
                </div>
              )}
            </div>
            {/* điểm thưởng */}
            <form onSubmit={(e) => handleApplyPoint(e)}>
              <div className="mt-2">
                <p className="pl-3 pt-1 w-full h-[40px] text-xl font-medium bg-gray-200 ">
                  Điểm CGV
                  <span>(Có thể dùng thanh toán đến 50% giá trị đơn hàng)</span>
                </p>
                <div className="flex justify-around mt-1">
                  <div className="mb-2 ml-2">
                    <label className="form-label font-mono font-semibold">
                      Điểm của bạn:{" "}
                      <span className="text-red-500">
                        {userProfile.point && userProfile.point ? (
                          <strong>
                            {userProfile.point} <span>điểm</span>
                          </strong>
                        ) : (
                          <strong>
                            <span>0 </span><span>điểm</span>
                          </strong>
                        )}
                      </span>
                    </label>
                    <input
                      name="point"
                      type="number"
                      className="form-control"
                      placeholder="Nhập số điểm"
                    />
                    {errorPoint && errorPoint ? (
                      <p className="text-red-500">{errorPoint}</p>
                    ) : (
                      <></>
                    )}
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
            </form>
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
              <p className="w-[50%] justify-start">Thực phẩm:</p>
              <p className="w-[50%]">{totalMenu} VNĐ</p>
            </div>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-500 text-xl font-medium text-center ">
              <span>{total}</span> VNĐ
            </p>

            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-200 text-xl font-medium text-center mt-3 border-b-2 border-gray-500 ">
              Khuyến mãi
            </p>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-500 text-xl font-medium text-center">
              <span>{discount}</span> VNĐ
            </p>

            <p className="pl-3 pt-1 w-full h-[40px] bg-red-600 text-xl font-bold text-white text-center mt-3">
              Tổng Thanh Toán
            </p>
            <p className="pl-3 pt-1 w-full h-[40px] bg-gray-300 text-xl font-medium text-center ">
              <span>{subTotal}</span> VNĐ
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Payment;
