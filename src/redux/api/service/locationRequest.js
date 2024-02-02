import axios from "axios";
import {
  createLocationFailed,
  createLocationStart,
  createLocationSuccess,
  deleteLocationFailed,
  deleteLocationStart,
  deleteLocationSuccess,
  editLocationFailed,
  editLocationStart,
  editLocationSuccess,
  getAllLocationFailed,
  getAllLocationSelectFailed,
  getAllLocationSelectStart,
  getAllLocationSelectSuccess,
  getAllLocationStart,
  getAllLocationSuccess,
  getLocationFailed,
  getLocationStart,
  getLocationSuccess,
} from "../../reducers/locationSlice";

export const getLocation = async (dispatch, token, id) => {
  dispatch(getLocationStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/location/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getLocationSuccess(res.data));
  } catch (error) {
    dispatch(getLocationFailed(error.response));
  }
};

export const getALlLocation = async (dispatch, token, search, page) => {
  dispatch(getAllLocationStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/location`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          params: {
            search: search,
            page: page,
          },
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllLocationSuccess(res.data));
  } catch (error) {
    dispatch(getAllLocationFailed(error.response));
  }
};

export const getALlLocationSeclect = async (dispatch, token) => {
  dispatch(getAllLocationSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/location/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllLocationSelectSuccess(res.data));
  } catch (error) {
    dispatch(getAllLocationSelectFailed(error.response));
  }
};

export const createLocation = async (
  token,
  formLocation,
  dispatch,
  navigate,
  toast
) => {
  dispatch(createLocationStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/location",
      formLocation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createLocationSuccess(res.data));
    toast("😎 Thêm mới vị trí nhập thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-location");
    }, 3000);
  } catch (error) {
    console.log("Tao moi that bai", error);
    dispatch(createLocationFailed(error.response));
  }
};

export const editLocation = async (
  token,
  dispatch,
  id,
  formEditLocation,
  navigate,
  toast
) => {
  dispatch(editLocationStart());
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/location/${id}`,
      formEditLocation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editLocationSuccess(res.data));
    toast("😎 Thay đổi thông tin vị trí nhập thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-location");
    }, 3000);
  } catch (error) {
    dispatch(editLocationFailed(error.response));
  }
};

export const deleteLocation = async (token, dispatch, id, toast) => {
  dispatch(deleteLocationStart());
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/location/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteLocationSuccess(res.data));
    toast("😎 Xoá vị trí nhập thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // setTimeout(() => {
    //   navigate("/admin/list-location");
    // }, 3000);
  } catch (error) {
    dispatch(deleteLocationFailed(error.response));
  }
};
