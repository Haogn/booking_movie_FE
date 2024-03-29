import React from "react";

function CreateFood() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới đồ ăn
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên đồ ăn: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên đồ ăn"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giá: <span className="text-red-500">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Giá" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giảm giá: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Giảm giá</option>
              <option value="1">5%</option>
              <option value="2">10%</option>
              <option value="3">15%</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thông tin giảmg giá: <span className="text-red-500">*</span>
            </label>
            <text
              type="text"
              className="form-control"
              placeholder="Thông tin giảm giá"
            />
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

export default CreateFood;
