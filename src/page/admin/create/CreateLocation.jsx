import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLocation } from "../../../redux/api/service/locationRequest";
import { validateBlank } from "../../../components/validate/validation";

function CreateLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nameLocation, setNameLocation] = useState("");
  const [errorNameLocation, setErrorNameLocation] = useState(null);
  const error = useSelector((state) => state.locations.location.error);

  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const handleCreateLocation = (e) => {
    e.preventDefault();
    setErrorNameLocation(null);
    if (validateBlank(nameLocation)) {
      setErrorNameLocation("Tên vị trí không được để trống.");
      return;
    }
    const formLocation = {
      locationName: nameLocation,
      isDelete: false,
    };
    createLocation(token, formLocation, dispatch, navigate);
    setNameLocation("");
  };

  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Vị trí
        </h1>
        <form action="post" onSubmit={handleCreateLocation}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên vị trí: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên vị trí"
              value={nameLocation}
              onChange={(e) => setNameLocation(e.target.value)}
            />
            {errorNameLocation && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorNameLocation}
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
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateLocation;
