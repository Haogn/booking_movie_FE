import axios from "axios";
import {
  getCustomeSuccess,
  getCustomeFailed,
  getEmployerSuccess,
  getEmployerFailed,
  getManagerSuccess,
  getManagerFailed,
  changeStatusSuccess,
  changeStatusFailed,
} from "../../reducers/userSlice";

export const getAllCustomer = async (dispatch, token, username, page) => {
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/users/customers",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          username: username,
          page: page,
        },
      }
    );
    console.log("Khách hàng: ");
    console.log(res.data);
    dispatch(getCustomeSuccess(res.data));
  } catch (error) {
    dispatch(getCustomeFailed());
  }
};
export const getAllEmployer = async (distpatch, token, search, page) => {
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/users/employer",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          username: search,
          page: page,
        },
      }
    );
    console.log("Nhân viên: ");
    console.log(res.data);
    distpatch(getEmployerSuccess(res.data.content));
  } catch (error) {
    distpatch(getEmployerFailed());
  }
};

export const getAllMananger = async (dispatch, token, search, page) => {
  try {
    console.log("lấy danh sách");
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/users/manager",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          params: {
            username: search,
            page: page,
          },
        },
      }
    );
    console.log("Quản lí: ");
    console.log(res.data);
    dispatch(getManagerSuccess(res.data.content));
  } catch (error) {
    dispatch(getManagerFailed());
  }
};

export const changeStatus = async (dispatch, token, id, toast) => {
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/users/changeStatus/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Trạng thái" + res.data);
    dispatch(changeStatusSuccess(res.data));
    toast("😎 Thay đổi mật khẩu thành công!", {
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
    dispatch(changeStatusFailed(error.response));
  }
};
