import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllMovie, getMovie } from "../../../redux/api/service/movieRequest";
import { getAllGenreSelect } from "../../../redux/api/service/genreRequest";

function ListMovie() {
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
  const listMovie = useSelector((state) => state.movies.movie.listMovie);

  useEffect(() => {
    getAllMovie(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  // console.log("listMovie", listMovie);

  // edit
  const handleFindById = async (id) => {
    await getMovie(dispatch, { token, id });
    await getAllGenreSelect(dispatch, token);
    navigate("/admin/edit-movie");
  };
  // search

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // page
  const handlePage = (newPage) => {
    if (newPage === listMovie.totalPages) {
      const remainingSize = listMovie.totalElements % listMovie.size;
      setSize(remainingSize === 0 ? listMovie.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  return listMovie ? (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Phim
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-movie"}>
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
              {listMovie.content?.map((item) => (
                <tr key={item.id} className="text-center ">
                  <td className="w-[20px]">{item.id}</td>
                  <td className="w-[150px] h-[150px]">{item.movieName}</td>
                  <td className="w-[130px] h-[130px]">
                    <img
                      //  rounded-[50%]
                      className="w-full h-full mt-2 rounded-xl object-contain"
                      src={item.movieImage}
                      alt=""
                    />
                  </td>
                  <td className="w-[100px] h-[100px]">
                    <span>{item.price}</span> VNĐ
                  </td>
                  <td className="w-[100px] h-[100px]">{item.description}</td>
                  <td className="w-[100px] h-[100px]">
                    <span>{item.runningTime}</span> Phút
                  </td>
                  <td>{item.releaseDate}</td>
                  <td>{item.stopDate}</td>
                  <td className="w-[150px]">
                    {item.genreName.map((gen) => gen + ", ")}
                  </td>
                  <td className="w-[80px]">
                    <Link to={"/admin/edit-movie"}>
                      <button
                        type="button"
                        className="btn btn-success text-green-600 mr-2"
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </button>
                    </Link>
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
            {listMovie.first ? (
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

            {listMovie.totalPages <= 2
              ? Array.from({ length: listMovie.totalPages }, (_, index) => (
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

            {listMovie.last ? (
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

export default ListMovie;
