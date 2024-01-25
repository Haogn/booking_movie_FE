import React from "react";

function ListMovie() {
  return (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Phim
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm Kiếm"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </nav>
        <div class="container mt-4">
          <table class="table table-hover font-mono">
            <thead>
              <tr className="text-center">
                <th className="w-[20px]" scope="col">
                  Id
                </th>
                <th scope="col">Tên</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Giá vé</th>
                <th scope="col">Mô tả</th>
                <th className="w-[120px]" scope="col">
                  Thời lượng
                </th>
                <th scope="col">Khởi chiếu</th>
                <th scope="col">Kết thúc</th>
                <th scope="col">Thể loại</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center ">
                <td className="w-[20px]">1</td>
                <td className="w-[150px] h-[150px]">Aquamen</td>
                <td className="w-[100px] h-[100px]">
                  <img
                    className="w-full h-full rounded-[50%] "
                    src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"
                    alt=""
                  />
                </td>
                <td className="w-[100px] h-[100px]">
                  <span>100000</span> VNĐ
                </td>
                <td className="w-[100px] h-[100px]">aaa</td>
                <td className="w-[100px] h-[100px]">
                  <span>120</span> Phút
                </td>
                <td>23/01/2024</td>
                <td>13/02/2024</td>
                <td className="w-[150px]">Kinh dị, viễn tưởng</td>
                <td colSpan={2}>
                  <button
                    type="button"
                    className="btn btn-success text-green-600 mr-2"
                  >
                    <i className="fa-solid fa-pen-to-square "></i>
                  </button>
                  <button
                    type="button"
                    className=" btn btn-danger text-red-600"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-center"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link text-gray-700"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ListMovie;
