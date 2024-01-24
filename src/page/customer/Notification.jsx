import React from "react";

function Notification() {
  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thông báo
      </div>
      <div className="w-[80%] h-[500px] mx-auto  mt-3 ">
        <div className="flex">
          <div className="font-mono font-medium mt-2 pl-2">
            <p>
              <span>
                <i className="fa-solid fa-envelope-open"></i>
                <i className="fa-solid fa-envelope"></i>
              </span>{" "}
              Bạn nhận được 1 voucher giá trị 200.000 VNĐ. Có hiệu lực từ ngày
              ... đến ... . Chương trình áp lục cho tất cả các phim . Chào bạn
              !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
