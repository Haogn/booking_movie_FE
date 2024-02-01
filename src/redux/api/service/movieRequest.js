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
  getAllMovieFailed,
  getAllMovieSelectFailed,
  getAllMovieSelectStart,
  getAllMovieSelectSuccess,
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
  dispatch(getAllMovieSelectStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/movie/getAll"
    );
    // console.log(res.data);
    dispatch(getAllMovieSelectSuccess(res.data));
    // return res.data;
  } catch (error) {
    dispatch(getAllMovieSelectFailed(error.response));
  }
};

// phim sắp chiếu
export const getAllMovieByStatusShowing = async (dispatch, page, search) => {
  dispatch(getALlMovieByStatusStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/movie/status",
      {
        params: {
          search: search,
          page: page,
          status: "SHOWING",
        },
      }
    );
    // console.log(res.data);
    dispatch(getALlMovieByStatusSuccess(res.data));
  } catch (error) {
    dispatch(getALlMovieByStatusFailed(error.response));
  }
};

// phim đang chiếu
export const getAllMovieByStatusUpComing = async (dispatch, page, search) => {
  dispatch(getALlMovieByStatusStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/movie/status",
      {
        params: {
          search: search,
          page: page,
          status: "UPCOMING",
        },
      }
    );
    // console.log(res.data);
    dispatch(getALlMovieByStatusSuccess(res.data));
  } catch (error) {
    dispatch(getALlMovieByStatusFailed(error.response));
  }
};
export const createMovie = async (
  token,
  formMovie,
  dispatch,
  navigate,
  toast
) => {
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
    toast("😎 Thêm mới phim thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-movie");
    }, 3000);
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
  navigate,
  toast
) => {
  dispatch(editMovieStart());
  try {
    const res = await axios.patch(
      `http://localhost:6789/api/booking/v1/movie/${id}`,
      formEditMovie,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editMovieSuccess(res.data));
    toast("😎 Thay đổi thông tin phim thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/admin/list-movie");
    }, 3000);
  } catch (error) {
    dispatch(editMovieFailed(error.response));
  }
};
