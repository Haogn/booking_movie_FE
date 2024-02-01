import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAvatar,
  profileUser,
  updateProfile,
} from "../../redux/api/service/customerRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const storedToken = localStorage.getItem("acessToken");
  const [avatarPreview, setAvatarPreview] = useState();
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const userProfile = useSelector(
    (state) => state.customer.profile.userProfile
  );

  useEffect(() => {
    if (userProfile) {    
      setAvatarPreview(userProfile.avatar); 
      setPhone(userProfile.phone);
      setCity(userProfile.city);
      setAddress(userProfile.address);
      setGender(userProfile.gender); 
    }
  }, [userProfile]);
  
  useEffect(() => {
    profileUser(dispatch, token);
  }, [dispatch, token]);




  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };
  
  

  const handleChangeAvatar = async (event) => {
    event.preventDefault();
  
    if (avatar) {
      const formData = new FormData();
      formData.append('file', avatar);
  
      try {
        const response = await changeAvatar(dispatch, token, formData,toast);
        console.log("Avatar changed successfully", response);
      } catch (error) {
        console.error("Error changing avatar", error);
      }
    }
  };

  const handleEditProfile = (e) =>{
    e.preventDefault();
    const updateForm = {
      city: city,
      address: address,
      gender:gender,
      phone: phone,
    };
    updateProfile(dispatch,token,updateForm,toast);
  }


  return userProfile ? (
    <div>
      <ToastContainer className="custom-toast-container" />
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center">
        Thông tin tài khoản
      </div>
      {/* avatar */}
      <form onSubmit={handleChangeAvatar} className="mb-2">
        <div className="mx-auto h-[150px] w-[150px] my-3">
          <div
            className="w-[118px] h-[118px] border-2 border-gray-900 rounded-[50%] mb-2"
            onClick={() => document.getElementById("avatar").click()}
          >
            <img
              className="w-[116px] h-[116px] rounded-[50%] object-cover"
              src={
                avatarPreview ||
                avatar ||
                "https://longduong.s3.us-east-2.amazonaws.com/1706260697543_avatar_defaul.png"
              }
              alt="avatar"
            />
          </div>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="hidden"
            onChange={handleFileChange}
          />
          {/* <button
            type="submit"
            className="btn btn-dark font-mono mb-4 w-[116px] text-gray-800"
          >
            Thay đổi
          </button> */}
        </div>
      </form>

      {/* from thông tin */}
      <div className="mb-2">
        <form action="" onSubmit={handleEditProfile}>
          <div className="row">
            {/* Cột 1 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Tài khoản:<span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">
                  {userProfile.username}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Email: <span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">
                  {userProfile.email}
                </p>
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Ngày sinh:<span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">
                  {userProfile.dateOfBirth}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Giới tính:
                </label>
                <div className="flex gap-2">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="genderMale"
                      name="gender"
                      value="Nam"
                      checked={gender === "Nam"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Nam
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="genderFemale"
                      name="gender"
                      value="Nữ"
                      checked={gender === "Nữ"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Nữ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="genderOther"
                      name="gender"
                      value="Khác"
                      checked={gender === "Khác"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Khác
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại:
                </label>
                <input
                  value={phone}
                  type="text"
                  className="form-control"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Thành phố:
                </label>
                <input
                  type="text"
                  value={city}
                  className="form-control"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Địa chỉ:
                </label>
                <input
                  value={address}
                  type="text"
                  className="form-control"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Hạng thành viên:<span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">
                  {userProfile.level}
                </p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark font-mono mb-4">
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Profile;
