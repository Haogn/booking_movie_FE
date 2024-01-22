import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavbarCustomer from "../../components/navbar/NavbarCustomer";

function IndexCustomer() {
  return (
    <div className="body">
      <div className="flex justify-center">
        <img
          className="w-[70%]"
          src="https://advserver.cgv.vn/www/images/4071dd3a3df0579d220dad28e9c08679.jpg"
        />
      </div>
      <NavbarCustomer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default IndexCustomer;
