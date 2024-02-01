import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editMovie } from "../../../redux/api/service/movieRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateBlank,
  validateNumber,
} from "../../../components/validate/validation";

function EditMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const movie = useSelector((state) => state.movies.movie.currentMovie);
  const listGenre = useSelector((state) => state.genres.genre.listGenreSelect);
  const error = useSelector((state) => state.movies.movie.error);

  const [imageMovie, setImageMovie] = useState();
  const [genre, setGenre] = useState(movie?.genreId || []);

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

  console.log("movie", movie);

  const handleEditMovie = (e) => {
    e.preventDefault();
    if (validateBlank(e.target.movieName.value)) {
      setErrorName("Tên phim không được để trống.");
      return;
    }

    if (validateBlank(e.target.director.value)) {
      setErrorDirector("Tên đạo diễn không được để trống.");
      return;
    }

    if (validateNumber(e.target.price.value)) {
      setErrorPrice("Giá vé không thể âm");
      return;
    }

    if (validateNumber(e.target.runningTime.value)) {
      setErrorRunningTime("Thời gian phim không thể âm");
      return;
    }

    if (validateBlank(e.target.cast.value)) {
      setErrorCast("Tên diễn viên không được để trống.");
      return;
    }

    if (validateBlank(e.target.description.value)) {
      setErrorDescription("Mô tả phim không được để trống.");
      return;
    }

    if (validateBlank(e.target.language.value)) {
      setErrorLanguage("Ngôn ngữ phim không được để trống.");
      return;
    }

    if (genre === null) {
      setErrorGenre("Chọn thể loại phim");
      return;
    }
    if (imageMovie === null) {
      setErrorImage("Hình ảnh chưa được chọn");
      return;
    }

    // if (imageMovie === null) {
    //   setImageMovie(movie?.movieImage);
    // }

    let formEditMovie = new FormData();
    formEditMovie.append("movieName", e.target.movieName.value);
    formEditMovie.append("movieImage", imageMovie);
    formEditMovie.append("price", Number(e.target.price.value));
    formEditMovie.append("director", e.target.director.value);
    formEditMovie.append("cast", e.target.cast.value);
    formEditMovie.append("description", e.target.description.value);
    formEditMovie.append("runningTime", Number(e.target.runningTime.value));
    formEditMovie.append("genreId", genre);
    formEditMovie.append("language", e.target.language.value);

    editMovie(token, dispatch, movie?.id, formEditMovie, navigate, toast);
  };
  return (
    <div>
      <div className="w-[90%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin phim
        </h1>
        <form action="" onSubmit={handleEditMovie}>
          <div className="row">
            {/* Cột 1 */}
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Mã phim: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={movie?.id}
                  readOnly={true}
                />
              </div>
              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Tên phim: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.movieName}
                  name="movieName"
                />
                {errorNameMovie && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorNameMovie}
                  </span>
                )}
              </div>

              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Hình ảnh: <span className="text-red-500">*</span>
                </label>
                {/* Hiển thị hình ảnh hiện tại */}
                <img
                  src={movie?.movieImage}
                  alt="Current Movie Image"
                  className="mb-1 w-[250px] h-[150px] object-contain"
                />

                {/* Trường nhập file cho phép chọn hình mới */}
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImageMovie(e.target.files[0])}
                  name="movieImage"
                />
                {errorImage && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorImage}
                  </span>
                )}
              </div>

              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Giá vé: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.price}
                  name="price"
                />
                {errorPrice && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Cột 2 */}
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Đạo diễn: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.director}
                  name="director"
                />
                {errorDirector && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorDirector}
                  </span>
                )}
              </div>

              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Diễn viên: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.cast}
                  name="cast"
                />
                {errorCast && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorCast}
                  </span>
                )}
              </div>
              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Mô tả: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.description}
                  name="description"
                />
                {errorDescription && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorDescription}
                  </span>
                )}
              </div>
              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Thời lượng: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.runningTime}
                  name="runningTime"
                />
                {errorRunningTime && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorRunningTime}
                  </span>
                )}
              </div>

              <div className="mb-1">
                <label className="form-label font-mono font-semibold">
                  Ngôn ngữ: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={movie?.language}
                  name="language"
                />
                {errorLanguage && (
                  <span className="text-red-500 font-mono font-medium text-center">
                    {errorLanguage}
                  </span>
                )}
              </div>

              <div className="mb-1">
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
                      defaultChecked={genre.includes(item.id)}
                      onChange={(e) => {
                        const selectedGenreId = Number(e.target.value);
                        if (e.target.checked) {
                          // Nếu được chọn, thêm vào mảng genre
                          setGenre([...genre, selectedGenreId]);
                        } else {
                          // Nếu không được chọn, loại bỏ khỏi mảng genre
                          setGenre((prevGenre) =>
                            prevGenre.filter((id) => id !== selectedGenreId)
                          );
                        }
                      }}
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
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMovie;
