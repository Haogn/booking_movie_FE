import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteGenre,
  getAllGenre,
  getGenre,
} from "../../../redux/api/service/genreRequest";

function ListGenre() {
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
  const listGenre = useSelector((state) => state.genres.genre.listGenre);
  useEffect(() => {
    getAllGenre(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);
  // console.log("listGenre", listGenre);

  // edit
  const handleFindById = async (id) => {
    await getGenre(dispatch, token, id);
    navigate("/admin/edit-genre");
  };
  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // delete
  const handleDeleteLocation = (id) => {
    deleteGenre(token, dispatch, id, navigate);
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listGenre.totalPages) {
      const remainingSize = listGenre.totalElements % listGenre.size;
      setSize(remainingSize === 0 ? listGenre.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  return listGenre ? (
    <div>
      <div className="w-[70%] h-full mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách thể loại phim
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-genre"}>
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
        <div className="container mt-4">
          <table className="table table-hover font-mono">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Tên thể loại</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listGenre.content?.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td>{item.id}</td>
                  <td>{item.genreName}</td>

                  <td colSpan={2}>
                    <Link to={"/admin/edit-genre"}>
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
                            Bạn chắc chắn muốn xoá thể loại{" "}
                            <span>{item.genreName}</span>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary text-gray-700"
                              onClick={() => handleDeleteLocation(item.id)}
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
            {listGenre.first ? (
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

            {listGenre.totalPages <= 2
              ? Array.from({ length: listGenre.totalPages }, (_, index) => (
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

            {listGenre.last ? (
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

export default ListGenre;
