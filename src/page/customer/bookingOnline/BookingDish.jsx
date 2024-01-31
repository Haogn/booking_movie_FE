import React, { useEffect } from "react";
import "./BookingOnline.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDish } from "../../../redux/api/service/dishRequest";

function BookingDish() {
  const dispatch = useDispatch();
  const listDish = useSelector((state) => state.dishs.dish.listDish)
  console.log(listDish);
  useEffect(() => {
    getAllDish(dispatch)
  }, [dispatch])
  return (
    listDish && <div className="booking_dish  font-mono">
      <div className="head_chair">
        <h1>Bắp Nước</h1>
      </div>
      <div className="card_list row px-4">
        {listDish.map((dish) =>
          <div className="cards col-6" key={dish.id}>
            <div className="left_card ">
              {dish.image && <img src={dish.image} alt={`Image of ${dish.dishName}`} />}
            </div>
            <div className="right_card col-6">
              <div>
                <h2>{dish.dishName}</h2>
                <p>
                  <b>Loại: </b> <span>{dish.category.categoryName}</span>
                </p>
                <p>
                  <b>Giá: </b> <span>{dish.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}</span>
                </p>
              </div>
              <div className="btn_s_b">
                <button>-</button>
                <div className="text">0</div>
                <button>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingDish;
