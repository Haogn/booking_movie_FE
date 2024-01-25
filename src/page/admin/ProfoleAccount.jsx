import React from "react";

function ProfoleAccount() {
  const handleFileChange = (e) => {
    e.preventDefault();
  };
  const openFileInput = () => {};
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <div className="mx-auto h-[200px] w-[200px] my-3">
          <div className="w-[118px] h-[118px] border-1 border-gray-900 rounded-[50%] mb-2">
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
            <button type="sunmit" className="btn btn-dark font-mono mb-4 ">
              Lưu thay đổi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfoleAccount;
