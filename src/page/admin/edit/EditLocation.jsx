import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editLocation,
  getLocation,
} from "../../../redux/api/service/locationRequest";
import { useNavigate, useParams } from "react-router-dom";
import { validateBlank } from "../../../components/validate/validation";

function EditLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const location = useSelector(
    (state) => state.locations.location.currentLocation
  );
  useEffect(() => {
    // getLocation(dispatch, token, location.id);
  }, [dispatch, token]);
  const [updateNameLocation, setUpdateNameLocation] = useState(
    location?.locationName
  );

  const [errorEdit, setErrorEdit] = useState(null);
  const handleUpdateLocation = (e) => {
    e.preventDefault();
    setErrorEdit("");
    if (validateBlank(updateNameLocation)) {
      setErrorEdit("Tên vị trí không được để trống.");
      return;
    }

    const formEditLocation = {
      locationName: e.target.locationName.value,
      isDelete: false,
    };

    editLocation(token, dispatch, location.id, formEditLocation, navigate);
  };

  return location ? (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin Vị trí
        </h1>
        <form action="" onSubmit={handleUpdateLocation}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã vị trí: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={location.id}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên vị trí: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={location.locationName}
              name="locationName"
            />
            {errorEdit && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorEdit}
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
  ) : (
    <></>
  );
}

export default EditLocation;
