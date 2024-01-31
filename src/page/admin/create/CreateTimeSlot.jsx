import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";
import {
  getAllRoom,
  getAllRoomByTheaterId,
  getAllRoomSelect,
} from "../../../redux/api/service/roomRequest";
import moment from "moment";
import {
  validateBlank,
  validateNumber,
} from "./../../../components/validate/validation";
import { createTime } from "../../../redux/api/service/timeRequest";

function CreateTimeSlot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listTheater = useSelector(
    (state) => state.theaters.theater.listTheaterSelect
  );
  // const listRoom = useSelector((state) => state.rooms.room.listRoomSelect);
  const listRoomByIdTheater = useSelector(
    (state) => state.rooms.room.listRoomByTheaterId
  );
  const error = useSelector((state) => state.times.time.error);

  useEffect(() => {
    getAllTheaterSelect(dispatch, token);
    getAllRoomSelect(dispatch, token);
    // getAllRoomByTheaterId(dispatch, token, id);
  }, [dispatch, token]);

  // console.log("listTheater", listTheater);
  // console.log("listRoom", listRoom);
  // console.log("listRoomByIdTheater", listRoomByIdTheater);

  const [idMovie, setIdMovie] = useState();
  const [idRoom, setIdRoom] = useState();
  const [idTheater, setIdTheater] = useState();
  const [startTime, setStartTime] = useState();
  const [dateMovie, setDateMovie] = useState();

  const [errorIdMovie, setErrorIdMovie] = useState();
  const [errorIdRoom, setErrorIdRoom] = useState();
  const [errorIdTheater, setErrorIdTheater] = useState();
  const [errorTime, setErrorTime] = useState();
  const [errorDateMovie, setErrorDateMovie] = useState();

  const onChangeStartTime = (e) => {
    const inputTime = e.target.value;
    // Chuyển đổi giá trị sang định dạng chuỗi 'HH:mm'
    const formattedTime = moment(inputTime, "HH:mm").format("HH:mm");
    setStartTime(formattedTime);
  };
  // console.log("startTime", startTime);

  // lay idTheater va lay ra danh sach rap tai theater do
  const onChangeTheaterAndFindAllRoom = (e) => {
    setIdTheater(Number(e.target.value));
    getAllRoomByTheaterId(dispatch, token, Number(e.target.value));
  };

  const handleCreateTime = (e) => {
    e.preventDefault();
    if (validateNumber(idMovie)) {
      setErrorIdMovie("Mã phim không được để trống");
      return;
    }
    if (validateNumber(idTheater)) {
      setErrorIdTheater("Mã rạp chiếu không được để trống");
      return;
    }

    if (validateNumber(idRoom)) {
      setErrorIdRoom("Mã phòng chiếu không được để trống");
      return;
    }

    if (validateBlank(startTime)) {
      setErrorTime("Thời gian chiếu không được để trống");
      return;
    }
    if (validateBlank(dateMovie)) {
      setErrorDateMovie("Ngày khởi chiếu không được để trống");
      return;
    }

    const formTime = {
      movieId: idMovie,
      roomId: idRoom,
      theaterId: idTheater,
      startTime: startTime,
      showDateMovie: dateMovie,
      isDeleted: false,
    };
    createTime(token, formTime, dispatch, navigate);
    setIdMovie("");
    setIdRoom("");
    setIdTheater("");
    setStartTime("");
  };
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới xuất chiếu
        </h1>
        <form action="" onSubmit={handleCreateTime}>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Phim: <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Mã phim"
              value={idMovie}
              onChange={(e) => setIdMovie(Number(e.target.value))}
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
              value={idTheater}
              onChange={(e) => onChangeTheaterAndFindAllRoom(e)}
            >
              <option selected>Rạp chiếu</option>
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
              value={idRoom}
              onChange={(e) => setIdRoom(Number(e.target.value))}
            >
              <option selected>Phòng chiếu</option>
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
              Ngày chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              class="form-control"
              value={dateMovie}
              onChange={(e) => setDateMovie(e.target.value)}
            />
            {errorDateMovie && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorDateMovie}
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
              value={startTime}
              onChange={(e) => onChangeStartTime(e)}
            />
            {errorTime && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorTime}
              </span>
            )}
          </div>
          {error ? (
            <p className="text-red-500 font-mono font-medium text-center">
              {error.data}
            </p>
          ) : (
            <></>
          )}
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

export default CreateTimeSlot;
