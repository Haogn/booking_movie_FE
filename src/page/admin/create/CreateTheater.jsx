import React from "react";

function CreateTheater() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Rạp chiếu phim
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên rạp chiếu"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Vị trí: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Vị trí</option>
              <option value="1">Hai Bà Trưng</option>
              <option value="2">Hoàng Kiếm</option>
              <option value="3">Hoàng Mai</option>
            </select>
          </div>

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

export default CreateTheater;
