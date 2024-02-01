import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavbarCustomer from "../../components/navbar/NavbarCustomer";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieSelect } from "../../redux/api/service/movieRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function IndexCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listMovie = useSelector((state) => state.movies.movie.listMovieSelect);
  

  useEffect(() => {
    getAllMovieSelect(dispatch);
  }, [dispatch]);

  console.log("listMovie", listMovie);
  return (
    <div className="body">
      <div className="">
        <img
          className="w-[70%] mx-auto"
          src="https://advserver.cgv.vn/www/images/4071dd3a3df0579d220dad28e9c08679.jpg"
        />
      </div>
      <NavbarCustomer />
      <div className="pb-10">
        <ToastContainer className="custom-toast-container" />
        <Outlet></Outlet>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default IndexCustomer;
