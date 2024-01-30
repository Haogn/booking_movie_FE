import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess,registerSuccess,registerFailed, getMaillingSuccess, getMaillingFailed, retrievalSuccess, retrievalFailed} from "../../reducers/authSlice";

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

export const registerAccount = async(dispatch,navigate,registerForm)=>{
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/auth/register", registerForm);
    console.log(res.data);
  dispatch(registerSuccess(res.data));
  navigate("/login")
} catch (error) {
  console.log(error.response);
  dispatch(registerFailed(error.response));
}
}

export const logout = (dispatch, navigate) => {
  dispatch(logoutStart());


  localStorage.removeItem('username');
  localStorage.removeItem('acessToken');
  localStorage.removeItem('role');

  dispatch(logoutSuccess());

  navigate("/");
};
  

  export const getMailling = async(dispatch,formData)=>{
    try{
      const res = await axios.post("http://localhost:6789/api/booking/v1/auth/getLink",formData)
      dispatch(getMaillingSuccess(res.data))
    }catch(error){
      dispatch(getMaillingFailed(error.response));
    }
  }

  export const retrievalPassword = async (dispatch, newPassForm, email) => {
    console.log(newPassForm);
    try {
      const res = await axios.put(`http://localhost:6789/api/booking/v1/users/retrieval?email=${encodeURIComponent(email)}`, newPassForm);
      dispatch(retrievalSuccess(res.data));
    } catch (error) {
      dispatch(retrievalFailed(error.response));
    }
  };
  
  