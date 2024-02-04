import React, { useEffect, useState } from "react";
import { getAllCategoryApi } from "../../../redux/api/service/categoryRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editDish } from "../../../redux/api/service/dishRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./FormInput";

function EditDrinks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.dishs.dish.currentDish);
  const dishError = useSelector((state) => state.dishs.dish.error);
  const [dishName, setDishName] = useState(dish ? dish.dishName : null);
  const [categoryId, setCategoryId] = useState(dish ? dish.categoryId : null);
  const [price, setPrice] = useState(dish ? dish.price : null);
  const [errName, setErrName] = useState(null);
  const [errCategoryId, setErrCategoryId] = useState(null);
  const [errPrice, setErrPrice] = useState(null);
  const listCategory = useSelector((state) => state.category.ListCategory);

  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const validateForm = () => {
    let isValid = true;

    if (!dishName) {
      setErrName("Tên sản phẩm không được để trống");
      isValid = false;
    }

    if (!categoryId) {
      setErrCategoryId("Loại không được để trống");
      isValid = false;
    }

    if (isNaN(Number(price))) {
      setErrPrice("Giá không hợp lệ");
      isValid = false;
    }

    return isValid;
  };

  const hendleUpdate = (e) => {
    e.preventDefault();
    setErrName(null);
    setErrCategoryId(null);
    setErrPrice(null);

    if (validateForm()) {
      const dishUpdateRequestDto = {
        id: dish ? dish.id : null,
        dishName: dishName,
        categoryId: categoryId,
        price: price,
      };

      editDish(dishUpdateRequestDto, dispatch, navigate, token, toast);
    }
  };

  const formatPrice = (value) => {
    // Chuyển đổi giá trị sang chuỗi và định dạng
    const formattedPrice = Number(value).toLocaleString();
    return formattedPrice;
  };

  useEffect(() => {
    getAllCategoryApi(dispatch);
  }, [dispatch]);

  return (
    dish && (
      <div>
        <div className="w-[50%] h-screen mx-auto ">
          <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
            Thay đổi thông tin đồ ăn / đồ uống
          </h1>
          <form action="" onSubmit={hendleUpdate}>
            <div className="mb-3">
              {dish.image && (
                <img
                  src={dish.image}
                  alt={`Image of ${dish.dishName}`}
                  className="kfc"
                />
              )}
            </div>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Tên sản phẩm: <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  setDishName(e.target.value);
                  setErrName(null);
                }}
                value={dishName}
                type="text"
                className="form-control"
                placeholder="Tên sản phẩm"
              />
              {errName && (
                <span className="text-red-500">{errName}</span>
              )}
              {dishError?.data === "Dish is exist" && (
                <span className="text-red-500">Tên sản phẩm đã tồn tại!</span>
              )}
            </div>

            <div className="mb-3">
              <FormInput
                label="Giá:"
                value={formatPrice(price)}
                onChange={(e) => {
                  setPrice(e.target.value.replace(/\D/g, ''));
                  setErrPrice(null);
                }}
                error={errPrice}
              />
              {errPrice && (
                <span className="text-red-500">{errPrice}</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label font-mono font-semibold">
                Loại: <span className="text-red-500">*</span>
              </label>
              <select
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  setErrCategoryId(null);
                }}
                value={categoryId}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">-chọn-</option>
                {listCategory &&
                  listCategory.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.categoryName}
                    </option>
                  ))}
              </select>
              {errCategoryId && (
                <span className="text-red-500">{errCategoryId}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-dark font-mono mb-4 text-gray-950"
            >
              Thay đổi
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default EditDrinks;
