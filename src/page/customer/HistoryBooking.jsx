import React from "react";
import "./HistoryBooking.css";

function HistoryBooking() {
  return (
    <div>
      <div className="text-white text-3xl font-medium font-mono text-center py-1 ">
        <div className="history">
          <h1>Lịch sử</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Phim</th>
                <th scope="col">Ngày</th>
                <th scope="col">Tổng</th>
                <th scope="col">Thêm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>20.000</td>
                <td>
                  <button
                    class="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>20.000</td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span>20.000</span> VND
                </td>
                <td>
                  <button class="btn btn-secondary">Chi tiết</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="history_foot">
            <button>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <span>1/3</span>
            <button>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Chi tiết
              </h1>
              <button
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="wish">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">stt</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Loại</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th>Tổng</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <th>100.000đ</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryBooking;
