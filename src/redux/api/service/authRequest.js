import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
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

export const logout = (dispatch, navigate, toast) => {
  dispatch(logoutStart());
  try {
    localStorage.removeItem("username");
    localStorage.removeItem("acessToken");
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
      navigate("/");
    }, 3000);
  } catch (error) {
    dispatch(loginFailed(error.response));
  }
};
