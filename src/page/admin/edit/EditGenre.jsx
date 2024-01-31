import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editGenre, getGenre } from "../../../redux/api/service/genreRequest";
import { validateBlank } from "../../../components/validate/validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditGenre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const genre = useSelector((state) => state.genres.genre.currentGenre);
  const error = useSelector((state) => state.genres.genre.error);
  // console.log("genre", genre);

  const [errorEdit, setErrorEdit] = useState("");

  const handleUpdateGenre = (e) => {
    e.preventDefault();
    setErrorEdit("");
    if (validateBlank(e.target.genreName.value)) {
      setErrorEdit("Tên vị trí không được để trống.");
      return;
    }

    const formEditGenre = {
      genreName: e.target.genreName.value,
      isDeleted: false,
    };

    editGenre(token, dispatch, genre.id, formEditGenre, navigate, toast);
  };

  return genre ? (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <ToastContainer className="custom-toast-container" />
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin thể loại
        </h1>
        <form action="" onSubmit={handleUpdateGenre}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Mã thể loại: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={genre.id}
              readOnly={true}
            />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên thể loại: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên thể loại"
              defaultValue={genre.genreName}
              name="genreName"
            />
            {errorEdit && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorEdit}
              </span>
            )}
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
  ) : (
    <></>
  );
}

export default EditGenre;
