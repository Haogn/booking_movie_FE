
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import { loginUser } from "../../redux/api/service/authRequest";


function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();




  // useEffect(() => {
  //   handleGetCaptcha();
  // }, []); 


  // const  handleGetCaptcha = async () => {
  //   try {
  //     const resp = await axios
  //     .get("http://localhost:6789/api/booking/v1/auth/captcha")
  //     console.log(resp)
  //     if (resp && resp.data) {
  //       setCaptcha(resp.data);
  //       setError(""); 
  //     } else {
  //       setError("Không có dữ liệu captcha"); 
  //     }
  //   } catch(err) {
  //       console.error(err);
  //       setError(err.response?.data || "Có lỗi xảy ra khi lấy captcha");
  //   }
  // };
  
  const handleLogin = (e)=>{
    e.preventDefault();
    const user = {
      username : username,
      password : password,
    }
    loginUser(user,dispatch,navigate)
  }

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
                  onChange={(e)=>setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Mật khẩu: <span className="text-red-400">*</span>
                </label>
                <input
                 onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="username"
                  name="password"
                  autoComplete="password"
                />
              </div>
              <div className="flex justify-between">
                {/* <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Vui lòng nhập ký tự bên dưới:{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={handleChangeInput}
                    type="text"
                    className="form-control"
                    id="captcha"
                    name="captcha"
                  />
                  <button
                    className="ml-2"
                    onClick={handleGetCaptcha}
                    type="button"
                  >
                    Lấy Mã Captcha
                  </button>
                </div>
                <div className="mb-3">
                  <label className="form-label font-mono font-semibold">
                    Mã xác nhận: <span className="text-red-400">*</span>
                  </label>
                  <p className="font-mono font-bold text-xl">{captcha}</p>
                </div> */}
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
