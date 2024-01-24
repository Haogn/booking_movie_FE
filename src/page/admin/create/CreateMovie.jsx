import React from "react";

function CreateMovie() {
  return (
    <div>
      <div className="w-[90%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới phim
        </h1>
        <form action="">
          <div className="row">
            {/* Cột 1 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Tên phim: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên phim"
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Hình ảnh: <span className="text-red-500">*</span>
                </label>
                <input type="file" className="form-control" />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Giá vé: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Giá vé"
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Đạo diễn: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Đạo diễn"
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Diễn viên: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Diễn viên"
                />
              </div>
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Mô tả: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mô tả"
                />
              </div>
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Thời lượng: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Thời lượng ( Phút )"
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngày khởi chiếu: <span className="text-red-500">*</span>
                </label>
                <input type="date" className="form-control" />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngày kết thúc: <span className="text-red-500">*</span>
                </label>
                <input type="date" className="form-control" />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngôn ngữ: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ngôn ngữ"
                />
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Giới hạn độ tuổi: <span className="text-red-500">*</span>
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Giới hạn độ tuổi</option>
                  <option value="1">13+</option>
                  <option value="2">16+</option>
                  <option value="3">18+</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Thể loại: <span className="text-red-500">*</span>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="discountOption1"
                  />
                  <label className="form-check-label" htmlFor="discountOption1">
                    Hành động
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="discountOption2"
                  />
                  <label className="form-check-label" htmlFor="discountOption2">
                    Kinh dị
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="discountOption3"
                  />
                  <label className="form-check-label" htmlFor="discountOption3">
                    Tình cảm
                  </label>
                </div>
              </div>
            </div>
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

export default CreateMovie;
