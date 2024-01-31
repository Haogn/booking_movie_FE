import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";

function EditTime() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const timeSlot = useSelector((state) => state.times.time.currentTime);
  const listTheater = useSelector(
    (state) => state.theaters.theater.listTheaterSelect
  );
  useEffect(() => {
    getAllTheaterSelect(dispatch, token);
  }, [dispatch, token]);
  console.log("timeSlot", timeSlot);
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin xuất chiếu
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã xuất chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={1}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Phim: <span className="text-red-500">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Mã phim" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Phòng chiếu</option>
              <option value="1">Cinema 01</option>
              <option value="2">Cinema 02</option>
              <option value="3">Cinema 03</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thời gian bắt đầu: <span className="text-red-500">*</span>
            </label>
            <input type="time" class="form-control" />
          </div>

          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTime;