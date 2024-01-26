import React from "react";

function EditDrinks() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin đồ ăn / đồ uống
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã sản phẩm: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={1}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên sản phẩm: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
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
              Thể loại: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Thể loại</option>
              <option value="1">Đồ ăn</option>
              <option value="2">Đồ uống</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDrinks;
