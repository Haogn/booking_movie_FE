import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getNotifications } from "../../redux/api/service/customerRequest";

function IndexProfile() {

  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("details"); // Default selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const notifications = useSelector((state)=>state.customer.getNotifications.listNotification)
useEffect(()=>{
  getNotifications(dispatch,token)
},[dispatch,token])

let unreadCount = 0;
if (notifications) {
   unreadCount = notifications.filter(notification => !notification.read).length;
  console.log(unreadCount); // Đây là số lượng thông báo chưa đọc
}

  return notifications ? (
    <div>
      <div className="w-[80%] h-full mx-auto py-auto pt-2">
        <div className="w-[70%] h-full mx-auto py-auto ">
          <div className="flex w-full h-full gap-4">
            <div className="h-full w-[30%]  pl-2 ">
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

                <div
                  className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 relative ${
                    selectedTab === "notification"
                      ? "text-white bg-red-500 py-2 rounded-md"
                      : ""
                  }`}
                  onClick={() => handleTabClick("notification")}
                >
                  <p>
                    <Link to={"/profile/notification"}>THÔNG BÁO</Link>
                  </p>
                  <p className="bg-red-50 absolute top-[-15px] right-[-7px] text-black w-[35px] h-[35px] rounded-[50%]  text-center ">
                    <i className="fa-solid fa-bell text-sm"> {unreadCount}</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-[70%] ">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):(<>
  </>);
}

export default IndexProfile;
