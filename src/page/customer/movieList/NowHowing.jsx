import React, { useState } from "react";
import "./NowHowing.css";
import { Link } from "react-router-dom";

function NowHowing() {
  const [movie, setMovie] = useState("");
  return (
    <div>
      <div className="w-[70%] h-full  mx-auto ">
        <div className="flex justify-between px-2 border-b-2 border-black pb-3">
          <h1 className="text-3xl font-mono font-extrabold">PHIM ĐANG CHIẾU</h1>
          <Link to={"/comingsoon"}>
            <p className="text-lg font-mono font-medium text-gray-600">
              PHIM SẮP CHIẾU
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 px-3">
          <div className="w-[240px] h-[450px]  mt-3">
            <img
              className="w-[200px] h-[260px] object-cover mx-auto"
              src="https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2024%2F1%2F3%2Fbeekeeper-500_1704265069414.jpg&w=256&q=75"
              alt=""
            />
            <div className="px-2 mt-1">
              <h1 className="font-mono font-bold text-2xl">Mật vụ ong</h1>
              <p className="font-mono">
                <strong>Thể loại:</strong> Hành động
              </p>
              <p className="font-mono">
                <strong>Thời lượng:</strong> 105 phút
              </p>
              <p className="font-mono">
                <strong>Khởi chiếu:</strong> 26/01/2024
              </p>
            </div>
            <div className="foot_booking mt-4">
              <span></span>
              <p>
                <button className="btn-booking">Mua vé</button>
              </p>
            </div>
          </div>
        </div>
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
              <a className="page-link text-gray-700" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NowHowing;
