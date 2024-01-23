import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCustomer from "../customer/HomeCustomer";
import IndexCustomer from "../customer/IndexCustomer";
import Login from "../login_register/Login";
import Detail from "../customer/Detail";
import Register from "../login_register/Register";
import IndexProfile from "../customer/IndexProfile";
import Point from "../customer/Point";
import Profile from "../customer/Profile";
import LayoutAdmin from "../../components/admin/page/LayoutAdmin";
import LoginAdmin from "../../components/admin/page/LoginAdmin";
import HistoryBooking from "../customer/HistoryBooking";
import Notification from "../customer/Notification";
import ChangePassword from "../customer/ChangePassword";

function Routers() {
  return (
    <div>
      <Routes>
        {/* Customer */}
        <Route path="/" element={<IndexCustomer />}>
          <Route index element={<HomeCustomer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/history" element={<HistoryBooking />}></Route>
          <Route path="/profile" element={<IndexProfile />}>
            <Route index element={<Profile />}></Route>
            <Route path="/profile/point" element={<Point />}></Route>
            <Route path="/profile/history" element={<HistoryBooking />}></Route>
            <Route
              path="/profile/changePassword"
              element={<ChangePassword />}
            ></Route>
            <Route
              path="/profile/notification"
              element={<Notification />}
            ></Route>
          </Route>
        </Route>

        <Route></Route>

        {/* register */}
        <Route></Route>

        {/* Admin */}
        <Route></Route>

        {/* Management */}
        <Route></Route>

        {/* Management */}
        <Route></Route>

        {/* Emplpyee */}
        <Route></Route>

        {/* admin */}
        {/*         
        <Route path="/admin" element={<IndexAdmin />}>
          <Route index element={<LayoutAdmin />}></Route>
          <Route path="/admin/add-user" element={<Login />}></Route>
       
        </Route> */}
        <Route path="/admin/test" element={<LayoutAdmin />}></Route>
        <Route path="/admin/login" element={<LoginAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default Routers;
