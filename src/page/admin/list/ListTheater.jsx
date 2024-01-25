import React from "react";
import { Link } from "react-router-dom";

function ListTheater() {
  return (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Rạp chiếu
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
                <th scope="col">Id</th>
                <th scope="col">Tên rạp chiếu</th>
                <th scope="col">Vị trí</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center ">
                <td>1</td>
                <td>CGV Bà Triệu</td>
                <td>Hai Bà Trưng</td>
                <td colSpan={2}>
                  <Link to="/admin/edit-theater">
                    <button
                      type="button"
                      className="btn btn-success text-green-600 mr-2"
                    >
                      <i className="fa-solid fa-pen-to-square "></i>
                    </button>
                  </Link>

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

export default ListTheater;
