import React from "react";
import "./DetailMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function DetailMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const movie = useSelector((state) => state.movies.movie.currentMovie);
  console.log("movie", movie);
  return (
    <div>
      <div className="w-screen h-[30px] bg-gray-100">
        <div className="mx-auto w-[70%] h-full py-[5px] flex gap-2">
          <div className="flex pt-[2px] gap-2">
            <i className="fa-solid fa-house-chimney"></i>{" "}
            <i className="fa-solid fa-angle-right opacity-80"></i>
          </div>
          <h4 className="font-black font-mono ">{movie.movieName}</h4>
        </div>
      </div>
      {/* movie */}
      <div className="h-[500px] w-[70%] mx-auto">
        <div className="pb-[10px] py-[30px] border-b-2 border-gray-700 h-[80px]">
          <h1 className="text-3xl">NỘI DUNG PHIM</h1>
        </div>

        <div className="flex w-full h-[400px] my-3 gap-4">
          <div className="h-full w-[25%]">
            <img
              className="w-full h-full object-contain"
              src={movie.movieImage}
              alt=""
            />
          </div>
          <div className="h-full">
            <h1 className="text-3xl mb-4 ">{movie.movieName}</h1>
            <p className="border-b-2 border-gray-400 w-[770px]"></p>

            <div className="flex flex-col gap-2 mt-3 ml-3">
              <p className="font-mono font-medium text-lg">
                <b>Đạo diễn</b> :{" "}
                <span className="font-normal">{movie.director}</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Diễn viên</b> :{" "}
                <span className="font-normal">{movie.cast}</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Thể loại</b> :{" "}
                <span className="font-normal">
                  {movie.genreName.map((item) => item + " ,")}
                </span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Khởi chiếu</b> :{" "}
                <span className="font-normal">{movie.releaseDate}</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b>Thời lượng</b> :{" "}
                <span className="font-normal">{movie.runningTime} phút</span>
              </p>
              <p className="font-mono font-medium text-lg">
                <b> Ngôn ngữ </b> :{" "}
                <span className="font-normal">{movie.language}</span>
              </p>
              <p>
                <div className="b">
                  <button className="booking-btn font-mono text-lg">
                    Mua vé <i className="fa-solid fa-ticket"></i>
                  </button>
                </div>
              </p>
            </div>

            <div className="mt-5"></div>
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[200px] mx-auto ">
        <p className="font-mono text-lg">{movie.description}</p>
      </div>
    </div>
  );
}

export default DetailMovie;
