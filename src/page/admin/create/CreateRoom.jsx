import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTheaterSelect } from "./../../../redux/api/service/theaterRequest";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";
import { createRoom } from "../../../redux/api/service/roomRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateRoom() {
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
  const error = useSelector((state) => state.rooms.room.error);

  useEffect(() => {
    getAllTheaterSelect(dispatch, token);
  }, [dispatch, token]);
  // console.log("listTheater", listTheater);

  const [nameRoom, setNameRoom] = useState("");
  const [numberRow, setNumBerRow] = useState();
  const [numberColumn, setNumBerColumn] = useState();
  const [type, setType] = useState("");
  const [idTheater, setIdTheater] = useState();

  const [errorNameRoom, setErrorName] = useState("");
  const [errorRow, setErrorRow] = useState("");
  const [errorColumn, setErrorColumn] = useState("");
  const [errorType, setErrorType] = useState("");
  const [errorIdTheater, setErrorIdTheater] = useState("");

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (validateBlank(nameRoom)) {
      setErrorName("Tên phòng chiếu không được để trống.");
      return;
    }

    if (validateBlank(type)) {
      setErrorType("Loại phòng chiếu không được để trống.");
      return;
    }

    if (validateNumber(numberColumn)) {
      setErrorColumn("Số cột phòng chiếu thể âm");
      return;
    }

    if (validateNumber(numberRow)) {
      setErrorRow("Số hàng phòng chiếu không thể âm");
      return;
    }

    if (validateNumber(idTheater)) {
      setErrorIdTheater("Vị trí phòng chiếu không thể âm");
      return;
    }

    const formRoom = {
      roomName: nameRoom,
      numberOfSeatsInARow: numberRow,
      numberOfSeatsInAColumn: numberColumn,
      roomType: type,
      theaterId: idTheater,
      isDeleted: false,
    };
    createRoom(token, formRoom, dispatch, navigate, toast);
    setNameRoom("");
    setNumBerColumn("");
    setNumBerRow("");
    setType("");
    setIdTheater("");
  };

  // console.log("numberColumn", numberColumn);
  // console.log("numberRow", numberRow);
  // console.log("idTheater", idTheater);
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Phòng chiếu
        </h1>
        <form action="" onSubmit={handleCreateRoom}>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Tên phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên phòng chiếu"
              value={nameRoom}
              onChange={(e) => setNameRoom(e.target.value)}
            />
            {errorNameRoom && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorNameRoom}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Số ghế hàng dọc: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={numberRow}
              onChange={(e) => setNumBerRow(Number(e.target.value))}
            >
              <option selected>Số ghế hàng dọc</option>
              <option value="2">2</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {errorRow && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorRow}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Số ghế hàng ngang: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={numberColumn}
              onChange={(e) => setNumBerColumn(Number(e.target.value))}
            >
              <option selected>Số ghế hàng ngang</option>
              <option value="2">2</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {errorColumn && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorColumn}
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="form-label font-mono font-semibold">
              Type phòng chiêu: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option selected>Type</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="4D">4D</option>
            </select>
            {errorType && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorType}
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
              onChange={(e) => setIdTheater(Number(e.target.value))}
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
          {error ? (
            <p className="text-red-500 font-mono font-medium text-center mb-2">
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

export default CreateRoom;
