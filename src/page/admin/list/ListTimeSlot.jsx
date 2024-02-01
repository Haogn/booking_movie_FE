import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteTime,
  getAllTime,
  getTime,
} from "../../../redux/api/service/timeRequest";
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListTimeSlot() {
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

  const listTime = useSelector((state) => state.times.time.listTime);

  useEffect(() => {
    getAllTime(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  // console.log("listTime", listTime);

  // edit
  const handleFindById = async (id) => {
    console.log(typeof id);
    await getTime(dispatch, { token, id });
    await getAllTheaterSelect(dispatch, token);
    navigate("/admin/edit-time");
  };
  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // delete
  const handleDeleteTime = async (id) => {
    await deleteTime(token, dispatch, id, toast);
    getAllTime(dispatch, token, search, page, size);
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listTime.totalPages) {
      const remainingSize = listTime.totalElements % listTime.size;
      setSize(remainingSize === 0 ? listTime.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  return listTime ? (
    <div>
      <div className="w-full h-full px-2 ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách xuất chiếu
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-time"}>
              <a className="btn btn-outline-dark font-mono">Thêm mới</a>
            </Link>
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
                <th scope="col">Tên phim</th>
                <th scope="col">Type</th>
                <th scope="col">Xuất chiếu</th>
                <th scope="col">Ngày Chiếu</th>
                <th scope="col">Tên phòng chiếu</th>
                <th scope="col">Tên rạp chiếu</th>
                {/* <th scope="col">Tên rạp chiếu</th> */}
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listTime?.content.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td>{item.id}</td>
                  <td>{item.movieName}</td>
                  <td>{item.roomType}</td>
                  <td>{item.startTime}</td>
                  <td>{item.showDateMovie}</td>
                  <td>{item.roomName}</td>
                  <td>{item.theaterName}</td>
                  <td colSpan={2}>
                    <Link to={"/admin/edit-time"}>
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
                            Bạn chắc chắn muốn xoá khung giờ{" "}
                            <span>{item.startTime}</span>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary text-gray-700"
                              data-bs-dismiss="modal"
                              onClick={() => handleDeleteTime(item.id)}
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
            {listTime.first ? (
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

            {listTime.totalPages <= 2
              ? Array.from({ length: listTime.totalPages }, (_, index) => (
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

            {listTime.last ? (
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

export default ListTimeSlot;
