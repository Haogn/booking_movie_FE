import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "../../reducers/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    const expirationTime = new Date(new Date().getTime() + 20 * 60 * 1000);
    localStorage.setItem('username', JSON.stringify(res.data.username), expirationTime);
    localStorage.setItem('acessToken', JSON.stringify(res.data.token), expirationTime);
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

export const registerUser = async(user,dispath,navigate)=>{
    dispath(registerStart())
    try{
        const res = await axios.post("http://localhost:6789/api/booking/v1/auth/register",user)
        dispath(registerSuccess(res.data))
        navigate("/login")
    }catch(error){
      console.error("Đăng ký thất bại:", error);
      dispath(registerFailed());
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
  