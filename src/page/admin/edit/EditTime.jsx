import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllRoomByTheaterId } from "../../../redux/api/service/roomRequest";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";
import { editTime } from "../../../redux/api/service/timeRequest";
import moment from "moment";

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
  const listRoomByIdTheater = useSelector(
    (state) => state.rooms.room.listRoomByTheaterId
  );
  useEffect(() => {
    getAllTheaterSelect(dispatch, token);
    getAllRoomByTheaterId(dispatch, token, timeSlot.theaterId);
  }, [dispatch, token]);
  console.log("timeSlot", timeSlot);
  console.log("listRoomByIdTheater", listRoomByIdTheater);

  const [errorIdTheater, setErrorIdTheater] = useState();
  const [errorIdRoom, setErrorIdRoom] = useState();
  const [errorTime, setErrorTime] = useState();
  const [errorDateMovie, setErrorDateMovie] = useState();
  const [errorIdMovie, setErrorIdMovie] = useState();

  const [startTime, setStartTime] = useState();

  const onChangeStartTime = (e) => {
    const inputTime = e.target.value;
    // Chuyển đổi giá trị sang định dạng chuỗi 'HH:mm'
    const formattedTime = moment(inputTime, "HH:mm").format("HH:mm");
    setStartTime(formattedTime);
  };

  const handleEditTimSlot = (e) => {
    e.preventDefault();
    if (validateNumber(e.target.movieId.value)) {
      setErrorIdMovie("Mã phim không được để trống");
      return;
    }
    if (validateNumber(e.target.roomId.value)) {
      setErrorIdRoom("Mã phòng chiếu không được để trống");
      return;
    }
    if (validateBlank(e.target.startTime.value)) {
      setErrorTime("Thời gian chiếu không được để trống");
      return;
    }
    if (validateBlank(e.target.showDateMovie.value)) {
      setErrorDateMovie("Ngày khởi chiếu không được để trống");
      return;
    }
    if (validateBlank(e.target.theaterId.value)) {
      setErrorIdTheater("Mã rạp chiếu không được để trống");
      return;
    }

    const formEditTime = {
      movieId: Number(e.target.movieId.value),
      roomId: Number(e.target.roomId.value),
      theaterId: Number(e.target.theaterId.value),
      startTime: startTime,
      showDateMovie: e.target.showDateMovie.value,
      isDeleted: false,
    };
    editTime(token, dispatch, timeSlot.id, formEditTime, navigate, toast);
  };

  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin xuất chiếu
        </h1>
        <form action="" onSubmit={handleEditTimSlot}>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Mã xuất chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={timeSlot?.id}
              readOnly={true}
            />
          </div>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Mã phim: <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="movieId"
              defaultValue={timeSlot?.movieId}
            />
            {errorIdMovie && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorIdMovie}
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={timeSlot?.theaterId}
              name="theaterId"
              // onChange={(e) => onChangeTheaterAndFindAllRoom(e)}
            >
              <option disabled>Rạp chiếu</option>
              {listTheater?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.theaterName}
                </option>
              ))}
            </select>
            {errorIdTheater && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorIdTheater}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="roomId"
              defaultValue={timeSlot?.roomId}
            >
              <option disabled>Phòng chiếu</option>
              {listRoomByIdTheater?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.roomName}
                </option>
              ))}
            </select>
            {errorIdRoom && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorIdRoom}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Thời gian bắt đầu: <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              class="form-control"
              name="startTime"
              defaultValue={timeSlot?.startTime}
              onChange={(e) => onChangeStartTime(e)}
            />
            {errorTime && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorTime}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Ngày chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              class="form-control"
              name="showDateMovie"
              value={timeSlot?.showDateMovie}
            />
            {errorDateMovie && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorDateMovie}
              </span>
            )}
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
