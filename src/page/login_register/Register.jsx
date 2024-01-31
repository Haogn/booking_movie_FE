import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { registerUser } from "../../redux/api/service/authRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateBlank } from "../../components/validate/validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [errorName, setErrorName] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorDateOfBirth, setErrorDateOfBirth] = useState(null);

  const error = useSelector((state) => state.auth.register.error);

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateBlank(username)) {
      setErrorName("Tài khoản không được để trống.");
      return;
    }

    if (validateBlank(email)) {
      setErrorEmail("Email không được để trống.");
      return;
    }

    if (validateBlank(phone)) {
      setErrorPhone("Số điện thoại không được để trống.");
      return;
    }

    if (validateBlank(password)) {
      setErrorPassword("Mật khẩu không được để trống.");
      return;
    }

    if (validateBlank(dateOfBirth)) {
      setErrorDateOfBirth("Ngày sinh không được để trống.");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      phone: phone,
      password: password,
      dateOfBirth: dateOfBirth,
    };
    registerUser(newUser, dispatch, navigate, toast);
  };

  return (
    <div>
      <div className="flex w-[70%] h-[700px] mx-auto mt-3 ">
        <div className="w-[60%] h-full  pt-10">
          <h1 className="font-mono text-2xl font-bold text-center">Đăng Ký</h1>
          <div className="w-[80%] h-full mx-auto">
            <form action="" onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Tên đăng nhập: <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                />
                {errorName && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorName}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại: <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  id="phone"
                />
                {errorPhone && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorPhone}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Email: <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                  id="email"
                />
                {errorEmail && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorEmail}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Ngày sinh: <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                />
                {errorDateOfBirth && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorDateOfBirth}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Mật khẩu: <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                />
                {errorPassword && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorPassword}
                  </span>
                )}
              </div>
              {error ? (
                <p className="text-red-500 font-mono font-medium text-center mb-2">
                  {error.data}
                </p>
              ) : (
                <></>
              )}
              <button className="font-medium text-xl font-mono pl-3 py-2 w-[100%] text-center text-white bg-red-500 rounded-md">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <div className="w-[40%] h-full  ">
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
        <ToastContainer className="custom-toast-container" />
      </div>
    </div>
  );
}

export default Register;
