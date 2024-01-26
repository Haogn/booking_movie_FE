import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../../redux/api/service/userRequest";

function ListCustomer() {
  const storedToken  = localStorage.getItem('acessToken');
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
  ? storedToken.slice(1, -1) 
  : storedToken;
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const listCustomer = useSelector((state) => state.user.customer.listCustomer);
  const [page,setPage] = useState(0);
  const [size,setSize] = useState(6)
  

  useEffect(() => {
    getAllCustomer(dispatch, token,search,page,size);
  }, [dispatch, token,search,page,size]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch( e.target.elements.search.value);
  };


  const handlePage = (newPage) => {
    if (newPage === listCustomer.totalPages) {
      const remainingSize = listCustomer.totalElements % listCustomer.size;
      setSize(remainingSize === 0 ? listCustomer.size : remainingSize);
    } else {
      setSize(size);
    }
    setPage(newPage - 1);
  };

  return listCustomer !== null && listCustomer.content !== 0 ?(
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Khách hàng
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
      className="form-control me-2"
      type="search"
      name="search"
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
          <table class="table table-hover font-mono ">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Email</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ảnh đại diện</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Thành viên</th>
                <th scope="col">Điểm thưởng</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {listCustomer.content.map((customer) => (
    <tr key={customer.id} className="text-center">
      <td>{customer.id}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.avatar}</td>
      <td>{customer.dateOfBirth}</td>
      <td>{customer.level}</td>
      <td>{customer.point}</td>
      <td colSpan={2}>
                  <button
                    type="button"
                    className="btn btn-success text-green-600 mr-2"
                  >
                    <i className="fa-solid fa-pen-to-square "></i>
                  </button>
                  <button
                    type="button"
                    className=" btn btn-danger text-red-600"
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

  {listCustomer.totalPages <= 2 ? (
    Array.from({ length: listCustomer.totalPages }, (_, index) => (
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
  ) : (
    Array.from({ length: 2 }, (_, index) => (
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
  )}

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
    </div>
  ):(
    
    <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Khách hàng
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
      className="form-control me-2"
      type="search"
      name="search"
      placeholder="Tìm Kiếm"
      aria-label="Search"
    />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </nav>
    <div>Không có kết quả</div>
    </div>
  );
}

export default ListCustomer;
