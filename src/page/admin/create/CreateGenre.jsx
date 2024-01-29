import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateBlank } from "../../../components/validate/validation";
import { createGenre } from "../../../redux/api/service/genreRequest";

function CreateGenre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const error = useSelector((state) => state.genres.genre.error);
  const [nameGenre, setNameGenre] = useState("");
  const [errorNameGenre, setErrorNameGenre] = useState("");
  const handleCreateGenre = (e) => {
    e.preventDefault();
    if (validateBlank(nameGenre)) {
      setErrorNameGenre("Tên thể loại chiếu không được để trống.");
      return;
    }
    const formGenre = {
      genreName: nameGenre,
      isDeleted: false,
    };
    createGenre(token, formGenre, dispatch, navigate);
    setNameGenre("");
  };
  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới thể loại
        </h1>
        <form action="" onSubmit={handleCreateGenre}>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên thể loại: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên thể loại"
              value={nameGenre}
              onChange={(e) => setNameGenre(e.target.value)}
            />
            {errorNameGenre && (
              <span className="text-red-500 font-mono font-medium text-center">
                {errorNameGenre}
              </span>
            )}
          </div>

          {error ? (
            <span className="text-red-500 font-mono font-medium text-center">
              {error.data}
            </span>
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

export default CreateGenre;
