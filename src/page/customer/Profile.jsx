import React, { useEffect } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { profileUser } from "../../redux/api/service/customerRequest";

function Profile() {
  const storedToken  = localStorage.getItem('acessToken');
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
  ? storedToken.slice(1, -1) 
  : storedToken;
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.customer.profile.userProfile);
  

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
        <input
          type="file"
          id="avatarInput"
          className="hidden"
        />
        <button
          type="file"
          className="btn btn-dark font-mono mb-4 w-[116px]"
        >
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
                <p className="font-mono font-semibold mt-2">{userProfile.username}</p>
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
              </div>
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại: 
                </label>
                <input
                value={userProfile.phone}
                 type="text" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Thành phố: 
                </label>
                <input 
                value={userProfile.city}
                type="text" className="form-control" id="city" />
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
          <button type="file" className="btn btn-dark font-mono mb-4">
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
