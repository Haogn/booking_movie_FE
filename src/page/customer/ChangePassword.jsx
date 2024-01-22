import React from "react";

function ChangePassword() {
  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thay đổi mật khẩu
      </div>
      <div className="mt-3 mx-auto w-[500px]">
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mật khẩu cũ: <span className="text-red-400">*</span>
            </label>
            <input type="text" className="form-control" id="input1" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mật khẩu mới: <span className="text-red-400">*</span>
            </label>
            <input type="text" className="form-control" id="input1" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Nhập lại mật khẩu: <span className="text-red-400">*</span>
            </label>
            <input type="text" className="form-control" id="input1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
