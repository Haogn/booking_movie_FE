import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getMailling } from "../../redux/api/service/authRequest";


function Forgotpassword (){
const dispatch = useDispatch();
const [email,setEmail] = useState("");

const message = useSelector((state)=>state.auth.getMailling.message);
console.log(message);
const error = useSelector((state)=>state.auth.getMailling.error);


const handleMailing = (e)=> {
  e.preventDefault();
  const formData = {
    email: email,
  };
  getMailling(dispatch,formData);
}


return message ? (<div>
  <div className="flex w-[70%] h-[500px] mx-auto mt-3 ">
    <div className="w-[60%] h-full  pt-10">
      <h1 className="font-mono text-2xl font-bold text-center">
        Bạn muốn lấy lại mật khẩu ?
      </h1>
      <div className="w-[80%] h-full mx-auto">
        <div className="font-mono m-auto">{message}</div>
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
</div>): (
    <div>
    <div className="flex w-[70%] h-[500px] mx-auto mt-3 ">
      <div className="w-[60%] h-full  pt-10">
        <h1 className="font-mono text-2xl font-bold text-center">
          Bạn muốn lấy lại mật khẩu ?
        </h1>
        <div className="w-[80%] h-full mx-auto">
          <form action="" onSubmit={handleMailing}>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Email: <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
              
            </div>
            {error?( <span className="text-red-500">{error}</span>):(<></>)}
            <div className="flex mx-auto w-full justify-center gap-5">
              <button className=" font-medium text-xl font-mono pl-3 py-2 w-[30%] text-center text-white bg-red-500 rounded-md">
                Gửi
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

export default Forgotpassword;