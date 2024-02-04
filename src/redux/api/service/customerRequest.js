import axios from "axios";
import { changePasswordFailed, changePasswordSuccess, 
  getProfileFailed, getprofileSuccess,
   updateProfileFailed, updateProfileSuccess ,
   changeAvatarSuccess,changeAvatarFailed, 
   spenlingByYearSuccess, spenlingByYearFailed,
    getNotificationsSuccess, getNotificationFailed, 
    readNotification} from "../../reducers/customerSlice";


export const profileUser = async (dispatch, token) => {
  try {
      const res = await axios.get("http://localhost:6789/api/booking/v1/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(res.data);
    dispatch(getprofileSuccess(res.data)); 
  } catch (error) {
    dispatch(getProfileFailed());
  }
};



export const changePassword = async(newPass,dispatch,navigate,token,toast)=>{
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/users/changePassword", newPass,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  dispatch(changePasswordSuccess(res.data));
  toast("😎 Dổi mật khẩu thành công! 🤞🏻", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  navigate("/profile");
} catch (error) {
  dispatch(changePasswordFailed(error.response));
}
}

export const changeAvatar = async (dispatch, token, avatarForm,toast) => {
  try {
    const res = await axios.post("http://localhost:6789/api/booking/v1/users/changeAvatar", avatarForm, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data' 
      }
    });
    dispatch(changeAvatarSuccess(res.data));
    toast("😎 Cập nhật thành công! 🤞🏻", {
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
    dispatch(changeAvatarFailed(error.response));
  }
};

export const updateProfile = async(dispatch,token,updateForm,toast)=>{
  try {
    const res = await axios.patch("http://localhost:6789/api/booking/v1/users/updateProfile", updateForm,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  dispatch(updateProfileSuccess(res.data));
  toast("😎 Cập nhật thành công! 🤞🏻", {
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
  dispatch(updateProfileFailed(error.response));
}
}

export const spenlingByYear = async(dispatch,token,year)=>{
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/orders/spending",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          year: year,
        },
      }
    );
  dispatch(spenlingByYearSuccess(res.data));

} catch (error) {
  dispatch(spenlingByYearFailed(error.response));
}
}

export const getNotifications = async(dispatch,token)=>{
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/notifications",
      {
        headers: { Authorization: `Bearer ${token}` },  
      }
    );
  dispatch(getNotificationsSuccess(res.data));

} catch (error) {
  dispatch(getNotificationFailed(error.response));
}
}


export const readNotifications = async (dispatch,id) => {
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/notifications/${id}`);
      console.log(res.data);
    dispatch(readNotification()); 
  } catch (err) {
    console.log(err);
  }
};
