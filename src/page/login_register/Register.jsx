import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Register() {
  return (
    <div>
      <div className="flex w-[70%] h-[700px] mx-auto ">
        <div className="w-[60%] h-full  pt-10">
          <h1 className="font-mono text-2xl font-bold text-center">Đăng Ký</h1>
          <div className="w-[80%] h-full mx-auto">
            <form action="">
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Tên đăng nhập: <span className="text-red-400">*</span>
                </label>
                <input type="text" className="form-control" id="input1" />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Số điện thoại: <span className="text-red-400">*</span>
                </label>
                <input type="text" className="form-control" id="input1" />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Email: <span className="text-red-400">*</span>
                </label>
                <input type="text" className="form-control" id="input1" />
              </div>

              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Ngày sinh: <span className="text-red-400">*</span>
                </label>
                <input type="date" className="form-control" id="input1" />
              </div>
              <div className="mb-3">
                <label className="form-label font-mono font-semibold">
                  Mật khẩu: <span className="text-red-400">*</span>
                </label>
                <input type="password" className="form-control" id="input1" />
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
      </div>
    </div>
  );
}

export default Register;
