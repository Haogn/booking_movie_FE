import React from "react";
import "./NavbarCustomer.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/api/service/authRequest";
import { toast } from "react-toastify";

function NavbarCustomer() {
  const storedUsername = localStorage.getItem("username");
  const username =
    storedUsername &&
    storedUsername.startsWith('"') &&
    storedUsername.endsWith('"')
      ? storedUsername.slice(1, -1)
      : storedUsername;
  const distpatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(distpatch, navigate, toast);
  };

  return (
    <div>
      <div className="w-[70%] m-auto">
        <div className="my-[10px] flex justify-end gap-[30px] text-base cursor-pointer font-black font-mono">
          <div className="tinmoi">
            <Link to={"/event"}>
              <i className="fas fa-tags" />
              TIN MỚI &amp; ƯU ĐÃI
            </Link>
          </div>
          <div className="vecuatoi">
            <Link to={"/history"}>
              <i className="fa-solid fa-ticket"></i> VÉ CỦA TÔI
            </Link>
          </div>
          {username ? (
            <>
              <Link onClick={handleLogout}>
                <i className="fa-solid fa-circle-user" /> {username} / ĐĂNG XUẤT
              </Link>
            </>
          ) : (
            <Link to={"/login"}>
              <i className="fa-solid fa-circle-user" /> ĐĂNG NHẬP/ĐĂNG KÝ
            </Link>
          )}
        </div>
      </div>
      <div className="header-page">
        <div className="flex justify-center gap-[70px] my-[20px] cursor-pointer pt-[30px]">
          <div>
            <Link to={"/"}>
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-[70px] font-bold pt-[20px] ">
            <div className="movie">
              <p>PHIM</p>
              <div className="movie-status">
                <ul>
                  <Link to="/nowhowing">
                    <li>Phim Đang Chiếu</li>
                  </Link>

                  <Link to={"/comingsoon"}>
                    <li>Phim Sắp Chiếu</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="theater">
              <p className="w-[70px]">Rạp CGV</p>
              <div className="theater-status">
                <ul>
                  <li>Tất Cả Các Rạp</li>
                  <li>Rạp 3D</li>
                  <li>Rạp 2D</li>
                </ul>
              </div>
            </div>
            <div className="member">
              <p>THÀNH VIÊN</p>
              <div className="member-status">
                <ul>
                  <li>
                    {" "}
                    {username ? (
                      <>
                        <Link to={"/profile"}>Tài Khoản CGV</Link>
                      </>
                    ) : (
                      <>
                        <Link to={"/login"}>Tài Khoản CGV</Link>
                      </>
                    )}
                  </li>
                  <li>Quyền Lợi</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#" className="cine">
            <img
              src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarCustomer;
