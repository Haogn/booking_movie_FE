import axios from "axios";
import {
  createMovieFailed,
  createMovieStart,
  createMovieSuccess,
  editMovieFailed,
  editMovieStart,
  editMovieSuccess,
  getALlMovieByStatusFailed,
  getALlMovieByStatusStart,
  getALlMovieByStatusSuccess,
  getALlMovieSelectFailed,
  getALlMovieSelectStart,
  getALlMovieSelectSuccess,
  getAllMovieFailed,
  getAllMovieStart,
  getAllMovieSuccess,
  getMovieFailed,
  getMovieStart,
  getMovieSuccess,
} from "../../reducers/movieSlice";

export const getMovie = async (dispatch, token, idMovie) => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/movie/${idMovie}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res.data);
    dispatch(getMovieSuccess(res.data));
  } catch (error) {
    dispatch(getMovieFailed(error.response));
  }
};

export const getAllMovie = async (dispatch, token, search, page) => {
  dispatch(getAllMovieStart());
  try {
    const res = await axios.get("http://localhost:6789/api/booking/v1/movie", {
      headers: {
        Authorization: `Bearer ${token}`,
        params: {
          search: search,
          page: page,
        },
      },
    });
    // console.log(res.data);
    dispatch(getAllMovieSuccess(res.data));
  } catch (error) {
    dispatch(getAllMovieFailed(error.response));
  }
};

export const getAllMovieSelect = async (dispatch) => {
  dispatch(getALlMovieSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/movie/getAll"
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    console.log(res.data);
    dispatch(getALlMovieSelectSuccess(res.data));
  } catch (error) {
    dispatch(getALlMovieSelectFailed(error.response));
  }
};

export const getAllMovieByStatus = async (
  dispatch,
  token,
  page,
  search,
  status
) => {
  dispatch(getALlMovieByStatusStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/movie/status",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          params: {
            search: search,
            page: page,
            status: status,
          },
        },
      }
    );
    // console.log(res.data);
    dispatch(getALlMovieByStatusSuccess(res.data));
  } catch (error) {
    dispatch(getALlMovieByStatusFailed(error.response));
  }
};

export const createMovie = async (token, formMovie, dispatch, navigate) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/movie",
      formMovie,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(createMovieSuccess(res.data));
    navigate("/admin/list-movie");
  } catch (error) {
    //   console.log("Tao moi that bai", error);
    dispatch(createMovieFailed(error.response));
  }
};

export const editMovie = async (
  token,
  dispatch,
  id,
  formEditMovie,
  navigate
) => {
  dispatch(editMovieStart());
  try {
    const res = await axios.put(
      `http://localhost:6789/api/booking/v1/mocie/${id}`,
      formEditMovie,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editMovieSuccess(res.data));
    navigate("/admin/list-movie");
  } catch (error) {
    dispatch(editMovieFailed(error.response));
  }
};
