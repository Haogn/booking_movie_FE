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
