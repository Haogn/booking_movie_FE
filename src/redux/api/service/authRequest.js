import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "../../reducers/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem('username', JSON.stringify(res.data.username));
    localStorage.setItem('acessToken', JSON.stringify(res.data.token));
    localStorage.setItem('role', JSON.stringify(res.data.setRoles.includes("ADMIN") ? "ADMIN" : "CUSTOMER"));
 if(res.data.setRoles.includes("CUSTOMER")){
  navigate("/");
 }
  if(res.data.setRoles.includes("ADMIN")){
    navigate("/admin");
  }  
  } catch (error) {
    dispatch(loginFailed(error.response));
  }
};  

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
      const res = await axios.post("http://localhost:6789/api/booking/v1/auth/register", user);
      dispatch(registerSuccess(res.data));
      navigate("/login");
  } catch (error) {
      if (error.response) {
          dispatch(registerFailed(error.response));
      } else {
          console.error("An error occurred:", error);
      }
  }
};

export const logout = (dispatch, navigate) => {
    dispatch(logoutStart());
    try {
      localStorage.removeItem('username');
      localStorage.removeItem('acessToken');
      dispatch(logoutSuccess());
      console.log("chuyển hướng");
      navigate("/");
    } catch (error) {
      dispatch(loginFailed());
    }
  };
  