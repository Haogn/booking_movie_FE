import React, { useEffect, useState } from "react";
import { getAllCategoryApi } from "../../../redux/api/service/categoryRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDish } from "../../../redux/api/service/dishRequest";

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
  const listCategory = useSelector((state) => state.category.ListCategory)
  const [showError, setShowError] = useState(false);
  console.log(dishError && dishError.response.data);
  useEffect(() => {
    getAllCategoryApi(dispatch);
  }, [dispatch, showError])

  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const hendleCreateDish = async (e) => {
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

      await createDish(dishRequestDto, dispatch, token, navigate);
    }
  };


  return (
    <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Tạo mới đồ ăn / đồ uống
        </h1>
        <form action="" onSubmit={hendleCreateDish} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên sản phẩm:             {errName && errName && (
                <span className="text-red-500">{errName}</span>
              )}
            </label>
            <input
              onChange={(e) => { setDishName(e.target.value); setErrorName(null) }}
              value={dishName}
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              ảnh: {errImage && (
                <span className="text-red-500">{errImage}</span>
              )}
            </label>
            <input onChange={(e) => { setImage(e.target.files[0]); setErrImage(null) }} type="file" className="form-control" placeholder="Image" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giá: {errPrice && (
                <span className="text-red-500">{errPrice}</span>
              )}
            </label>
            <input onChange={(e) => { setPrice(Number(e.target.value)); setErrPrice(null) }} value={price} type="text" className="form-control" placeholder="Giá" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Loại:             {errCategoryId && (
                <span className="text-red-500">{errCategoryId}</span>
              )}
            </label>
            <select className="form-select"
              aria-label="Default select example"
              onChange={(e) => { setCategoryId(Number(e.target.value)); setErrCategoryId(null) }}
              value={categoryId}>
              <option value="">- chọn -</option>
              {listCategory && listCategory.map(
                (category) =>
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
              )
              }
            </select>
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
