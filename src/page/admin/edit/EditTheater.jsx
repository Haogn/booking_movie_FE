import React, { useEffect, useState } from "react";
import {
  editTheater,
  getTheater,
} from "../../../redux/api/service/theaterRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";
import { getALlLocationSeclect } from "./../../../redux/api/service/locationRequest";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditTheater() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const theater = useSelector((state) => state.theaters.theater.currentTheater);
  const listLocation = useSelector(
    (state) => state.locations.location.listLocationSelect
  );
  const error = useSelector((state) => state.theaters.theater.error);
  useEffect(() => {
    getALlLocationSeclect(dispatch, token);
  }, [dispatch, token]);
  // console.log("listLocation", listLocation);
  console.log("theater", theater);

  const [idLocation, setIdLocation] = useState();
  const [errorEdit, setErrorEdit] = useState(null);
  const [errorIdLocation, setErrorIdLocation] = useState("");

  const handleUpdateTheater = (e) => {
    e.preventDefault();
    setErrorEdit("");
    if (validateBlank(e.target.theaterName.value)) {
      setErrorEdit("Tên vị trí không được để trống.");
      return;
    }
    if (validateNumber(idLocation)) {
      setErrorIdLocation("Vị trí không hợp lệ.");
      return;
    }

    const formEditTheater = {
      theaterName: e.target.theaterName.value,
      locationId: e.target.locationId.value,
      isDeleted: false,
    };

    editTheater(token, dispatch, theater.id, formEditTheater, navigate, toast);
  };
  return theater ? (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin rạp chiếu phim
        </h1>
        <form action="" onSubmit={handleUpdateTheater}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="id"
              className="form-control"
              value={theater?.id}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên rạp chiếu"
              defaultValue={theater?.theaterName}
              name="theaterName"
            />
            {errorEdit && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorEdit}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Vị trí: <span className="text-red-500">*</span>
            </label>
            <select
              name="locationId"
              className="form-select"
              aria-label="Default select example"
              value={idLocation}
              onChange={(e) => setIdLocation(Number(e.target.value))}
            >
              <option disabled>Lựa chọn Vị trí</option>
              {listLocation?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.locationName}
                </option>
              ))}
            </select>
            {errorIdLocation && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorIdLocation}
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
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default EditTheater;
