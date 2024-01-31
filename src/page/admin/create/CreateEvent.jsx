import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../../redux/api/service/promotionRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CreateEvent() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [eventName, setEventName] = useState(null);
  const [description, setDescription] = useState(null);
  const [salePrice, setSalesPrice] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errors, setErrors] = useState({});
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const validateForm = () => {
    const newErrors = {};

    if (!eventName) {
      newErrors.eventName = "Tên sự kiện không được để trống";
    }

    if (!startDate) {
      newErrors.startDate = "Ngày bắt đầu không được để trống";
    }

    if (!endDate) {
      newErrors.endDate = "Ngày kết thúc không được để trống";
    }

    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      newErrors.endDate = "Ngày kết thúc phải sau ngày bắt đầu";
    }

    if (!salePrice || salePrice === "Giảm giá") {
      newErrors.salePrice = "Vui lòng chọn mức giảm giá";
    }

    if (!description) {
      newErrors.description = "Thông tin giảm giá không được để trống";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const hendleCreateEvent = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const eventCreate = {
        eventName: eventName,
        description: description,
        salePrice: salePrice,
        startDate: startDate,
        endDate: endDate
      };
      createEvent(eventCreate, dispath, token, navigate, toast);
    }
  };


  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Sự kiện
        </h1>
        <form action="" onSubmit={hendleCreateEvent}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên sự kiện: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setEventName(e.target.value)}
              value={eventName}
              type="text"
              className="form-control"
              placeholder="Tên sự kiện"
            />
            {errors.eventName && (
              <span className="text-red-500">{errors.eventName}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thời gian hiệu lực:
            </label>
            <div className="flex gap-3">
              <div>
                <label className="form-label font-mono font-semibold">
                  Bắt đầu: <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  type="date"
                  className="form-control"
                  placeholder="Bắt đầu"
                />
                {errors.startDate && (
                  <span className="text-red-500">{errors.startDate}</span>
                )}
              </div>
              <div>
                <label className="form-label font-mono font-semibold">
                  Kết thúc: <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  type="date"
                  className="form-control"
                  placeholder="Kết thúc"
                />
                {errors.endDate && (<span className="text-red-500">{errors.endDate}</span>)}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giảm giá: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example"
              onChange={(e) => setSalesPrice(e.target.value)}
              value={salePrice}>
              <option selected>Giảm giá</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
            </select>
            {errors.salePrice && (
              <span className="text-red-500">{errors.salePrice}</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thông tin giảmg giá: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              className="form-control"
              placeholder="Thông tin giảm giá"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description}</span>
            )}
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

export default CreateEvent;
