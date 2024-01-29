import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployer } from "../../../redux/api/service/userRequest";

function ListEmploy() {
  const storedToken  = localStorage.getItem('acessToken');
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
  ? storedToken.slice(1, -1) 
  : storedToken;
  const dispatch = useDispatch();
  const [page,setPage] = useState(0);
  const [search,setSearch] = useState("");


  const listEmployer = useSelector((state) => state.user.employer.listEmployer);
  

  useEffect(() => {
    getAllEmployer(dispatch, token,search,page);
  }, [dispatch, token,search,page]);

  const handleChangePage = (newPage)=>{
    setPage(newPage-1)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return  listEmployer ? (
    <div>
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách Nhân viên
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
          <table class="table table-hover font-mono">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Email</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Ảnh đại diện</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {listEmployer.map((customer) => (
    <tr key={customer.id} className="text-center">
      <td>{customer.id}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{customer.avatar}</td>
      <td>{customer.dateOfBirth}</td>
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
  {listEmployer.first ? (
    <></>
  ) : (
    <li className="page-item">
              <a
                className="page-link text-gray-700"
                href="#"
                aria-label="Previous"
                onClick={() => handleChangePage(page - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
  )}

  {listEmployer.totalPages <= 2 ? (
    Array.from({ length: listEmployer.totalPages }, (_, index) => (
      <li className="page-item" key={index}>
              <a className="page-link text-gray-700" href="#"
               onClick={() => handleChangePage(index + 1)}
              >
               {index + 1}
              </a>
            </li>
    ))
  ) : (
    Array.from({ length: 2 }, (_, index) => (
      <li className="page-item" key={index}>
        <p
          className="page-link text-gray-700"
          href="#"
          onClick={() => handleChangePage(index + 1)}
        >
          {index + 1}
        </p>
      </li>
    ))
  )}

  {listEmployer.last ? (
    <></>
  ) : (
    <li className="page-item">
    <a className="page-link text-gray-700" href="#" aria-label="Next"
    onClick={() => handleChangePage(page + 1)}
    >
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li>
  )}
</ul>
        </nav>
      </div>
    </div>
  ):(
    <>
    </>
  );
}

export default ListEmploy;
