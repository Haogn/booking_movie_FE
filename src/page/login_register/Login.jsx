import React from "react";
import "./Login.css";

function Login() {
  return <> 
<div className="login-box">
  <div>
    <div className="title">
    <div className="login">
      ĐĂNG NHẬP
    </div>
    <div className="register">
      ĐĂNG KÝ
    </div>
    </div>
    <form className="form">
      <label id="username">Tài khoản: </label>
      <input id="username" className="username" placeholder="Tài khoản"/>
      <label id="password">Mật khẩu: </label>
      <input id="password" className="password" placeholder="Mật khẩu"/>
      <div>
        <label id="captcha">Vui lòng nhập kí tự bên dưới</label>
        <input id="captcha" className="captcha" />
        <div className="captcha-box">
          <div className="captcha-change"><image src="https://www.cgv.vn/skin/frontend/base/default/images/reload.png" /></div>
          <div className="captcha">123456</div>
        </div>
        <div className="w-[40%] h-full bg-slate-400 "></div>
      </div>
    </div>
  );
}

export default Login;
