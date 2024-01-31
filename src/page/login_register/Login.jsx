import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/api/service/authRequest";
import { resetError } from "../../redux/reducers/authSlice";
import { validateBlank } from "../../components/validate/validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.login.error);
  console.log("error", error);

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorUsername(null);
    setErrorPassword(null);
    if (validateBlank(username)) {
      setErrorUsername("Tài khoản không được để trống.");
      return;
    }
    if (validateBlank(password)) {
      setErrorPassword("Mật khẩu không được để trống.");
      return;
    }
    dispatch(resetError());
    const user = {
      username: username,
      password: password,
    };
    loginUser(user, dispatch, navigate, toast);
  };

  return (
    <div>
      <div className="flex w-[70%] h-[500px] mx-auto mt-3 ">
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
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                />
                {errorUsername && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorUsername}
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
                  name="password"
                  autoComplete="password"
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

              <div className="flex justify-between">               
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
              <Link to="/forgotpassword">Tôi muốn lấy lại mật khẩu ? </Link>
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
        <ToastContainer className="custom-toast-container" />
      </div>
    </div>
  );
}

export default Login;
