import React from "react";

function RevenueByTheater() {
  return (
    <div className="font-mono">
      <div className="w-[50%] mx-auto ">
        <h1 className="text-center text-3xl font-bold mt-2 border-b-2 border-gray-400 pb-3">
          Thống kế doanh thu theo Rạp
        </h1>

        <form className="mt-2" action="post">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên Rạp chiếu: <span className="text-red-500">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Rạp chiếu</option>
              <option value="2">CGV Bà Triệu</option>
              <option value="8">CGV Tràng Tiền Plaza</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="w-[95%] mx-auto">
        <div class="container mt-4">
          <table class="table table-hover font-mono ">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Người dùng</th>
                <th scope="col">Mã Giao dịch</th>
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
          <div className="flex justify-between">
            <p></p>
            <p>
              <span className="text-2xl text-gray-600">Tổng doanh thu :</span>{" "}
              <span className="text-2xl font-semibold">1000000</span> VNĐ
            </p>
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

export default RevenueByTheater;
