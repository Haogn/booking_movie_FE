import axios from "axios";
import {
  createRoomFailed,
  createRoomStart,
  createRoomSuccess,
  deleteRoomFailed,
  deleteRoomStart,
  deleteRoomSuccess,
  editRoomFailed,
  editRoomStart,
  editRoomSuccess,
  getAllRoomByTheaterIdFailed,
  getAllRoomByTheaterIdStart,
  getAllRoomByTheaterIdSuccess,
  getAllRoomFailed,
  getAllRoomSelectFailed,
  getAllRoomSelectStart,
  getAllRoomSelectSuccess,
  getAllRoomStart,
  getAllRoomSuccess,
  getRoomFailed,
  getRoomStart,
  getRoomSuccess,
} from "../../reducers/roomSlice";

export const getRoom = async (dispatch, { token, id }) => {
  dispatch(getRoomStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/room/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getRoomSuccess(res.data));
  } catch (error) {
    dispatch(getRoomFailed(error.response));
  }
};

export const getAllRoom = async (dispatch, token, search, page) => {
  dispatch(getAllRoomStart());
  try {
    const res = await axios.get("http://localhost:6789/api/booking/v1/room", {
      headers: {
        Authorization: `Bearer ${token}`,
        params: {
          search: search,
          page: page,
        },
      },
    });
    // console.log(res.data);
    dispatch(getAllRoomSuccess(res.data));
  } catch (error) {
    dispatch(getAllRoomFailed(error.response));
  }
};

export const getAllRoomSelect = async (dispatch, token) => {
  dispatch(getAllRoomSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/room/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllRoomSelectSuccess(res.data));
  } catch (error) {
    dispatch(getAllRoomSelectFailed(error.response));
  }
};

export const getAllRoomByTheaterId = async (dispatch, token, id) => {
  dispatch(getAllRoomByTheaterIdStart());
  console.log("ID: " + id);
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/room/byIdTheater/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(getAllRoomByTheaterIdSuccess(res.data));
  } catch (error) {
    dispatch(getAllRoomByTheaterIdFailed(error.response));
  }
};

export const createRoom = async (
  token,
  formRoom,
  dispatch,
  navigate,
  toast
) => {
  dispatch(createRoomStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/room",
      formRoom,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createRoomSuccess(res.data));
    toast("😎 Thêm mới rạp chiếu nhập thành công!", {
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
      navigate("/admin/list-room");
    }, 3000);
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createRoomFailed(error.response));
  }
};

export const editRoom = async (
  token,
  dispatch,
  id,
  formEditRoom,
  navigate,
  toast
) => {
  dispatch(editRoomStart());
  try {
    const res = await axios.patch(
      `http://localhost:6789/api/booking/v1/room/update/${id}`,
      formEditRoom,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editRoomSuccess(res.data));
    toast("😎 Thay đổi thông tin rạp chiếu nhập thành công!", {
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
      navigate("/admin/list-room");
    }, 3000);
  } catch (error) {
    dispatch(editRoomFailed(error.response));
  }
};

export const deleteRoom = async (token, dispatch, id, toast) => {
  dispatch(deleteRoomStart());
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/room/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteRoomSuccess(res.data));
    toast("😎 Xoá rạp chiếu nhập thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    dispatch(deleteRoomFailed(error.response));
  }
};
