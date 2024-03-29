import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteTheater,
  getAllTheater,
  getTheater,
} from "../../../redux/api/service/theaterRequest";
import {
  getALlLocation,
  getALlLocationSeclect,
} from "../../../redux/api/service/locationRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListTheater() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const listTheater = useSelector(
    (state) => state.theaters.theater.listTheater
  );

  useEffect(() => {
    getAllTheater(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  // console.log("listTheater", listTheater);

  // edit
  const handleFindById = async (id) => {
    console.log(typeof id);
    await getTheater(dispatch, { token, id });
    await getALlLocationSeclect(dispatch, token);
    navigate("/admin/edit-theater");
  };
  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // delete
  const handleDeleteTheater = async (id) => {
    await deleteTheater(token, dispatch, id, toast);
    getAllTheater(dispatch, token, search, page, size);
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listTheater.totalPages) {
      const remainingSize = listTheater.totalElements % listTheater.size;
      setSize(remainingSize === 0 ? listTheater.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };
  return listTheater ? (
    <div>
      <div className="w-full h-full px-2 ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Rạp chiếu
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-theater"}>
              <a className="btn btn-outline-dark font-mono">Thêm mới</a>
            </Link>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm Kiếm"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
              {listTheater.content?.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td>{item.id}</td>
                  <td>{item.theaterName}</td>
                  <td>{item.locationName}</td>
                  <td colSpan={2}>
                    <Link to="/admin/edit-theater">
                      <button
                        type="button"
                        className="btn btn-success text-green-600 mr-2"
                        onClick={() => handleFindById(item.id)}
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>
                    </Link>

                    <button
                      type="button"
                      className=" btn btn-danger text-red-600"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal-${item.id}`}
                      // onClick={() => handleDeleteLocation(item.id)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                    {/* modal xoá */}
                    <div
                      className="modal fade"
                      id={`exampleModal-${item.id}`}
                      tabIndex="-1"
                      aria-labelledby={`exampleModalLabel-${item.id}`}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            ></h1>
                            <button
                              type="button"
                              className="btn-close text-gray-700"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            Bạn chắc chắn muốn xoá rạp chiếu{" "}
                            <span>{item.theaterName}</span>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary text-gray-700"
                              data-bs-dismiss="modal"
                              onClick={() => handleDeleteTheater(item.id)}
                            >
                              Xoá
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-center"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            {listTheater.first ? (
              <></>
            ) : (
              <li className="page-item">
                <div
                  className="page-link text-gray-700"
                  role="button"
                  onClick={() => handlePage(page - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </div>
              </li>
            )}

            {listTheater.totalPages <= 2
              ? Array.from({ length: listTheater.totalPages }, (_, index) => (
                  <li className="page-item" key={index}>
                    <p
                      className="page-link text-gray-700"
                      href="#"
                      onClick={() => handlePage(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </li>
                ))
              : Array.from({ length: 2 }, (_, index) => (
                  <li className="page-item" key={index}>
                    <p
                      className="page-link text-gray-700"
                      href="#"
                      onClick={() => handlePage(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </li>
                ))}

            {listTheater.last ? (
              <></>
            ) : (
              <li className="page-item">
                <p
                  className="page-link text-gray-700"
                  href="#"
                  aria-label="Next"
                  onClick={() => handlePage(page + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </p>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ListTheater;
