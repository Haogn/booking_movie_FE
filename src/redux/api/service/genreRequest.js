import axios from "axios";
import {
  createGenreFailed,
  createGenreStart,
  createGenreSuccess,
  deleteGenreFailed,
  deleteGenreStart,
  deleteGenreSuccess,
  editGenreFailed,
  editGenreStart,
  editGenreSuccess,
  getAllGenreSelectFailed,
  getAllGenreSelectStart,
  getAllGenreSelectSucess,
  getAllGenreFailed,
  getAllGenreStart,
  getAllGenreSuccess,
  getGenreFailed,
  getGenreStart,
  getGenreSuccess,
} from "../../reducers/genreSlice";

export const getGenre = async (dispatch, token, id) => {
  dispatch(getGenreStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/genre/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getGenreSuccess(res.data));
  } catch (error) {
    dispatch(getGenreFailed(error.response));
  }
};

export const getAllGenre = async (dispatch, token, search, page) => {
  dispatch(getAllGenreStart());
  try {
    const res = await axios.get("http://localhost:6789/api/booking/v1/genre", {
      headers: {
        Authorization: `Bearer ${token}`,
        params: {
          search: search,
          page: page,
        },
      },
    });
    // console.log(res.data);
    dispatch(getAllGenreSuccess(res.data));
  } catch (error) {
    dispatch(getAllGenreFailed(error.response));
  }
};

export const getAllGenreSelect = async (dispatch, token) => {
  dispatch(getAllGenreSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/genre/getAll",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getAllGenreSelectSucess(res.data));
  } catch (error) {
    dispatch(getAllGenreSelectFailed(error.response));
  }
};

export const createGenre = async (token, formGenre, dispatch, navigate) => {
  dispatch(createGenreStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/genre",
      formGenre,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createGenreSuccess(res.data));
    navigate("/admin/list-genre");
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createGenreFailed(error.response));
  }
};

export const editGenre = async (
  token,
  dispatch,
  id,
  formEditGenre,
  navigate
) => {
  dispatch(editGenreStart());
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/genre/${id}`,
      formEditGenre,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editGenreSuccess(res.data));
    navigate("/admin/list-genre");
  } catch (error) {
    dispatch(editGenreFailed(error.response));
  }
};

export const deleteGenre = async (token, dispatch, id, navigate) => {
  dispatch(deleteGenreStart());
  try {
    const res = await axios.patch(
      `http://localhost:6789/api/booking/v1/genre/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(deleteGenreSuccess(res.data));
    navigate("/admin/list-genre");
  } catch (error) {
    dispatch(deleteGenreFailed(error.response));
  }
};
