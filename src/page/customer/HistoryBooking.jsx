import React from "react";
import "./HistoryBooking.css";

function HistoryBooking() {
  return (
    <div>
      <div className="text-white text-3xl font-medium font-mono text-center py-1 ">
        <div className="history">
          <h1>Lịch sử</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Phim</th>
                <th scope="col">Ngày</th>
                <th scope="col">Rạp chiếu</th>
                <th scope="col">Phòng chiếu</th>
                <th scope="col">Ghế</th>
                <th scope="col">Chi tiêu</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody className="scroll-tabal">
              <tr>
                <th scope="row">1</th>
                <td>Aquamen</td>
                <td>29/01/2024</td>
                <td>CGV Bà Triệu</td>
                <td>Cinema 01</td>
                <td>H1, H2</td>
                <td>
                  <span>120000</span> VND
                </td>
              </tr>
            </tbody>
          </table>

          <nav
            className="flex justify-center"
            aria-label="Page navigation example"
          >
            <ul className="pagination">
              <li className="page-item">
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
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-gray-700" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-gray-700" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-gray-700"
                  href="#"
                  aria-label="Next"
                >
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

export default HistoryBooking;
