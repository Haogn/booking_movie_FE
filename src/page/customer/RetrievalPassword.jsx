import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { retrievalPassword } from "../../redux/api/service/authRequest";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RetrievalPassword (){
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [verification,setVerification] = useState("");
  const dispatch = useDispatch();


const currentUrl = window.location.href;
const urlParams = new URLSearchParams(new URL(currentUrl).search);
const email = urlParams.get('email');

const messageSuccess = useSelector((state)=>state.auth.retrieval.message) 
const errorRetrieval = useSelector((state)=>state.auth.retrieval.errorRetrieval) 

const handleRetrieval = (e)=>{
  e.preventDefault();

  const newPassForm = {
    password: password,
    confirmPassword: confirmPassword,
    verification: verification,
  }
  retrievalPassword(dispatch, newPassForm,email)
}

return  messageSuccess?(   <div>
  <div className="flex w-[70%] h-[500px] mx-auto mt-3 ">
    <div className="w-[60%] h-full  pt-10">
      <h1 className="font-mono text-2xl font-bold text-center">
        {messageSuccess}
      </h1>
      <div className="w-[80%] h-full mx-auto">
      <div className="flex mx-auto w-full justify-center gap-5">
              <Link to={"/login"} className=" font-medium text-xl font-mono pl-3 py-2 w-[50%] text-center text-white bg-red-500 rounded-md">
                Tới Trang Đăng Nhập
              </Link>
            </div>
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
</div>):(
    <div>
    <div className="flex w-[70%] h-[500px] mx-auto mt-3 ">
      <div className="w-[60%] h-full  pt-10">
        <h1 className="font-mono text-2xl font-bold text-center">
          Đặt Lại Mật Khẩu
        </h1>
        <div className="w-[80%] h-full mx-auto">
          <form action="" onSubmit={handleRetrieval}>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Mật khẩu mới : <span className="text-red-400">*</span>
              </label>
              <input             
                type="text"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Nhập lại mật khẩu mới : <span className="text-red-400">*</span>
              </label>
              <input             
                type="text"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Mã xác nhận : <span className="text-red-400">*</span>
              </label>
              <input             
                type="text"
                className="form-control"
                id="verification"
                name="verification"
                onChange={(e) => setVerification(e.target.value)}

              />
            </div>
            {errorRetrieval && (
                  <span className="text-red-500">{errorRetrieval}</span>
                )}
          
            <div className="flex mx-auto w-full justify-center gap-5">
              <button className=" font-medium text-xl font-mono pl-3 py-2 w-[30%] text-center text-white bg-red-500 rounded-md">
                ĐẶT LẠI
              </button>
            </div>
          </form>
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
)
}

export default RetrievalPassword;