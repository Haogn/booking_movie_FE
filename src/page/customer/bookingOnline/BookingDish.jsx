import React, { useEffect, useState } from "react";
import "./BookingOnline.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDish } from "../../../redux/api/service/dishRequest";
import {  addToMenuSuccess} from "../../../redux/reducers/orderSlice";

function BookingDish() {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [menu,setMenu] = useState([ ]);

  const handleIncrement = (dishId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [dishId]: (prevQuantities[dishId] || 0) + 1,
      };
  
      const dish = listDish.find((dish) => dish.id === dishId);
      if (dish) {
        updateMenu(dishId, newQuantities[dishId], dish.dishName, dish.price);
      }
      return newQuantities;
    });
  };
  
  const handleDecrement = (dishId) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max((prevQuantities[dishId] || 0) - 1, 0);
  
      const dish = listDish.find((dish) => dish.id === dishId);
      if (dish) {
        if (newQuantity > 0) {
          updateMenu(dishId, newQuantity, dish.dishName, dish.price);
        } else {
          removeDishFromMenu(dishId);
        }
      }
  
      return {
        ...prevQuantities,
        [dishId]: newQuantity,
      };
    });
  };
  
  const updateMenu = (dishId, quantity, dishName, price) => {
    setMenu((prevMenu) => {
      const existingDishIndex = prevMenu.findIndex((dish) => dish.dishId === dishId);
      if (existingDishIndex !== -1) {
        const updatedMenu = [...prevMenu];
        updatedMenu[existingDishIndex] = { dishId, quantity, dishName, price };
        return updatedMenu;
      } else {
        return [...prevMenu, { dishId, quantity, dishName, price }];
      }
    });
  };
  
  const removeDishFromMenu = (dishId) => {
    setMenu((prevMenu) => prevMenu.filter((dish) => dish.dishId !== dishId));
  };
  
  const total = menu.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.quantity * currentItem.price);
  }, 0);

  useEffect(() =>{
    dispatch(addToMenuSuccess(menu))
  },[menu])

  const listDish = useSelector((state) => state.dishs.dish.listDish);
  useEffect(() => {
    getAllDish(dispatch);
  }, [dispatch]);
  return (
    listDish && (
      <div className="booking_dish  font-mono">
        <div className="head_chair">
          <h1>Bắp Nước</h1>
        </div>
        <div className="card_list row px-4">
          {listDish.map((dish) => (
            <div className="cards col-6" key={dish.id}>
              <div className="left_card ">
                {dish.image && (
                  <img src={dish.image} alt={`Image of ${dish.dishName}`} />
                )}
              </div>
              <div className="right_card col-6">
                <div>
                  <h2>{dish.dishName}</h2>
                  <p>
                    <b>Loại: </b> <span>{dish.category.categoryName}</span>
                  </p>
                  <p>
                    <b>Giá: </b>{" "}
                    <span>
                      {dish.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </p>
                </div>
                <div className="btn_s_b">
                  <button onClick={() => handleDecrement(dish.id)}>-</button>
                  <div className="text">{quantities[dish.id] || 0}</div>
                  <button onClick={() => handleIncrement(dish.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default BookingDish;
