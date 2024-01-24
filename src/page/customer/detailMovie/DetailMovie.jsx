import React from "react";
import "./DetailMovie.css";
function DetailMovie() {
  return (
    <div>
      <div className="w-screen h-[30px] bg-gray-100">
        <div className="mx-auto w-[70%] h-full py-[5px] flex gap-2">
          <div className="flex pt-[2px]">
            <i className="fa-solid fa-house-chimney"></i>{" "}
            <i className="fa-solid fa-angle-right opacity-30"></i>
          </div>
          <h4 className="font-black font-mono ">Tên phim</h4>
        </div>
      </div>
      {/* movie */}
      <div className="h-[500px] w-[70%] mx-auto">
        <div className="pb-[10px] py-[30px] border-b-2 border-gray-700 h-[80px]">
          <h1 className="text-3xl">NỘI DUNG PHIM</h1>
        </div>

        <div className="flex w-full h-[400px] my-3 gap-4">
          <div className="h-full w-[25%]">
            <img
              src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/w/aw-69k-700x1000.jpg"
              alt=""
            />
          </div>
          <div className="h-full">
            <h1 className="text-3xl mb-4 ">Mật Vụ Ong</h1>
            <p className="border-b-2 border-gray-400 w-[720px]"></p>

            <div className="flex flex-col gap-2 mt-3 ml-3">
              <p className="font-mono font-medium text-lg">
                <b>Đạo diễn</b> : <span className="font-normal">abc</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Diễn viên</b> : <span className="font-normal">abc</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Thể loại</b> : <span className="font-normal">abc</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Khởi chiếu</b> : <span className="font-normal">abc</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Thời lượng</b> : <span className="font-normal">abc</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b> Ngôn ngữ </b> : <span className="font-normal">abc</span>
              </p>
              <p>
                <div className="b">
                  <button className="booking-btn font-mono text-lg">
                    Mua vé <i className="fa-solid fa-ticket"></i>
                  </button>
                </div>
              </p>
            </div>

            <div className="mt-5"></div>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[200px] mx-auto ">
        <p className="font-mono text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          deserunt non atque fuga! Dolorum excepturi sint, eaque, officia
          perferendis vero quidem cumque magnam ullam dignissimos, corrupti
          itaque? Non, voluptatibus tenetur!
        </p>
      </div>
    </div>
  );
}

export default DetailMovie;
