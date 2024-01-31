import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCategoryApi } from "../../../redux/api/service/categoryRequest";
import { editDish } from "../../../redux/api/service/dishRequest";
function EditDrinks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.dishs.dish.currentDish);
  const [dishName, setDishName] = useState(dish ? dish.dishName : "");
  const [categoryId, setCategoryId] = useState(dish ? dish.categoryId : "");
  const [price, setPrice] = useState(dish ? dish.price : "");
  const listCategory = useSelector((state) => state.category.ListCategory)
  console.log(dish);
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const hendleUpdate = (e) => {
    e.preventDefault();
    const dishUpdateRequestDto = {
      id: (dish ? dish.id : null),
      dishName: dishName,
      categoryId: categoryId,
      price: price
    }
    editDish(dishUpdateRequestDto, dispatch, navigate, token)
  }
  useEffect(() => {
    getAllCategoryApi(dispatch);
  }, [dispatch])

  return (
    dish && <div>
      <div className="w-[50%] h-screen mx-auto ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Thay đổi thông tin đồ ăn / đồ uống
        </h1>
        <form action="" onSubmit={hendleUpdate}>
          <div className="mb-3">
            {dish.image && <img src={dish.image} alt={`Image of ${dish.dishName}`} className="kfc" />}
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Tên sản phẩm: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setDishName(e.target.value)}
              value={dishName}
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
            />
          </div>

          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Giá: <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              className="form-control"
              placeholder="Giá" />
          </div>
          <div className="mb-3">
            <label className="form-label font-mono font-semibold">
              Loại: <span className="text-red-500">*</span>
            </label>
            <select onChange={(e) => setCategoryId(e.target.value)} value={categoryId} class="form-select" aria-label="Default select example">
              <option value="">-chọn-</option>
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
            Thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDrinks;
