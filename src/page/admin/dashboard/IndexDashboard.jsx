import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { countUsers } from "../../../redux/api/service/userRequest";
import { countAllPrice, sumYear } from "../../../redux/api/service/orderRequest";
import { totalMovies } from "../../../redux/api/service/movieRequest";

function IndexDashboard() {
  const dishpatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const countUser = useSelector((state) => state.user.countUser.count)
  const sumPrice = useSelector((state) => state.order.countAllPrice.count)
  const totalMovie = useSelector((state) => state.movies.totalMovie.count)
  const sumPriceYear = useSelector((state) => state.order.countYear.sumPrice)
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  useEffect(() => {
    sumYear(dishpatch, token)
    countAllPrice(dishpatch, token)
    countUsers(dishpatch, token)
    totalMovies(dishpatch, token)
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

          <Link to={"/admin/revenue-theater"}>
            <div className=" w-[250px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-purple-300 py-2 mx-auto rounded-xl">
                <i className="fa-solid fa-clapperboard"></i> Tổng doanh thu
              </p>
              <p className="text-center mt-4">
                <span className="text-2xl font-bold">{formatNumber(sumPrice)}</span> VNĐ
              </p>
            </div>
          </Link>

          <Link to={"/admin/revenue-movie"}>
            <div className=" w-[250px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-green-200 py-2 mx-auto rounded-xl">
                <i className="fa-solid fa-film"></i> Tổng Số Phim
              </p>
              <p className="text-center mt-4">{totalMovie} Bộ</p>
            </div>
          </Link>

          <Link to={"/admin/revenue-time"}>
            <div className=" w-[270px] cursor-pointer">
              <p className="text-center font-bold w-[90%] bg-cyan-200 py-2 mx-auto rounded-xl">
                <i className="fa-regular fa-calendar-check"></i> Doanh thu theo
                Thời gian
              </p>
              <div className="w-[70%] mx-auto mt-2">
                <p className="mt-2 font-semibold text-2xl text-gray-500">
                  Năm {year}
                </p>
                <p className="mt-2">
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
            <table class="table table-hover font-mono ">
              <thead>
                <tr className="text-center">
                  <th scope="col">Id</th>
                  <th scope="col">Người dùng</th>
                  <th scope="col">Mã vé</th>
                  <th scope="col">Ngày đặt</th>
                  <th scope="col">Rạp chiếu</th>
                  <th scope="col">Thanh toán</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {listCustomer.content.map((customer) => (
                <tr key={customer.id} className="text-center">
                  <td>{customer.id}</td>
                  <td>{customer.username}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.level}</td>
                  <td>{customer.status ? "Hoạt Động" : "Đã Khóa"}</td>
                  <td colSpan={2}>
                    <button
                      type="button"
                      className="btn btn-success text-green-600 mr-2"
                    >
                      <i className="fa-solid fa-pen-to-square "></i>
                    </button>
                    <button
                      onClick={() => handleChangeStatus(customer.id)}
                      type="button"
                      className=" btn btn-danger text-red-600"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))} */}
              </tbody>
            </table>
          </div>
          <nav
            className="flex justify-center"
            aria-label="Page navigation example"
          >
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link text-gray-700"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-gray-700" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-gray-700" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-gray-700" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-gray-700" href="#" aria-label="Next">
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
