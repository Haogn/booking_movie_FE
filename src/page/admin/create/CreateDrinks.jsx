import React, { useEffect, useState } from "react";
import { getAllCategoryApi } from "../../../redux/api/service/categoryRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDish } from "../../../redux/api/service/dishRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../edit/FormInput";

function CreateDrinks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dishName, setDishName] = useState("");
  const [image, setImage] = useState();
  const [categoryId, setCategoryId] = useState(1);
  const [price, setPrice] = useState(0);
  const dishError = useSelector((state) => state.dishs.dish.error);
  const [errName, setErrorName] = useState(null);
  const [errImage, setErrImage] = useState(null);
  const [errCategoryId, setErrCategoryId] = useState(null);
  const [errPrice, setErrPrice] = useState(null);
  const listCategory = useSelector((state) => state.category.ListCategory);
  console.log(dishError && dishError.response.data);
  useEffect(() => {
    getAllCategoryApi(dispatch);
  }, [dispatch]);

  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const formatPrice = (value) => {
    // Chuyển đổi giá trị sang chuỗi và định dạng
    const formattedPrice = Number(value).toLocaleString();
    return formattedPrice;
  };

  const hendleCreateDish = (e) => {
    e.preventDefault();
    setErrorName(null);
    setErrImage(null);
    setErrCategoryId(null);
    setErrPrice(null);
    let isValid = true;
    if (!dishName) {
      setErrorName("Tên sản phẩm không được để trống");
      isValid = false;
    }

    if (!image) {
      setErrImage("Ảnh không được để trống");
      isValid = false;
    }

    if (!categoryId) {
      setErrCategoryId("Loại không được để trống");
      isValid = false;
    }

    if (!price) {
      setErrPrice("Giá không được để trống");
      isValid = false;
    }

    if (isValid) {
      const dishRequestDto = {
        dishName: dishName,
        image: image,
        categoryId: categoryId,
        price: price,
      };
      createDish(dishRequestDto, dispatch, token, navigate, toast);
    }
  };

  return (
    <div>
      <ToastContainer className="custom-toast-container" />
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới đồ ăn / đồ uống
        </h1>
        <form
          action=""
          onSubmit={hendleCreateDish}
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label className="form-label font-mono font-semibold"></label>
            Tên sản phẩm: <span className="text-red-500">*</span>
            <input
              onChange={(e) => {
                setDishName(e.target.value);
                setErrorName(null);
              }}
              value={dishName}
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
            />
            {errName && errName && (
              <span className="text-red-500">{errName}</span>
            )}
            {dishError?.response?.data === "Dish is exist" && (
              <span className="text-red-500">Tên sản phẩm đã tồn tại!</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              ảnh: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
                setErrImage(null);
              }}
              type="file"
              className="form-control"
              placeholder="Image"
            />
            {errImage && <span className="text-red-500">{errImage}</span>}
          </div>
          <div className="mb-3">
            <FormInput
              label="Giá:"
              value={formatPrice(price)}
              onChange={(e) => {
                setPrice(e.target.value.replace(/\D/g, ""));
                setErrPrice(null);
              }}
              error={errPrice}
            />
            {errPrice && <span className="text-red-500">{errPrice}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Loại: <span className="text-red-500">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setCategoryId(Number(e.target.value));
                setErrCategoryId(null);
              }}
              value={categoryId}
            >
              <option value="">- chọn -</option>
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
            Thêm mới
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDrinks;
