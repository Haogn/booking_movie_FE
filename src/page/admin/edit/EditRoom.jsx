import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editRoom,
  getAllRoomSelect,
  getRoom,
} from "../../../redux/api/service/roomRequest";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";

function EditRoom() {
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
  const room = useSelector((state) => state.rooms.room.currentRoom);
  useEffect(() => {
    // getRoom(dispatch, token, room.id);
    // getAllRoomSelect(dispatch, token);
  }, [dispatch, token]);

  // console.log("listTheater", listTheater);
  // console.log("room", room);
  const name = room?.roomName;
  const typeRoom = room?.roomType;

  const [updateNameRoom, setUpdateNameRoom] = useState(name);
  const [idTheater, setIdTheater] = useState();
  const [type, setType] = useState(typeRoom);

  const [errorNameRoom, setErrorNameRoom] = useState("");
  const [errorIdTheater, setErrorIdTheater] = useState("");
  const [errorType, setErrorType] = useState("");

  const handleUpdateRoom = (e) => {
    e.preventDefault();
    setErrorNameRoom("");
    setErrorIdTheater("");
    setErrorType("");
    if (validateBlank(updateNameRoom)) {
      setErrorNameRoom("Tên phòng không được để trống.");
      return;
    }
    if (validateNumber(idTheater)) {
      setErrorIdTheater("Phòng không hợp lệ.");
      return;
    }
    if (validateBlank(type)) {
      setErrorType("Loại phòng không được để trống.");
      return;
    }

    const formEditRoom = {
      roomName: updateNameRoom,
      roomType: type,
      theaterId: idTheater,
      isDeleted: false,
    };
    editRoom(token, dispatch, room?.id, formEditRoom, navigate);
  };

  return room ? (
    <div>
      <div className="w-[50%] h-full mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin phòng chiếu
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={room?.id}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên phòng chiếu"
              value={updateNameRoom}
              onChange={(e) => setUpdateNameRoom(e.target.value)}
            />
            {errorNameRoom && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorNameRoom}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Type phòng chiêu: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={type}
              onChange={(e) => setType(Number(e.target.value))}
            >
              <option selected>Type</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="4D">4D</option>
            </select>
          </div>

          <div className="mb-3">
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
            <span className="text-red-500 font-mono font-medium text-center">
              {error.data}
            </span>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default EditRoom;
