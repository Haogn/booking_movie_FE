import React from "react";
import Button from "react-bootstrap/Button";

function Detail() {
  return (
    <div>
      <div className="w-screen h-[30px] bg-slate-200">
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
        <div className="pb-[10px] py-[30px] border-b-4 border-gray-700 h-[80px]">
          <h1 className="text-3xl">NỘI DUNG PHIM</h1>
        </div>

        <div className="flex w-full h-[400px] my-3 gap-4">
          <div className="h-full w-[30%]">
            <img
              className="w-full h-full"
              src="../../../public/image/matvuong.jpeg"
              alt=""
            />
          </div>
          <div className="h-full">
            <h1 className="text-3xl mb-4 ">Mật Vụ Ong</h1>
            <p className="border-b-2 border-gray-400 w-[720px]"></p>

            <div className="flex flex-col gap-3 mt-3 ml-3">
              <p className="font-medium">
                Đạo diễn : <span>.......</span>
              </p>
              <p className="font-medium">
                Diễn viên : <span>.......</span>
              </p>
              <p className="font-medium">
                Thể loại : <span>.......</span>
              </p>
              <p className="font-medium">
                Khởi chiếu : <span>.......</span>
              </p>
              <p className="font-medium">
                Thời lượng : <span>.......</span>
              </p>
              <p className="font-medium">
                Ngôn ngữ : <span>.......</span>
              </p>
            </div>

            <div className="mt-5">
              <Button
                variant="outline-light"
                className="text-red-800 font-bold text-xl"
              >
                Mua vé
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[200px] mx-auto ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          deserunt non atque fuga! Dolorum excepturi sint, eaque, officia
          perferendis vero quidem cumque magnam ullam dignissimos, corrupti
          itaque? Non, voluptatibus tenetur!
        </p>
      </div>
    </div>
  );
}

export default Detail;
