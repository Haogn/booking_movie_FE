import axios from "axios";
import {
  getDishStart,
  getDishSuccess,
  getDishFailed,
  selectAllDishStart,
  selectAllDishSuccess,
  selectAllDishFailed,
  getAllDishStart,
  getAllDishSuccess,
  getAllDishFailed,
  createDishStart,
  createDishSuccess,
  createDishFailed,
  editDishStart,
  editDishSuccess,
  editDishFailed,
  deleteDishStart,
  deleteDishSuccess,
  deleteDishFailed,
} from "../../reducers/dishSlice";

export const getDish = async (dispatch, token, id, navigate) => {
  dispatch(getDishStart());
  try {
    const res = await axios.get(
      `http://localhost:6789/api/booking/v1/dish/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(res.data);
    dispatch(getDishSuccess(res.data));
    navigate("/admin/edit-food");
  } catch (err) {
    dispatch(getDishFailed(err.response));
  }
};

export const selectAllDish = async (dispatch, token, page, seach) => {
  dispatch(selectAllDishStart());
  try {
    const res = await axios.get("http://localhost:6789/api/booking/v1/dish", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page: page,
        search: seach,
      },
    });
    console.log(res.data);
    dispatch(selectAllDishSuccess(res.data));
  } catch (err) {
    dispatch(selectAllDishFailed(err.response));
  }
};

export const getAllDish = async (dispatch) => {
  dispatch(getAllDishStart());
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/dish/list"
    );
    dispatch(getAllDishSuccess(res.data));
  } catch (err) {
    dispatch(getAllDishFailed(err.response));
  }
};

export const createDish = async (dishRequestDto, dispatch, token, navigate) => {
  dispatch(createDishStart());
  try {
    const formData = new FormData();
    formData.append("dishName", dishRequestDto.dishName);
    formData.append("image", dishRequestDto.image);
    formData.append("categoryId", dishRequestDto.categoryId);
    formData.append("price", dishRequestDto.price);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:6789/api/booking/v1/dish",
      formData,
      config
    );

    dispatch(createDishSuccess(res.data));
    navigate("/admin/list-food");
  } catch (error) {
    dispatch(createDishFailed(error));
  }
};
export const editDish = async (
  dishUpdateRequestDto,
  dispatch,
  navigate,
  token
) => {
  dispatch(editDishStart());
  try {
    const res = await axios.put(
      "http://localhost:6789/api/booking/v1/dish",
      dishUpdateRequestDto,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(editDishSuccess(res.data));
    navigate("/admin/list-food");
  } catch (err) {
    dispatch(editDishFailed(err.response));
  }
};
export const deleteDish = async (id, dispatch, navigate, token) => {
  dispatch(deleteDishStart());
  try {
    const res = await axios.delete(
      `http://localhost:6789/api/booking/v1/dish/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(res.data);
    dispatch(deleteDishSuccess(res.data));
    navigate("/admin/list-food");
  } catch (err) {
    dispatch(deleteDishFailed(err.response));
  }
};
