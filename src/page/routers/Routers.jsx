import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCustomer from "../customer/HomeCustomer";
import IndexCustomer from "../customer/IndexCustomer";
import Login from "../login_register/Login";
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
import ProtectedRoute from "./ProtectedRoute";
import NowHowing from "../customer/movieList/NowHowing";
import EditLocation from "../admin/edit/EditLocation";
import EditTheater from "../admin/edit/EditTheater";
import EditRoom from "../admin/edit/EditRoom";
import EditTime from "../admin/edit/EditTime";
import EditGenre from "../admin/edit/EditGenre";
import EditMovie from "../admin/edit/EditMovie";
import EditDrinks from "../admin/edit/EditDrinks";
import ListEvent from "../admin/list/ListEvent";
import EditEvent from "../admin/edit/EditEvent";
import Payment from "../customer/Payment";
import Forgotpassword from "../customer/Forgotpassword";
import RetrievalPassword from "../customer/RetrievalPassword";
import PaymentSuccess from "../customer/PaymentSuccess";
import IndexDashboard from "../admin/dashboard/IndexDashboard";
import RevenueByTheater from "../admin/dashboard/RevenueByTheater";
import RevenueByMovie from "../admin/dashboard/RevenueByMovie";
import RevenueByTime from "../admin/dashboard/RevenueByTime";
import Event from "../customer/Event";

function Routers() {
  return (
    <div>
      <Routes>
        {/* Customer */}
        <Route path="/" element={<IndexCustomer />}>
          <Route index element={<HomeCustomer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/retrievalPassword" element={<RetrievalPassword />} />
          <Route path="/detail" element={<DetailMovie />} />
          <Route path="/event" element={<Event />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/nowhowing" element={<NowHowing />} />
          <Route path="/history" element={<HistoryBooking />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/booking" element={<BookingOnline />}>
            <Route index element={<BookingChair />} />
            {/* <Route path="/booking/dish" element={<BookingChair/>}/> */}
            <Route path="/booking/dish" element={<BookingDish />} />
            <Route path="/booking/payment" element={<Payment />} />
          </Route>
          <Route path="/profile" element={<IndexProfile />}>
            <Route index element={<Profile />} />
            <Route path="/profile/point" element={<Point />} />
            <Route path="/profile/history" element={<HistoryBooking />} />
            <Route
              path="/profile/changePassword"
              element={<ChangePassword />}
            />
            <Route path="/profile/notification" element={<Notification />} />
          </Route>
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<IndexDashboard />} />
          <Route path="/admin/revenue-theater" element={<RevenueByTheater />} />
          <Route path="/admin/revenue-movie" element={<RevenueByMovie />} />
          <Route path="/admin/revenue-time" element={<RevenueByTime />} />
          <Route path="/admin/create-account" element={<CreateAccount />} />
          <Route path="/admin/create-coupons/:id" element={<CreateCoupons />} />
          <Route path="/admin/create-event" element={<CreateEvent />} />
          <Route path="/admin/list-event" element={<ListEvent />} />
          <Route path="/admin/edit-event" element={<EditEvent />} />
          <Route path="/admin/list-management" element={<ListManagement />} />
          <Route path="/admin/list-employ" element={<ListEmploy />} />
          <Route path="/admin/list-customer" element={<ListCustomer />} />
          <Route path="/admin/create-location" element={<CreateLocation />} />
          <Route path="/admin/edit-location" element={<EditLocation />} />
          <Route path="/admin/list-location" element={<ListLocation />} />
          <Route path="/admin/create-theater" element={<CreateTheater />} />
          <Route path="/admin/edit-theater" element={<EditTheater />} />
          <Route path="/admin/list-theater" element={<ListTheater />} />
          <Route path="/admin/create-room" element={<CreateRoom />} />
          <Route path="/admin/edit-room" element={<EditRoom />} />
          <Route path="/admin/list-room" element={<ListRoom />} />
          <Route path="/admin/create-time" element={<CreateTimeSlot />} />
          <Route path="/admin/edit-time" element={<EditTime />} />
          <Route path="/admin/list-time" element={<ListTimeSlot />} />
          <Route path="/admin/create-genre" element={<CreateGenre />} />
          <Route path="/admin/edit-genre" element={<EditGenre />} />
          <Route path="/admin/list-genre" element={<ListGenre />} />
          <Route path="/admin/create-movie" element={<CreateMovie />} />
          <Route path="/admin/edit-movie" element={<EditMovie />} />
          <Route path="/admin/list-movie" element={<ListMovie />} />
          <Route path="/admin/create-food" element={<CreateDrinks />} />
          <Route path="/admin/edit-food" element={<EditDrinks />} />
          <Route path="/admin/list-food" element={<ListDrinks />} />
          <Route path="/admin/profile" element={<ProfoleAccount />} />
        </Route>

        {/* Management */}
        <Route />

        {/* Emplpyee */}
        <Route />
      </Routes>
    </div>
  );
}

export default Routers;
