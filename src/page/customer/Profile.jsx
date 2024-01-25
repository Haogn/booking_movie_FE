import React, { useEffect } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { profileUser } from "../../redux/api/service/customerRequest";

function Profile() {
<<<<<<< HEAD
  const user = useSelector((state) => state.auth.login.currentUser);
  console.log(user);
=======
  const storedToken  = localStorage.getItem('acessToken');
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
  ? storedToken.slice(1, -1) 
  : storedToken;
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.customer.profile.userProfile);
  
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09

  useEffect(() => {
    profileUser(dispatch, token);
  }, [dispatch, token]);


  return  userProfile ?  (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thông tin tài khoản
      </div>
      {/* avatar */}
      <div className="mx-auto h-[200px] w-[200px] my-3">
        <div className="w-[118px] h-[118px] border-2 border-gray-900 rounded-[50%] mb-2">
          <img
            className="w-[116px] h-[116px] rounded-[50%] object-cover "
            src="../../public/image/avatar_default.pnj"
            alt="avatar"
          />
        </div>
<<<<<<< HEAD
        <input type="submit" id="avatarInput" className="hidden" />
        <button type="file" className="btn btn-dark font-mono mb-4 w-[116px]">
=======
        <input
          type="file"
          id="avatarInput"
          className="hidden"
        />
        <button
          type="file"
          className="btn btn-dark font-mono mb-4 w-[116px]"
        >
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
          Thay đổi
        </button>
      </div>
      {/* from thông tin */}
      <div className="mt-3">
        <form action="">
          <div className="row">
            {/* Cột 1 */}
            <div className="col-md-6">
            <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Tài khoản:<span className="text-red-500">*</span>
                </label>
<<<<<<< HEAD

                <p className="font-mono font-semibold mt-2">{user.username}</p>
=======
                <p className="font-mono font-semibold mt-2">{userProfile.username}</p>
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Email: <span className="text-red-500">*</span>
                </label>
<<<<<<< HEAD
                <p className="font-mono font-semibold mt-2">{user.email}</p>
=======
                <p className="font-mono font-semibold mt-2">
                {userProfile.email}
                </p>
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
              </div>

              {/* <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Ngày sinh: 
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
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Nữ
                    </label>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại: 
                </label>
                <input
<<<<<<< HEAD
                  type="text"
                  className="form-control"
                  id="phone"
                  value={user.phone}
                />
=======
                value={userProfile.phone}
                 type="text" className="form-control" id="phone" />
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Thành phố: 
                </label>
<<<<<<< HEAD
                <p className="font-mono font-semibold mt-2">
                  {user.dateOfBirth}
                </p>
=======
                <input 
                value={userProfile.city}
                type="text" className="form-control" id="city" />
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Địa chỉ:
                </label>
                <input
                value={userProfile.address}
                 type="text" className="form-control" id="address" />
              </div>
             
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Hạng thành viên:<span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">{userProfile.level}</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <button
            type="sunmit"
            className="btn btn-dark font-mono mb-4 text-white"
          >
=======
          <button type="file" className="btn btn-dark font-mono mb-4">
>>>>>>> 519b089bedfe3f9c74fe1652ab2a5c0ab236ac09
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  ):(
    <>
    </>
  );
}

export default Profile;
