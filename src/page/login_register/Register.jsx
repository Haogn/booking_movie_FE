import React from "react";

function Register() {
  return <>
  <div className="main-container col1-layout">
  <div className="main">
    <div className="col-main">
      <div className="account-wrap">
        <div className="col2-set">
          <div className="cgv-login-register-form">
            <div className="r-login">
              <h2>
                <span id="form-login-content">
                  <a href="/login">Đăng nhập</a>
                </span>
                <span id="form-register-content" className="active">
                  Đăng ký
                </span>
              </h2>
              <div className="cgvfc form-register-content">
                <form
                  className="cgv-signup-form"
                  name="cgv-signup-form"
                  id="cgv-signup-form"
                  method="post"
                  action="/register"
                >
                  <fieldset>
                    <label htmlFor="r-fname">
                      Tên<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="r-fname"
                      name="register_fullname"
                      className="input-text required-entry"
                      placeholder="Tên"
                      autoComplete="off"
                    />
                    <small
                      style={{ color: "red", fontStyle: "italic" }}
                    />
                    <label htmlFor="r-phone">
                      Số điện thoại<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="r-phone"
                      name="register_phone"
                      className="input-text required-entry"
                      placeholder="Số điện thoại"
                      autoComplete="off"
                    />
                    <small
                      style={{ color: "red", fontStyle: "italic" }}
                    />
                    <label htmlFor="r-email">
                      Email<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="r-email"
                      name="register_email"
                      className="input-text required-entry"
                      placeholder="Email"
                      autoComplete="off"
                    />
                    <small
                      style={{ color: "red", fontStyle: "italic" }}
                    />
                    <small
                      style={{ color: "red", fontStyle: "italic" }}
                    >
                      Email đã tồn tại, yêu cầu đăng nhập!!
                    </small>
                    <label htmlFor="r-password">
                      Mật khẩu<span>*</span>
                    </label>
                    <input
                      type="password"
                      id="r-password"
                      name="register_password"
                      className="input-text required-entry"
                      placeholder="Mật khẩu"
                      autoComplete="new-password"
                    />
                    <small
                      style={{ color: "red", fontStyle: "italic" }}
                    />
                    <label htmlFor="r-email">Tuổi</label>
                    <input
                      type="text"
                      id="age"
                      name="register_email"
                      className="input-text required-entry"
                      placeholder="Tuổi"
                      autoComplete="off"
                    />
                    <label htmlFor="r-fname" className="gender-title">
                      <span className="sp-gender">Giới tính</span>
                      <span>*</span>
                      <input
                        type="radio"
                        name="r-gender"
                        id="male-gender"
                        defaultValue={1}
                        defaultChecked=""
                      />{" "}
                      Nam
                      <input
                        type="radio"
                        name="r-gender"
                        id="female-gender"
                        defaultValue={0}
                      />{" "}
                      Nữ
                    </label>
                  </fieldset>
                  <div className="terms-register">
                    <label className="r-terms">
                      <input
                        type="checkbox"
                        defaultChecked="checked"
                        name="cgv-termsdob"
                        id="cgv-termsdob"
                        defaultValue="ok"
                      />
                      Xác nhận email chính xác và ngày sinh khớp với thông tin
                      trên CMND/CCCD. Nếu không trùng khớp, các thông tin này sẽ
                      không được hỗ trợ cập nhật thay đổi và có thể không được
                      hưởng các <a href="#">Quyền lợi thành viên</a>
                      <br />
                      <input
                        type="checkbox"
                        defaultChecked="checked"
                        name="cgv-terms"
                        id="cgv-terms"
                        defaultValue="ok"
                      />
                      Tôi đồng ý với <a href="#">Điều Khoản Sử Dụng Của CGV</a>{" "}
                    </label>
                    <input type="submit" defaultValue="Đăng ký" />
                  </div>
                  <div className="cgv-register-requirement" />
                </form>
              </div>
              <span id="error-validate" />
              <div id="correct" />
              <div id="seconds" />
            </div>
            <div className="l-login">
              <div id="slider-container">
                <div className="mySlides fade">
                  <img src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg" />
                </div>
                <div className="mySlides fade">
                  <img src="https://www.cgv.vn/media/wysiwyg/2020/1.jpg" />
                </div>
                <div className="mySlides fade">
                  <img src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg" />
                </div>
                {/* Next and previous buttons */}
                <a className="prev" onclick="plusSlides(-1)">
                  ❮
                </a>
                <a className="next" onclick="plusSlides(1)">
                  ❯
                </a>
              </div>
              {/* The dots/circles */}
              <div className="cgv-dots">
                <span className="dot" onclick="currentSlide(0)" />
                <span className="dot" onclick="currentSlide(1)" />
                <span className="dot" onclick="currentSlide(2)" />
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="banner-login-page"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>;
}

export default Register;
