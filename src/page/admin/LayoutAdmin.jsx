import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./LayoutAdmin.css";

function LayoutAdmin() {
  const [selectedTab, setSelectedTab] = useState("details"); // Default selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="w-screen h-full flex layout-admin ">
        <div className="w-[20%] h-full  ">
          <div className="w-full h-[1000px] flex flex-col justify-start px-[8%] gap-3 bg-slate-50 layout-admin border-r-2 border-red-300">
            {/* logo */}
            <div>
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                alt=""
              />
            </div>
            {/* thống kê */}
            {/* <div className={`cursor-pointer dropdown ${
                selectedTab === "location"
                  ? "text-gray-800 bg-red-100 py-2 rounded-md pl-1"
                  : ""
              }`}
              onClick={() => handleTabClick("location")}>
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-chart-column"></i> Doanh thu
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-clapperboard"></i> Theo rạp chiếu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-film"></i> Theo phim
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-calendar-check"></i> Theo giời
                    gian
                  </a>
                </li>
              </ul>
            </div> */}

            {/* user  */}
            <div className="cursor-pointer dropdown mt-4">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-users-rectangle"></i> Quản lý tài
                khoản
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <Link className="dropdown-item" to="/admin/create-account">
                    <i className="fa-solid fa-folder-plus"></i> Tạo tài khoản
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-management">
                    <i className="fa-solid fa-list-check"></i> Danh sách quản lý
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-employ">
                    <i className="fa-solid fa-list-check"></i> Danh sách nhân
                    viên
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin">
                    <i className="fa-solid fa-list-check"></i> Danh sách người
                    dùng
                  </a>
                </li>
              </ul>
            </div>

            {/* location*/}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-map-location-dot"></i> Vị trí
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-location">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-location">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* theater */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-clapperboard"></i> Rạp chiếu
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-theater">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-theater">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* room */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-couch"></i> Phòng chiếu
                {/* <i className="fa-solid fa-door-open"></i> Phòng chiếu */}
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-room">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-room">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* chair */}
            {/* <div className={`cursor-pointer dropdown ${
                selectedTab === "location"
                  ? "text-gray-800 bg-red-100 py-2 rounded-md pl-1"
                  : ""
              }`}
              onClick={() => handleTabClick("location")}>
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-couch"></i> Ghế ngồi
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
               
              </ul>
            </div> */}
            {/* timeslot */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-clock"></i> Khung giờ
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-time">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-time">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* thể loại */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-masks-theater"></i> Thể loại phim
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-genre">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-genre">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* movie */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-film"></i> Phim
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-movie">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-movie">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
            {/* đồ uống */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-mug-saucer"></i> Menu
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-food">
                    <i className="fa-solid fa-folder-plus"></i> Tạo mới
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-food">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>

            {/* phiếu giảm giá */}
            <div className="dropdown">
              <button
                className="text-xl font-mono font-bold dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-ticket"></i> Phiếu giảm giá
              </button>
              <ul className="dropdown-menu bg-gray-200 font-bold font-mono">
                <li>
                  <a className="dropdown-item" href="/admin/create-event">
                    <i className="fa-solid fa-folder-plus"></i> Event
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/admin/list-event">
                    <i className="fa-solid fa-list-check"></i> Danh sách
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-full  ">
          <div className="h-[70px] w-full bg-slate-50 nav-admin ">
            <div className="w-full h-full flex items-center justify-end gap-3 pr-5">
              <p className="font-bold font-mono">Xin Chào Admin</p>
              <div className="w-[50px] h-[50px]">
                <Link to="/admin/profile">
                  <img
                    className="w-full h-full rounded-[50%] "
                    src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                <i className="fa-solid fa-right-from-bracket text-2xl"></i>
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
