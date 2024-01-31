import axios from "axios";
import {
  changePasswordFailed,
  changePasswordSuccess,
  getProfileFailed,
  getprofileSuccess,
  updateProfileFailed,
  updateProfileSuccess,
  changeAvatarSuccess,
  changeAvatarFailed,
} from "../../reducers/customerSlice";

export const profileUser = async (dispatch, token) => {
  console.log("lấy user");
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(getprofileSuccess(res.data));
  } catch (error) {
    dispatch(getProfileFailed());
  }
};

export const changePassword = async (newPass, dispatch, navigate, token) => {
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/users/changePassword",
      newPass,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(changePasswordSuccess(res.data));
    navigate("/profile");
  } catch (error) {
    dispatch(changePasswordFailed(error.response));
  }
};

export const changeAvatar = async (dispatch, token, avatarForm) => {
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/users/changeAvatar",
      avatarForm,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(changeAvatarSuccess(res.data));
  } catch (error) {
    dispatch(changeAvatarFailed(error.response));
  }
};

export const updateProfile = async (dispatch, token, updateForm) => {
  try {
    const res = await axios.patch(
      "http://localhost:6789/api/booking/v1/users/updateProfile",
      updateForm,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(updateProfileSuccess(res.data));
  } catch (error) {
    dispatch(updateProfileFailed(error.response));
  }
};
