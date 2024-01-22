import React from "react";
import "./Login.css";
import axios from "axios";
import { setUser } from "../../redux/api/reducers/authSlice";
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
  return <> 
<div className="login-box">
  <div>
    <div className="title">
    <div className="login font-momo">
      ĐĂNG NHẬP
    </div>
    <div className="register font-momo">
      ĐĂNG KÝ
    </div>
    </div>
    <form className="form" onSubmit={handleLogin}>
      <label id="username" className="username font-momo">Tài khoản: </label>
      <input onChange={handleChangeInput} name="username"
       id="username" className="username" placeholder="Tài khoản"/>
      <label id="password">Mật khẩu: </label>
      <input onChange={handleChangeInput} name="password"
      id="password" className="password" placeholder="Mật khẩu"/>
      <div>
        <label id="captcha">Vui lòng nhập kí tự bên dưới</label>
        <input id="captcha" className="captcha" 
         />
        <div className="captcha-box">
          <div className="captcha-change"><image src="https://www.cgv.vn/skin/frontend/base/default/images/reload.png" /></div>
          <div className="captcha">123456</div>
        </div>
      </div>
      <button className="btn-login"></button>
    </form>
    <a href="">Bạn muốn tìm lại mật khẩu?</a>
  </div>
</div>
<div className="slider-container">
<div className="slider">
  <image src="public/image/culture_day.png" />
  <a className="prev"></a>
  <a className="next"></a>
</div>
<div className="dost">
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>
</div>
</>;
}

export default Login;
