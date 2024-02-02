import React, { useEffect, useState } from "react";
import "./HistoryBooking.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllByUser } from "../../redux/api/service/orderRequest";
import Barcode from "react-barcode";

function HistoryBooking() {
  const barcodeData = "YourCode-987";
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
      <div className=" font-medium font-mono text-center py-1 ">
        <div className="w-[80%] mx-auto">
          <h1 className="text-red-700 font-bold text-3xl my-3">Lịch sử</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Phim</th>
                <th scope="col">Ngày</th>
                <th scope="col">Rạp chiếu</th>
                <th scope="col">Chi tiêu</th>
              </tr >
            </thead >
            <tbody className="scroll-tabal">
              {
                listOrder &&
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
                )
              }
              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="flex">
                        <div className="w-[40%] h-[600px] ">
                          <div className="w-full h-full">
                            <img
                              className="mt-[140px]"
                              src="https://media.istockphoto.com/id/184151977/vi/anh/%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-r%E1%BA%A1p-chi%E1%BA%BFu-phim.jpg?s=2048x2048&w=is&k=20&c=WeyungQluq6xdoxuuAQNhmnfESS-jt3V2KWVUDsuaaI="
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="w-[60%] h-[600px] ">
                          <div className="order">
                            <div className="order-top text-center text-2xl font-bold pt-3">
                              <h1 className="pb-1"> Chi tiết vé đã đặt</h1>
                            </div>
                            <div className="order-center">
                              <div className="order-content  w-[90%] h-full ml-1">
                                <div className="w-full ">
                                  <div className="mb-4 flex h-[120px]">
                                    <div className="w-[50%] h-full">
                                      <h3 className="text-2xl font-bold">
                                        Mật Vụ Ong
                                      </h3>
                                      <p className="text-gray-500">
                                        02-02-2024
                                      </p>
                                      <p className="text-gray-500">
                                        18:30:00 ~ startTime + runningTime
                                      </p>
                                    </div>

                                    <div className="w-[50%] h-full">
                                      <img
                                        className="w-full h-full rounded-xl object-contain"
                                        src="https://imagev3.vietnamplus.vn/w820/Uploaded/2024/xpcwvovt/2024_01_29/beekeeper-8349.jpg.webp"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex">
                                  <div className="w-[50%]">
                                    <h3 className="text-gray-500 text-xl ]">
                                      Rạp CGV
                                    </h3>
                                    <p className="">CGV Bà Triệu</p>
                                  </div>
                                  <div className="w-[50%]">
                                    <p className="text-gray-500 text-xl ">
                                      Phòng Chiếu
                                    </p>
                                    <p>Cinema 01</p>
                                  </div>
                                </div>
                                <div className="flex mt-1">
                                  <div className="w-[50%] ">
                                    <p className="text-gray-500 text-xl">Ghế</p>
                                    <p>H4, h5</p>
                                  </div>
                                  <div className="w-[50%]">
                                    <p className="text-gray-500 text-xl">
                                      Combo
                                    </p>
                                    <p>abc</p>
                                  </div>
                                </div>

                                <div className="my-4">
                                  <p className="text-center">
                                    <span className="text-xl text-gray-500">
                                      Tổng:
                                    </span>{" "}
                                    <strong className="text-red-600">
                                      120000 VNĐ
                                    </strong>
                                  </p>
                                </div>
                                <div className="w-[80%] h-[80px] mx-auto border-1 border-gray-900 mt-1">
                                  <Barcode value={barcodeData} />
                                </div>
                              </div>
                              <div className="ticket-footer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tbody >
          </table >

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
        </div >
      </div >
    </div >
  );
}

export default HistoryBooking;