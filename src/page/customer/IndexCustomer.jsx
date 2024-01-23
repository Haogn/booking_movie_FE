import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavbarCustomer from "../../components/navbar/NavbarCustomer";

function IndexCustomer() {
  return (
    <div className="body">
      <div className="">
        <img
          className="w-[70%] mx-auto"
          src="https://advserver.cgv.vn/www/images/4071dd3a3df0579d220dad28e9c08679.jpg"
        />
      </div>
      <NavbarCustomer />
      <div className="py-10">
        <Outlet></Outlet>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default IndexCustomer;
