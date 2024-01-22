import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { setUser } from "../../redux/api/reducers/auth";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {

  const [cookie, setCookie] = useCookies();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:6789/api/v1/booking/auth/login", form)
      .then((resp) => {
        dispatch(setUser(resp.data));
        setCookie("role", resp.data.roles[0], { path: '/', maxAge: 86400000 })
        setCookie("username", resp.data.username , { path: '/', maxAge: 86400000 })
        setCookie("token", resp.data.token, { path: "/", maxAge: 86400000 });
        localStorage.setItem("user", JSON.stringify(resp.data));
        localStorage.setItem("active", JSON.stringify("Tổng Quan"))
        if (resp.data.roles.includes("ADMIN")) {
          navigate("/admin");
        }
        if (resp.data.roles.includes("MANAGER")) {
          navigate("/manager");
        }
        if (resp.data.roles.includes("EMPLOYER")) {
          navigate("/employer");
        }
        if (resp.data.roles.includes("CUSTOMER")) {
          navigate("/home");
        }
        setError("");
      })
      .catch((err) => {
        console.log(err)
        setError(err.response.data);
      });
  };
  return (
    <div>
      <div className="flex w-[70%] h-[500px] mx-auto ">
        <div className="w-[60%] h-full  pt-10">
          <h1 className="font-mono text-2xl font-bold text-center">
            Đăng nhập
          </h1>
          <div className="w-[80%] h-full mx-auto">
            <form action="" onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Tên đăng nhập: <span className="text-red-400">*</span>
                </label>
                <input onChange={handleChangeInput}
                 type="text" className="form-control" id="input1" />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Mật khẩu: <span className="text-red-400">*</span>
                </label>
                <input type="password" className="form-control" id="input1" />
                <input onChange={handleChangeInput}
                 type="text" className="form-control" id="input1" />
              </div>
              <div className="flex justify-between">
                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Vui lòng nhập ký tự bên dưới:{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input type="text" className="form-control" id="input1" />
                </div>
                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Mã xác nhận: <span className="text-red-400">*</span>
                  </label>
                  <p className="font-mono font-bold text-xl">bcvsf</p>
                </div>
              </div>
              <div className="flex mx-auto w-full justify-center gap-5">
                <p className=" font-medium text-xl font-mono pl-3 py-2 w-[30%] text-center text-white bg-red-500 rounded-md">
                  <Link to={"/register"}>Đăng Ký</Link>
                </p>
                <button className=" font-medium text-xl font-mono pl-3 py-2 w-[30%] text-center text-white bg-red-500 rounded-md">
                  Đăng nhập
                </button>
              </div>
            </form>
            <p className="text-center text-blue-400 font-mono mt-3">
              <Link to="/laylaimatkhau">Tôi muốn lấy lại mật khẩu ? </Link>
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full bg-slate-400 ">
          <Carousel slide={false}>
            <Carousel.Item>
              <div>
                <img
                  className="w-full h-full"
                  src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg"
                  alt=""
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img
                  className="w-full h-full"
                  src="https://www.cgv.vn/media/wysiwyg/2020/1.jpg"
                  alt=""
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <img
                  className="w-full h-full"
                  src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg"
                  alt=""
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Login;
