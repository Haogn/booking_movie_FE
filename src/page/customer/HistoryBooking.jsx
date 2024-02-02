import React, { useEffect, useState } from "react";
import "./HistoryBooking.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllByUser } from "../../redux/api/service/orderRequest";

function HistoryBooking() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listOrder = useSelector((state) => state.order.getAllByUser.listOrderResponse)
  console.log(listOrder);
  useEffect(() => {
    getAllByUser(dispatch, token, page)
  }, [dispatch])
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
                <th scope="col">Chi tiêu</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody className="scroll-tabal">
              {listOrder &&
                listOrder.content.map((order, i) =>
                  <tr key={order.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.movieName}</td>
                    <td>{order.bookingDate}</td>
                    <td>{order.theaterName}</td>
                    <td>
                      <span>{order.total}</span> VND
                    </td>
                  </tr>
                )}
            </tbody>
          </table>

          <nav
            className="flex justify-center"
            aria-label="Page navigation example"
          >
            <ul className="pagination">
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
                  {listOrder ? `${listOrder.number + 1}/${listOrder.totalPages}` : '0/0'}
                </a>
              </li>
              <li className="page-item" onClick={() => setPage(prevPage => (prevPage < listOrder.totalPages - 1 ? prevPage + 1 : prevPage))}>
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

export default HistoryBooking;
