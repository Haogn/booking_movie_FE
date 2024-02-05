import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { createCoupon } from "../../../redux/api/service/couponRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCoupons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const listIds = id.split(',').map((item) => ({ id: Number(item) }));
  console.log(listIds);
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const err = useSelector((state) => state.coupons.coupon.error);
  const [effectDate, setEffectDate] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [effectDateErr, setEffectDateErr] = useState(null);
  const [salePriceErr, setSalePriceErr] = useState(null);
  const [descriptionErr, setDescriptionErr] = useState(null);
  const handleCreateCoupon = (e) => {
    e.preventDefault();
    setEffectDateErr(null);
    setSalePriceErr(null);
    setDescriptionErr(null);
    let isValid = true;
    if (!effectDate) {
      setEffectDate("Không được để  trống!");
      isValid = false;
    } else {
      const selectedDate = new Date(effectDate);
      if (selectedDate <= effectDate) {
        setEffectDate("Ngày phải lớn hơn hoặc bằng ngày hiện tại!");
        isValid = false;
      }
    }

    if (!salePrice) {
      setSalePriceErr("Không được để  trống!");
      isValid = false;
    }

    if (!description) {
      setDescriptionErr("Không được để  trống!");
      isValid = false;
    }
    const coupon = {
      effectDate: effectDate,
      salePrice: Number(salePrice),
      description: description,
      listUserId: listIds
    }
    createCoupon(coupon, dispatch, token, navigate, toast)
  }
  return (
    <div>
      <ToastContainer className="custom-toast-container" />
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Phiếu giảm giá
        </h1>
        <form action="" onSubmit={handleCreateCoupon}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Hiệu lực: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => { setEffectDate(e.target.value); setEffectDateErr(null) }}
              value={effectDate}
              type="date"
              className="form-control" />
            {effectDateErr && <span className="text-red-500">{effectDateErr}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giảm giá: <span className="text-red-500">*</span>
            </label>
            <input
              value={salePrice}
              onChange={(e) => { setSalePrice(e.target.value); setSalePriceErr(null) }}
              type="number"
              className="form-control"
              placeholder="%"
            />
            {salePriceErr && <span className="text-red-500">{salePriceErr}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thông tin giảmg giá: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => { setDescription(e.target.value); setDescriptionErr(null) }}
              value={description}
              type="text"
              className="form-control"
              placeholder="Thông tin giảm giá"
            />
            {descriptionErr && <span className="text-red-500">{descriptionErr}</span>}
          </div>
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCoupons;
