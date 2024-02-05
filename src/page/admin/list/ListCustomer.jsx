import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changeStatus,
  getAllCustomer,
} from "../../../redux/api/service/userRequest";
import { showCouponByCustomer } from "../../../redux/api/service/couponRequest";

function ListCustomer() {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const listCustomer = useSelector((state) => state.user.customer.listCustomer);
  const listCoupon = useSelector((state) => state.coupons.showCustomer.listCoupon)
  console.log(listCoupon);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [btn, setBtn] = useState(false)
  const [listCheckedIds, setListCheckedIds] = useState([]);
  useEffect(() => {
    getAllCustomer(dispatch, token, search, page, size);
  }, [dispatch, token, search, page, size]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handlePage = (newPage) => {
    console.log(page);
    if (newPage === listCustomer.totalPages) {
      const remainingSize = listCustomer.totalElements % listCustomer.size;
      setSize(remainingSize === 0 ? listCustomer.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  const handleChangeStatus = (id) => {
    changeStatus(dispatch, token, id);
    getAllCustomer(dispatch, token, search, page, size);
  };

  const handleCoupon = () => {
    if (listCheckedIds[0] != null) {
      navigate(`/admin/create-coupons/${listCheckedIds.join(',')}`);
    } else {
      alert("Chưa chọn người dùng");
    }
  };
  const handleCheckboxChange = (customerId) => {
    if (listCheckedIds.includes(customerId)) {
      // Nếu id đã tồn tại trong danh sách, loại bỏ nó
      setListCheckedIds(listCheckedIds.filter((id) => id !== customerId));
    } else {
      // Ngược lại, thêm id vào danh sách
      setListCheckedIds([...listCheckedIds, customerId]);
    }
  };

  const handleShowCoupon = (id) => {
    showCouponByCustomer(dispatch, token, id);
  }
  return listCustomer ? (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Khách hàng
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-account"}>
              <a className="btn btn-outline-dark font-mono">Thêm mới</a>
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Tìm Kiếm"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </nav>
        <div class="container mt-4">
          <table class="table table-hover font-mono ">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Tài khoản</th>
                <th scope="col">Email</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Thành viên</th>
                <th scope="col">Trạng thái</th>
                <th style={{ width: "180px" }} scope="col">
                  Khuyến mãi <span> </span>
                  {btn ? <><i onClick={handleCoupon} class="fa-solid fa-arrow-up-from-bracket"></i><span> </span> <i onClick={() => { setBtn(false); setListCheckedIds([]) }} class="fa-solid fa-xmark"></i></> : <><i onClick={() => setBtn(true)} class="fa-solid fa-plus"></i></>}

                </th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listCustomer?.content?.map((customer) => (
                <tr key={customer.id} className="text-center">
                  <td>{customer.id}</td>
                  <td>{customer.username}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.level}</td>
                  <td>{customer.status ? "Hoạt Động" : "Đã Khóa"}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleShowCoupon(customer.id)}
                      className="btn btn-success text-green-600 mr-2"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >
                      <i className="fas fa-calendar-plus"></i>
                    </button>
                    {btn &&
                      <input
                        onChange={() => handleCheckboxChange(customer.id)}
                        type="checkbox"
                      />}
                  </td>
                  <td colSpan={2}>
                    <button
                      onClick={() => handleChangeStatus(customer.id)}
                      type="button"
                      className={customer.status ? "btn btn-info text-sky-400" : " btn btn-danger text-red-600"}
                    >
                      {customer.status ? <i className="fas fa-lock-open"></i> : <i className="fas fa-unlock"></i>}
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
            {listCustomer.first ? (
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

            {listCustomer.totalPages <= 2
              ? Array.from({ length: listCustomer.totalPages }, (_, index) => (
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

            {listCustomer.last ? (
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
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Danh sách khuyến mãi của </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table table-hover font-mono ">
                <thead>
                  <tr className="text-center">
                    <th scope="col">stt</th>
                    <th scope="col">Mã</th>
                    <th scope="col">Giả</th>
                    <th scope="col">Ngày kết thúc</th>
                  </tr>
                </thead>
                <tbody>
                  {listCoupon ? listCoupon?.map((coupon, i) =>
                    <tr className="text-center">
                      <td>{i + 1}</td>
                      <td>{coupon.code}</td>
                      <td>{coupon.salePrice}%</td>
                      <td>{coupon.endDate}</td>
                    </tr>
                  )
                    :
                    <tr className="text-center" >
                      <td colSpan={5}>Không có khuyến mãi nào</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  ) : (
    <></>
  );
}

export default ListCustomer;
