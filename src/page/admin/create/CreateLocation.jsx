import React from "react";

function CreateLocation() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Vị trí
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên vị trí: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên vị trí"
            />
          </div>

          {/* <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Trạng thái: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Trạng thái</option>
              <option value="true">Mở cửa</option>
              <option value="false">Đóng</option>
            </select>
          </div> */}

          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateLocation;
