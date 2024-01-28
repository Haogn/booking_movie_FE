import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteRoom,
  getAllRoom,
  getRoom,
} from "../../../redux/api/service/roomRequest";
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";

function ListRoom() {
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
  const listRoom = useSelector((state) => state.rooms.room.listRoom);

  useEffect(() => {
    getAllRoom(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  // console.log("listRoom", listRoom);

  // edit
  const handleFindById = (id) => {
    getRoom(dispatch, token, id);
    getAllTheaterSelect(dispatch, token);
    navigate("/admin/edit-theater");
  };
  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // delete
  const handleDeleteLocation = (id) => {
    deleteRoom(token, dispatch, id, navigate);
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listRoom.totalPages) {
      const remainingSize = listRoom.totalElements % listRoom.size;
      setSize(remainingSize === 0 ? listRoom.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  return listRoom ? (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách phòng chiếu
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-room"}>
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
                <th scope="col">Tên phòng chiếu</th>
                <th scope="col">Tổng số lượng ghế</th>
                <th scope="col">Type hòng chiếu</th>
                <th scope="col">Tên rạp</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listRoom.content?.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td>{item.id}</td>
                  <td>{item.roomName}</td>
                  <td>
                    {item.numberOfSeatsInAColumn * item.numberOfSeatsInARow}
                  </td>
                  <td>{item.roomType}</td>
                  <td>{item.theaterName}</td>
                  <td colSpan={2}>
                    <Link to={"/admin/edit-room"}>
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
            {listRoom.first ? (
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

            {listRoom.totalPages <= 2
              ? Array.from({ length: listRoom.totalPages }, (_, index) => (
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

            {listRoom.last ? (
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

export default ListRoom;
