import React from "react";

function CreateRoom() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới Phòng chiếu
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên phòng chiếu"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Số ghế hàng dọc: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=" Số ghế hàng dọc"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Số ghế hàng ngang: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=" Số ghế hàng ngang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Type phòng chiêu: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Type</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="4D">4D</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Rạp chiếu</option>
              <option value="1">CGV Bà Triệu</option>
              <option value="3">CGV Tràng Tiền Plaza</option>
              <option value="4">CGV Phạm Ngọc Thạch</option>
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

export default CreateRoom;
