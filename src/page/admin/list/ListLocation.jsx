import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteLocation,
  getALlLocation,
  getLocation,
} from "../../../redux/api/service/locationRequest";

function ListLocation() {
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

  const listLocation = useSelector(
    (state) => state.locations.location.listLocation
  );

  useEffect(() => {
    getALlLocation(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  // edit
  const handleFindById = (id) => {
    getLocation(dispatch, token, id);
    navigate("/admin/edit-location");
  };

  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // delete
  const handleDeleteLocation = (id) => {
    deleteLocation(token, dispatch, id, navigate);
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listLocation.totalPages) {
      const remainingSize = listLocation.totalElements % listLocation.size;
      setSize(remainingSize === 0 ? listLocation.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };
  return listLocation ? (
    <div>
      <div className="w-[70%] h-full mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Vị trí
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-location"}>
              <a className="btn btn-outline-dark font-mono">Thêm mới</a>
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
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
                <th scope="col">Tên Vị trí</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listLocation.content?.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td>{item.id}</td>
                  <td>{item.locationName}</td>
                  <td colSpan={2}>
                    <button
                      type="button"
                      className="btn btn-success text-green-600 mr-2"
                      onClick={() => handleFindById(item.id)}
                    >
                      <i className="fa-solid fa-pen-to-square "></i>
                    </button>

                    <button
                      type="button"
                      className=" btn btn-danger text-red-600"
                      onClick={() => handleDeleteLocation(item.id)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
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
            {listLocation.first ? (
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

            {listLocation.totalPages <= 2
              ? Array.from({ length: listLocation.totalPages }, (_, index) => (
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

            {listLocation.last ? (
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

export default ListLocation;
