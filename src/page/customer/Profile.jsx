import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thông tin tài khoản
      </div>
      <div className="w-[80%] h-full mx-auto">
        {/* avatar */}
        <div className="mx-auto h-[200px] w-[200px] my-3">
          <div className="w-[118px] h-[118px] border-2 border-gray-900 rounded-[50%] mb-2">
            <img
              className="w-[116px] h-[116px] rounded-[50%] object-cover "
              src="../../../public/image/avatar.jpg"
              alt=""
            />
          </div>
          <input
            type="submit"
            id="avatarInput"
            className="hidden"
            onChange={(e) => handleFileChange(e)}
          />
          <button
            type="file"
            className="btn btn-dark font-mono mb-4 w-[116px]"
            onClick={() => openFileInput()}
          >
            Thay đổi
          </button>
        </div>
<<<<<<< HEAD
        {/* from thông tin */}
        <div className="mt-3">
          <form action="">
            <div className="row">
              {/* Cột 1 */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Tên: <span className="text-red-500">*</span>
                  </label>
                  <p className="font-mono font-semibold mt-2">Nshoang</p>
                </div>
                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Email: <span className="text-red-500">*</span>
                  </label>
                  <p className="font-mono font-semibold mt-2">
                    Nshoang2702@gmail.com
                  </p>
                </div>
=======
        <input
          type="submit"
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
                  Tên: <span className="text-red-500">*</span>
                </label>
                <input 
                value={user.username}
                type="text" className="form-control" id="username" />
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Email: <span className="text-red-500">*</span>
                </label>
                <p className="font-mono font-semibold mt-2">
                  {user.email}
                </p>
              </div>
>>>>>>> 1de8554a136f8fb1ae5e78a478270daef16d4f2e

                {/* <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Giới tính: <span className="text-red-500">*</span>
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
                    Số điện thoại: <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="form-control" id="input3" />
                </div>

                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Sinh nhật:
                  </label>
                  <p className="font-mono font-semibold mt-2">27/02/1998</p>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <button type="sunmit" className="btn btn-dark font-mono mb-4 ">
              Lưu thay đổi
            </button>
          </form>
        </div>
=======

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại: <span className="text-red-500">*</span>
                </label>
                <input type="text" className="form-control" id="input3" />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Sinh nhật:
                </label>
                <p className="font-mono font-semibold mt-2">{user.dateOfBirth}</p>
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Hạng thành viên:
                </label>
                <p className="font-mono font-semibold mt-2">{user.level}</p>
              </div>
            </div>
          </div>
          <button
            type="sunmit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Lưu thay đổi
          </button>
        </form>
>>>>>>> 1de8554a136f8fb1ae5e78a478270daef16d4f2e
      </div>
    </div>
  );
}

export default Profile;
