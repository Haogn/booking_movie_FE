import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function IndexProfile() {
  const [selectedTab, setSelectedTab] = useState("details"); // Default selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="w-[70%] h-[700px] mx-auto mt-4 ">
        <div className="flex w-full h-full gap-3">
          <div className="h-full w-[25%]  pl-2 ">
            <h1 className="text-3xl font-medium font-sans text-red-600 text-center ">
              TÀI KHOẢN CGV
            </h1>
            <div className="flex flex-col gap-3 mt-3">
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "details"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("details")}
              >
                <Link to={"/profile"}>CHI TIẾT TÀI KHOẢN</Link>
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "changepassword"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("changepassword")}
              >
                <Link to={"/profile/changePassword"}>THAY ĐỔI MẬT KHẨU</Link>
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "points"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("points")}
              >
                <Link to="/profile/point"> ĐIỂM THƯỞNG</Link>
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "transactions"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("transactions")}
              >
                <Link to={"/profile/history"}>LỊCH SỬ GIAO DỊCH</Link>
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "notification"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("notification")}
              >
                <Link to={"/profile/notification"}>KHUYẾN MÃI CỦA BẠN</Link>
              </p>
            </div>
          </div>
          <div className="h-full w-[75%] ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexProfile;
