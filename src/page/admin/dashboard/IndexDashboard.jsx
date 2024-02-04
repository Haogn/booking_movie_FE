import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countUsers } from "../../../redux/api/service/userRequest";
import { countAllPrice, selectAllInAdmin, sumYear } from "../../../redux/api/service/orderRequest";
import { getAllMovieSelect, totalMovies } from "../../../redux/api/service/movieRequest";
import "../dashboard/index.css"
import { getAllTheaterSelect } from "../../../redux/api/service/theaterRequest";

function IndexDashboard() {
  const dishpatch = useDispatch();
  const currentDate = new Date();
  const [page, setPage] = useState(0);
  const [searchUser, setSearchUser] = useState(null)
  const [searchYear, setSearchYear] = useState(null)
  const [searchMovie, setSearchMovie] = useState(null)
  const [searchTheater, setSearchTheater] = useState(null)
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const countUser = useSelector((state) => state.user.countUser.count)
  const sumPrice = useSelector((state) => state.order.countAllPrice.count)
  const totalMovie = useSelector((state) => state.movies.totalMovie.count)
  const sumPriceYear = useSelector((state) => state.order.countYear.sumPrice)
  const listMovie = useSelector((state) => state.movies.movie.listMovieSelect);
  const listTheater = useSelector((state) => state.theaters.theater.listTheaterSelect);
  const listOrder = useSelector((state) => state.order.selectAllAdmin.listOrder)
  console.log(listOrder);
  const year = currentDate.getFullYear();
  const years = [];
  for (let i = year; i >= 2000; i--) {
    years.push(i);
  }

  const handleSearchOrder = (e) => {
    e.preventDefault();
    selectAllInAdmin(page, searchUser, searchYear, searchMovie, searchTheater, dishpatch, token)
  }

  let sumMenuPrice = listOrder?.content?.reduce((acc, element) => acc + element.menuPrice, 0);
  let sumMoviePrice = listOrder?.content?.reduce((acc, element) => acc + element.moviePrice, 0);
  let sumOrderPrice = listOrder?.content?.reduce((acc, element) => acc + element.total, 0);

  useEffect(() => {
    sumYear(dishpatch, token)
    countAllPrice(dishpatch, token)
    countUsers(dishpatch, token)
    totalMovies(dishpatch, token)
    getAllMovieSelect(dishpatch)
    getAllTheaterSelect(dishpatch, token)
    selectAllInAdmin(page, searchUser, searchYear, searchMovie, searchTheater, dishpatch, token)
  }, [dishpatch])

  const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number);
  };
  return (
    <div>
      <div className="font-mono">
        <div className="flex justify-between gap-3 w-[90%] h-[130px] mx-auto mt-4 ">
          <div className=" w-[250px] cursor-pointer">
            <p className="text-center font-bold w-[90%] bg-pink-300 py-2 mx-auto rounded-xl">
              <i className="fa-solid fa-user-tie"></i> Người dùng
            </p>
            <div className="w-[70%] mx-auto mt-2">
              {countUser ? (<p style={{ textAlign: "center" }} className="mt-2 font-bold text-2xl">{countUser} Người dùng</p>) : (<div></div>
              )}
            </div>
          </div>

          <Link>
            <div className=" w-[250px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-purple-300 py-2 mx-auto rounded-xl">
                <i className="fa-solid fa-clapperboard"></i> Tổng doanh thu
              </p>
              <p className="text-center mt-2">
                <span className="text-2xl font-bold">{formatNumber(sumPrice)}</span> VNĐ
              </p>
            </div>
          </Link>

          <Link>
            <div className=" w-[250px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-green-300 py-2 mx-auto rounded-xl">
                <i className="fa-solid fa-film"></i> Tổng Số Phim
              </p>
              <p className="text-center font-bold mt-2">{totalMovie} Bộ</p>
            </div>
          </Link>

          <Link>
            <div className=" w-[270px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-cyan-200 py-2 mx-auto rounded-xl">
                <i className="fa-regular fa-calendar-check"></i> Doanh thu Năm {year}
              </p>
              <div className="w-[70%] mx-auto mt-2">
                <p className="mt-2 text-center">
                  <span className="text-xl font-medium ">{formatNumber(sumPriceYear)}</span> VNĐ
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-[95%] h-screen mx-auto">
          <h1 className="text-center font-bold text-3xl">
            Danh sách đơn đặt vé
          </h1>

          <div class="container mt-4">
            <form action="" className="form-search" onSubmit={handleSearchOrder}>
              <table className="up">
                <tr>
                  <th>Năm</th>
                  <th>Phim</th>
                  <th>Rạp</th>
                </tr>
                <tr>
                  <td className="asd">
                    <select value={searchYear} onChange={(e) => setSearchYear(e.target.value)} className="handleDay" name="" id="">
                      <option value="">-chọn-</option>
                      {years && years.map((y) =>
                        <option key={y} value={y}>
                          {y}
                        </option>
                      )}
                    </select>
                  </td>
                  <td>
                    <select onChange={(e) => setSearchMovie(e.target.value)} className="handleDay" name="" id="">
                      <option value="">-chọn-</option>
                      {listMovie && listMovie.map((m) =>
                        <option key={m.id} value={m.movieName}>{m.movieName}</option>
                      )}
                    </select></td>
                  <td><select onChange={(e) => setSearchTheater(e.target.value)} className="handleDay" name="" id="">
                    <option value="">-chọn-</option>
                    {listTheater && listTheater.map((t) =>
                      <option key={t.id} value={t.movieName}>{t.theaterName}</option>
                    )}
                  </select></td>
                </tr>
              </table>
              <table className="up">
                <tr>
                  <th>Người dùng</th>
                  <th></th>
                </tr>
                <tr>
                  <td> <input
                    onChange={(e) => { setSearchUser(e.target.value) }}
                    value={searchUser}
                    className="form-control me-2"
                    type="search"
                    placeholder="Tìm Kiếm"
                    aria-label="Search"
                  /></td>
                  <td>
                    <button className="btn btn-outline-dark" type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </td>
                </tr>
              </table>
            </form>
            <table class="table table-hover font-mono ">
              <thead>
                <tr className="text-center">
                  <th scope="col">STT</th>
                  <th scope="col">Người dùng</th>
                  <th scope="col">Mã vé</th>
                  <th scope="col">Ngày đặt</th>
                  <th scope="col">Rạp chiếu</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Giá vé</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {listOrder?.content?.map((order, i) => (
                  <tr key={order.id} className="text-center">
                    <td>{i + 1}</td>
                    <td>{order.user.username}</td>
                    <td>{order.code}</td>
                    <td>{order.bookingDate}</td>
                    <td>{order.theaterName}</td>
                    <td>
                      {order.status == "WAITING" && "Đang chờ"}
                      {order.status == "COMPLETED" && "Đã Xem"}
                      {order.status == "CANCELED" && "Đã hủy"}
                    </td>
                    <td>{formatNumber(order.moviePrice)}</td>
                    <td>{formatNumber(order.menuPrice)}</td>
                    <td>{formatNumber(order.total)}</td>
                  </tr>
                ))}
                <tr>
                  <th style={{ textAlign: "center" }} colSpan={6}>Tổng </th>
                  <th style={{ textAlign: "center" }}>{formatNumber(sumMoviePrice)}</th>
                  <th style={{ textAlign: "center" }} >{formatNumber(sumMenuPrice)}</th>
                  <th style={{ textAlign: "center" }}>{formatNumber(sumOrderPrice)}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex justify-center"
            aria-label="Page navigation example"
          >
            <ul class="pagination">
              <li className="page-item" onClick={() => setPage(prevPage => (prevPage > 0 ? prevPage - 1 : prevPage))}>
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
                  {listOrder?.totalPages === 0 ? 0 : listOrder?.number + 1}/{listOrder?.totalPages}
                </a>
              </li>
              <li className="page-item" onClick={() => setPage(prevPage => (prevPage < listOrder?.totalPages - 1 ? prevPage + 1 : prevPage))}>
                <a className="page-link text-gray-700" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default IndexDashboard;
