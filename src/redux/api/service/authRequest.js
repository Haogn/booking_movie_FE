import axios from "axios";

import {
  loginStart,
  loginSuccess,
  loginFailed,
  resetError,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  getMaillingFailed,
  getMaillingSuccess,
  retrievalFailed,
  retrievalSuccess,
} from "../../reducers/authSlice";

export const loginUser = async (user, dispatch, navigate, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
    toast("😎 Bạn đã đăng nhập thành công! 🤞🏻", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const expirationTime = new Date(new Date().getTime() + 20 * 60 * 1000);
    localStorage.setItem(
      "username",
      JSON.stringify(res.data.username),
      expirationTime
    );
    localStorage.setItem(
      "acessToken",
      JSON.stringify(res.data.token),
      expirationTime
    );
    setTimeout(() => {
      if (res.data.setRoles.includes("CUSTOMER")) {
        navigate("/");
      }
      if (res.data.setRoles.includes("ADMIN")) {
        navigate("/admin");
      }
    }, 3000);
    localStorage.setItem("username", JSON.stringify(res.data.username));
    localStorage.setItem("acessToken", JSON.stringify(res.data.token));
    localStorage.setItem(
      "role",
      JSON.stringify(res.data.setRoles.includes("ADMIN") ? "ADMIN" : "CUSTOMER")
    );
    if (res.data.setRoles.includes("CUSTOMER")) {
      navigate("/");
    }
    if (res.data.setRoles.includes("ADMIN")) {
      navigate("/admin");
    }
  } catch (error) {
    console.log(error.response);
    dispatch(loginFailed(error.response));
  }
};

export const registerUser = async (user, dispath, navigate, toast) => {
  dispath(registerStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/auth/register",
      user
    );
    dispath(registerSuccess(res.data));
    toast("😎 Bạn đã đăng ký tài khoản thành công! 🤞🏻", {
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
      navigate("/login");
    }, 3000);
  } catch (error) {
    console.error("Đăng ký thất bại:", error);
    dispath(registerFailed(error.response));
  }
};

export const registerAccount = async (dispatch, navigate, registerForm) => {
  console.log(registerForm);
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/auth/register",
      registerForm
    );

    dispatch(registerSuccess(res.data));
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const logout = (dispatch, navigate, toast) => {
  // Gọi hành động bắt đầu đăng xuất
  dispatch(logoutStart());

  // Xóa thông tin người dùng khỏi localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("accessToken"); // Chú ý kiểm tra lại tên key này
  localStorage.removeItem("role");

  // Gọi hành động thành công đăng xuất
  dispatch(logoutSuccess());
  toast("😎 Đăng xuất", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  console.log("chuyển hướng");
  setTimeout(() => {
    // Chuyển hướng người dùng về trang chủ
    navigate("/");
  }, 3000);
};

export const getMailling = async (dispatch, formData) => {
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/auth/getLink",
      formData
    );
    dispatch(getMaillingSuccess(res.data));
  } catch (error) {
    dispatch(getMaillingFailed(error.response));
  }
};

export const retrievalPassword = async (dispatch, newPassForm, email) => {
  console.log(newPassForm);
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/users/retrieval?email=${encodeURIComponent(
        email
      )}`,
      newPassForm
    );
    dispatch(retrievalSuccess(res.data));
  } catch (error) {
    dispatch(retrievalFailed(error.response));
  }
};
