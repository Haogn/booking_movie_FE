import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getALlLocationSeclect } from "./../../../redux/api/service/locationRequest";
import { createTheater } from "../../../redux/api/service/theaterRequest";
import { validateBlank } from "../../../components/validate/validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateTheater() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listLocation = useSelector(
    (state) => state.locations.location.listLocationSelect
  );
  const error = useSelector((state) => state.theaters.theater.error);
  console.log(error);

  const [nameTheater, setNameTheater] = useState("");
  const [idLocation, setIdLocation] = useState("");
  const [errorNameTheater, setErrorNameTheater] = useState("");
  const [errorIdLocation, setErrorIdLocation] = useState("");

  useEffect(() => {
    getALlLocationSeclect(dispatch, token);
  }, [dispatch, token]);

  const handleCreaterTheater = (e) => {
    e.preventDefault();
    if (validateBlank(nameTheater)) {
      setErrorNameTheater("Tên rạp chiếu không được để trống.");
      return;
    }
    if (validateBlank(idLocation)) {
      setErrorIdLocation("Vị trí rạp chiếu không được để trống.");
      return;
    }
    const formTheater = {
      theaterName: nameTheater,
      locationId: idLocation,
      isDeleted: false,
    };
    createTheater(token, formTheater, dispatch, navigate, toast);
    setNameTheater("");
    setIdLocation(""); // Reset the idLocation after form submission
  };

  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Rạp chiếu phim
        </h1>
        <form action="" onSubmit={handleCreaterTheater}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên rạp chiếu"
              value={nameTheater}
              onChange={(e) => setNameTheater(e.target.value)}
            />
            {errorNameTheater && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorNameTheater}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Vị trí: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={idLocation}
              onChange={(e) => setIdLocation(e.target.value)}
            >
              <option selected>Lựa chọn Vị trí</option>
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
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTheater;
