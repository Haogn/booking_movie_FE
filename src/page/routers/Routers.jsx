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
import HistoryBooking from "../customer/HistoryBooking";
import Notification from "../customer/Notification";
import ChangePassword from "../customer/ChangePassword";
import CreateAccount from "../admin/create/CreateAccount";
import ListManagement from "../admin/list/ListManagement";
import ListEmploy from "../admin/list/ListEmploy";
import LayoutAdmin from "../admin/LayoutAdmin";
import CreateLocation from "../admin/create/CreateLocation";
import ListLocation from "../admin/list/ListLocation";
import CreateTheater from "../admin/create/CreateTheater";
import ListTheater from "../admin/list/ListTheater";
import CreateRoom from "../admin/create/CreateRoom";
import ListRoom from "../admin/list/ListRoom";
import CreateTimeSlot from "../admin/create/CreateTimeSlot";
import ListTimeSlot from "../admin/list/ListTimeSlot";
import CreateGenre from "../admin/create/CreateGenre";
import ListGenre from "../admin/list/ListGenre";
import CreateMovie from "../admin/create/CreateMovie";
import ListMovie from "../admin/list/ListMovie";
import CreateDrinks from "../admin/create/CreateDrinks";
import ListDrinks from "../admin/list/ListDrinks";
import CreateCoupons from "../admin/create/CreateCoupons";
import CreateEvent from "../admin/create/CreateEvent";
import ListCustomer from "../admin/list/ListCustomer";
import ProfoleAccount from "../admin/ProfoleAccount";
import DetailMovie from "../customer/detailMovie/DetailMovie";
import BookingOnline from "./../customer/bookingOnline/BookingOnline";
import BookingChair from "./../customer/bookingOnline/BookingChair";
import BookingDish from "./../customer/bookingOnline/BookingDish";
import ComingSoon from "./../customer/movieList/ComingSoon";
import ProtectedRoute from './ProtectedRoute';

function Routers() {
  return (
    <div>
      <Routes>
        {/* Customer */}
        <Route path="/" element={<IndexCustomer />}>
          <Route index element={<HomeCustomer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/detail" element={<DetailMovie />}></Route>
          <Route path="/history" element={<HistoryBooking />}></Route>
          <Route path="/list-movie" element={<ComingSoon />}></Route>
          <Route path="/booking" element={<BookingOnline />}>
            <Route index element={<BookingChair />}></Route>
            {/* <Route path="/booking/dish" element={<BookingChair/>}></Route> */}
            <Route path="dish" element={<BookingDish />}></Route>
          </Route>
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
        {/* Admin */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<ListCustomer />}></Route>
          <Route
            path="/admin/create-account"
            element={<CreateAccount />}
          ></Route>
          <Route
            path="/admin/create-coupons"
            element={<CreateCoupons />}
          ></Route>
          <Route path="/admin/create-event" element={<CreateEvent />}></Route>
          <Route
            path="/admin/list-management"
            element={<ListManagement />}
          ></Route>
          <Route path="/admin/list-employ" element={<ListEmploy />}></Route>
          <Route path="/admin" element={<ListCustomer />}></Route>
          <Route
            path="/admin/create-location"
            element={<CreateLocation />}
          ></Route>
          <Route path="/admin/list-location" element={<ListLocation />}></Route>
          <Route
            path="/admin/create-theater"
            element={<CreateTheater />}
          ></Route>
          <Route path="/admin/list-theater" element={<ListTheater />}></Route>
          <Route path="/admin/create-room" element={<CreateRoom />}></Route>
          <Route path="/admin/list-room" element={<ListRoom />}></Route>
          <Route path="/admin/create-time" element={<CreateTimeSlot />}></Route>
          <Route path="/admin/list-time" element={<ListTimeSlot />}></Route>
          <Route path="/admin/create-genre" element={<CreateGenre />}></Route>
          <Route path="/admin/list-genre" element={<ListGenre />}></Route>
          <Route path="/admin/create-movie" element={<CreateMovie />}></Route>
          <Route path="/admin/list-movie" element={<ListMovie />}></Route>
          <Route path="/admin/create-food" element={<CreateDrinks />}></Route>
          <Route path="/admin/list-food" element={<ListDrinks />}></Route>
          <Route path="/admin/profile" element={<ProfoleAccount />}></Route>
        </Route>

        {/* Management */}
        <Route></Route>

        {/* Emplpyee */}
        <Route></Route>
      </Routes>
    </div>
  );
}

export default Routers;
