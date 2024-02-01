import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllGenreSelect } from "../../../redux/api/service/genreRequest";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";
import { createMovie } from "./../../../redux/api/service/movieRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const listGenre = useSelector((state) => state.genres.genre.listGenreSelect);
  const error = useSelector((state) => state.movies.movie.error);

  useEffect(() => {
    getAllGenreSelect(dispatch, token);
  }, [dispatch, token]);

  // console.log("listGenre", listGenre);
  const [nameMovie, setNameMovie] = useState("");
  const [imageMovie, setImageMovie] = useState();
  const [price, setPrice] = useState();
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [description, setDescription] = useState("");
  const [runningTime, setRunningTime] = useState();
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState("");
  const [releaseDate, setReleaseDate] = useState();
  const [stopDate, setStopDate] = useState();

  const [errorNameMovie, setErrorName] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorDirector, setErrorDirector] = useState("");
  const [errorCast, setErrorCast] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorRunningTime, setErrorRunningTime] = useState("");
  const [errorGenre, setErrorGenre] = useState("");
  const [errorLanguage, setErrorLanguage] = useState("");
  const [errorReleaseDate, setErrorReleaseDate] = useState("");
  const [errorStopDate, setErrorStopDate] = useState("");

  // console.log(genre);
  const handleCreateMovie = (e) => {
    e.preventDefault();
    if (validateBlank(nameMovie)) {
      setErrorName("Tên phim không được để trống.");
      return;
    }

    if (validateBlank(director)) {
      setErrorDirector("Tên đạo diễn không được để trống.");
      return;
    }

    if (validateNumber(price)) {
      setErrorPrice("Giá vé không thể âm");
      return;
    }

    if (validateNumber(runningTime)) {
      setErrorRunningTime("Thời gian phim không thể âm");
      return;
    }

    if (validateNumber(releaseDate)) {
      setErrorReleaseDate("Ngày phim không thể âm");
      return;
    }
    if (validateNumber(stopDate)) {
      setErrorStopDate("Ngày kết thúc phim không thể âm");
      return;
    }
    if (validateBlank(cast)) {
      setErrorCast("Tên diễn viên không được để trống.");
      return;
    }

    if (validateBlank(description)) {
      setErrorDescription("Mô tả phim không được để trống.");
      return;
    }

    if (validateBlank(language)) {
      setErrorLanguage("Ngôn ngữ phim không được để trống.");
      return;
    }

    if (genre === null) {
      setErrorGenre("Chọn thể loại phim");
      return;
    }
    if (imageMovie === null) {
      setErrorImage("Hình ảnh phim không được để trống.");
      return;
    }

    let formMovie = new FormData();
    formMovie.append("movieName", nameMovie);
    formMovie.append("movieImage", imageMovie);
    formMovie.append("price", price);
    formMovie.append("director", director);
    formMovie.append("cast", cast);
    formMovie.append("description", description);
    formMovie.append("runningTime", runningTime);
    formMovie.append("genreId", genre);
    formMovie.append("language", language);
    formMovie.append("releaseDate", releaseDate);
    formMovie.append("stopDate", stopDate);

    createMovie(token, formMovie, dispatch, navigate, toast);
    setNameMovie("");
    setImageMovie("");
    setPrice("");
    setDirector("");
    setCast("");
    setDescription("");
    setRunningTime("");
    setGenre([]);
    setLanguage("");
    setReleaseDate("");
    setStopDate("");
  };

  return (
    <div>
      <div className="w-[90%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới phim
        </h1>
        <form action="" onSubmit={handleCreateMovie}>
          <div className="row">
            {/* Cột 1 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Tên phim: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên phim"
                  value={nameMovie}
                  onChange={(e) => setNameMovie(e.target.value)}
                />
                {errorNameMovie && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorNameMovie}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Hình ảnh: <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImageMovie(e.target.files[0])}
                />
                {errorImage && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorImage}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Giá vé: <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Giá vé"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                {errorPrice && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorPrice}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Đạo diễn: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Đạo diễn"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
                {errorDirector && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorDirector}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Diễn viên: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Diễn viên"
                  value={cast}
                  onChange={(e) => setCast(e.target.value)}
                />
                {errorCast && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorCast}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Mô tả: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mô tả"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errorDescription && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorDescription}
                  </span>
                )}
              </div>
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Thời lượng: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Thời lượng ( Phút )"
                  value={runningTime}
                  onChange={(e) => setRunningTime(Number(e.target.value))}
                />
                {errorRunningTime && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorRunningTime}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngày khởi chiếu: <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />
                {errorReleaseDate && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorReleaseDate}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngày kết thúc: <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={stopDate}
                  onChange={(e) => setStopDate(e.target.value)}
                />
                {errorStopDate && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorStopDate}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Ngôn ngữ: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ngôn ngữ"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                {errorLanguage && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorLanguage}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="form-label font-mono font-semibold">
                  Thể loại: <span className="text-red-500">*</span>
                </label>
                {listGenre?.map((item) => (
                  <div key={item.id} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={(e) =>
                        setGenre([...genre, Number(e.target.value)])
                      }
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.genreName}
                    </label>
                  </div>
                ))}
                {errorGenre && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorGenre}
                  </span>
                )}
              </div>
            </div>
          </div>
          {error ? (
            <p className="text-red-500 font-mono font-medium text-center mb-2">
              {error.data}
            </p>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="btn btn-dark font-mono mb-4 text-gray-950"
          >
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMovie;
