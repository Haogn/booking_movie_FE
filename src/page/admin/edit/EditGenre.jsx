import React from "react";

function EditGenre() {
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin thể loại
        </h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã thể loại: <span className="text-red-500">*</span>
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
              Tên thể loại: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên thể loại"
            />
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

export default EditGenre;
