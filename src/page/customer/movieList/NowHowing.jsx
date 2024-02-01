import React, { useEffect, useState } from "react";
import "./NowHowing.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieByStatusUpComing } from "../../../redux/api/service/movieRequest";

function NowHowing() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(null);
  const [search, setSeach] = useState(null)
  const [movie, setMovie] = useState("");
  const listMovie = useSelector((state) => state.movies.movie.listMovieByStatus)
  console.log(listMovie);

  const hendleBus = (id) => {
    console.log(id);
  }

  useEffect(() => {
    getAllMovieByStatusUpComing(dispatch, page, search)
  }, [dispatch])
  return (
    listMovie &&
    <div>
      <div className="w-[70%] h-full  mx-auto ">
        <div className="flex justify-between px-2 border-b-2 border-black pb-3">
          <h1 className="text-3xl font-mono font-extrabold">PHIM ĐANG CHIẾU</h1>
          <Link to={"/comingsoon"}>
            <p className="text-lg font-mono font-medium text-gray-600">
              PHIM SẮP CHIẾU
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 px-3">
          {
            listMovie.content.map((movie, index) => {
              <div className="w-[240px] h-[450px]  mt-3" key={movie.id}>
                <img
                  className="w-[200px] h-[260px] object-cover mx-auto"
                  src={movie.movieImage}
                  alt=""
                />
                <div className="px-2 mt-1">
                  <h1 className="font-mono font-bold text-2xl">{movie.movieName}</h1>
                  <p className="font-mono">
                    <strong>Thể loại:</strong> {movie.rated}
                  </p>
                  <p className="font-mono">
                    <strong>Thời lượng:</strong> {movie.runningTime} phút
                  </p>
                  <p className="font-mono">
                    <strong>Khởi chiếu:</strong> {movie.releaseDate}
                  </p>
                </div>
                <div className="foot_booking mt-4">
                  <span></span>
                  <p>
                    <button className="btn-booking" onClick={hendleBus(movie.id)}>Mua vé</button>
                  </p>
                </div>
              </div>
            })
          }
        </div>
        <nav
          className="flex justify-center"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link text-gray-700"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NowHowing;
