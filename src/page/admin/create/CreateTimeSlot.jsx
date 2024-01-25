import React from "react";

function CreateTimeSlot() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới xuất chiếu
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Phim: <span className="text-red-500">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Mã phim" />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Phòng chiếu: <span className="text-red-500">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Phòng chiếu</option>
              <option value="1">Cinema 01</option>
              <option value="2">Cinema 02</option>
              <option value="3">Cinema 03</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Thời gian bắt đầu: <span className="text-red-500">*</span>
            </label>
            <input type="time" class="form-control" />
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

export default CreateTimeSlot;
