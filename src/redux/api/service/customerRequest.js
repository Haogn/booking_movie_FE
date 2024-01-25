import axios from "axios";
import { changePasswordFailed, changePasswordStart, changePasswordSuccess, getProfileFailed, getProfileStart, getprofileSuccess } from "../../reducers/customerSlice";


export const profileUser = async (dispatch, token) => {
  dispatch(getProfileStart());
  try {
      const res = await axios.get("http://localhost:6789/api/booking/v1/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    dispatch(getprofileSuccess(res.data)); 
  } catch (error) {
    dispatch(getProfileFailed());
  }
};



export const changePassword = async(newPass,dispatch,token)=>{
  dispatch(changePasswordStart())
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/users/changePassword", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  dispatch(changePasswordSuccess(res.data));
} catch (error) {
  dispatch(changePasswordFailed());
}
}