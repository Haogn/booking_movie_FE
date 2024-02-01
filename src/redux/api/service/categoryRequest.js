import axios from "axios";
import { getAllCategory } from "../../reducers/categorySlice";
export const getAllCategoryApi = async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:6789/api/booking/v1/category"
    );
    dispatch(getAllCategory(res.data));
  } catch (err) {
    console.log(err.data);
  }
};
