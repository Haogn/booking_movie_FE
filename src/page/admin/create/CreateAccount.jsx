import React from "react";

function CreateAccount() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới tài khoản
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên đăng nhập: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Email: <span className="text-red-500">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Số điện thoại: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Số điện thoại"
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Password: <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Ngày sinh: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Ngày sinh"
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Role: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Role</option>
              <option value="management">Quản lý</option>
              <option value="employee">Nhân viên</option>
              <option value="customer">Khách hàng</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
