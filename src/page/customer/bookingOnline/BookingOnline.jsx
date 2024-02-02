import React, { useState,useEffect } from "react";
import "./BookingOnline.css";
import { Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { bookingMovie, createMenuForOrder, paymentVNPay } from "../../../redux/api/service/orderRequest";
function BookingOnline() {
  const storedToken = localStorage.getItem('acessToken');
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
    ? storedToken.slice(1, -1)
    : storedToken;
  
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const chairs = useSelector((state) => state.order.getListChair.chairs);
  const roomResponse = useSelector((state) => state.order.getRoomMovie.roomResponse);
  const movie = useSelector((state) => state.order.getMovieInform.movieInform);
  const orderInform = useSelector((state) => state.order.getOrderInform.orderInform);
  const menus = useSelector((state) => state.order.addToMenu.menu)
  

  const [chairIds, setChairIds] = useState([]); 
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ticketPrice, setTicketPrice] = useState(0);



  useEffect(() => {
    if(chairs){
    const newChairIds = chairs.map((chair) => chair.id);
    setChairIds(newChairIds);
    }
  }, [chairs]);

  useEffect(() => {
    if (roomResponse?.length > 0) {
      setRoom(roomResponse[0]);
      setIsLoading(false);
    }
  }, [roomResponse]);
  

  useEffect(() => {
    const newPrice = chairs.reduce((total, chair) => {
      let chairPrice = movie.price;
      if (chair.chairType === 'VIP') {
        chairPrice *= 1.05;
      }
      return total + chairPrice;
    }, 0);
    setTicketPrice(newPrice);
  }, [chairs, movie]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let endTime;
  let date;
  if (orderInform && orderInform.selectedDate) {
    const selectedDate = new Date(orderInform.selectedDate);
    if (!isNaN(selectedDate)) {
      date = format(selectedDate, 'dd-MM-yyyy');
      endTime = addMinutesToTime(orderInform.time, movie.runningTime);
    } else {
      console.error('selectedDate is not a valid date');
    }
  }

  let totalMenu = 0;
  if(menus.length > 0) {
    totalMenu = menus.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.quantity * currentItem.price);
    }, 0);
  }

  const hasData = chairs && room && movie && orderInform;

  let linkTo, linkText;
  if (currentPath === "/booking/dish") {
    linkTo = "/booking/payment";
    linkText = "next";
  } else if (currentPath === "/booking") {
    linkTo = "/booking/dish";
    linkText = "next";
  } else {
    linkTo = "#";
    linkText = "Thanh toán";
  }
 
  let total = ticketPrice+totalMenu;


 
 
 
  const createOrder = async () => {
    try {
      const orderForm = {
        movieId: movie.id,
        roomId: room.id,
        startTime: orderInform.time,
        bookingDate: orderInform.selectedDate,
        chairIds: chairIds,
        theater: orderInform.theater,
        location: orderInform.locationName,
        total: total,
      };
  
      const order = await bookingMovie(dispatch, token, orderForm);
      console.log(order);
      if (order && order.code) {
        const orderCode = order.code;
        const orderId = order.id;
        createMenuForOrder(dispatch,menus,orderId)

        paymentVNPay(dispatch, total, orderCode);
      } else {
        // Xử lý khi không nhận được mã đơn hàng
        navigate("/bookingfailed")
        console.error('Order creation failed or missing order code.');
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API hoặc logic bên trong
      console.error('Failed to create order:', error);
    }
  };
  
  return (
    <>
      {hasData ? (
        <div className="booking_online  font-mono">
          <div className="head_booking_online">
            <h1>BOOKING ONLINE</h1>
          </div>
          {room && orderInform ? (
            <div class="product-primary">
              <p>
                CGV {orderInform.theater} {orderInform.locationName} |{" "}
                {room.roomName} | Số ghế (
                <em>
                  {room.numberOfSeatsInAColumn * room.numberOfSeatsInARow}
                </em>
                /{room.numberOfSeatsInAColumn * room.numberOfSeatsInARow})
              </p>
              <p>
                {date} {orderInform.time} ~ {date} {endTime}
              </p>
            </div>
          ) : (
            <></>
          )}

          <Outlet></Outlet>
          <div className="foot_booking_online">
            <div>
              <div className="previous">
                <i class="fas fa-chevron-left"></i>
                <span>previous</span>
              </div>
            </div>
            {/*  */}
            <table class="info-wrapper">
              <tbody>
                <tr>
                  <td>
                    <img src={movie.movieImage} alt="" />
                  </td>
                  <td>
                    <ul>
                      <li>{movie.movieName}</li>
                      <li>{room.roomType}</li>
                      <li>{movie.rated}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            {/*  */}
            <table class="info-wrapper ">
              <tbody className="font-mono">
                <tr>
                  <td class="label">Rạp</td>
                  <td>
                    CGV {orderInform.theater} {orderInform.locationName}
                  </td>
                </tr>
                <tr>
                  <td class="label">Suất chiếu</td>
                  <td>
                    {orderInform.time} ,{date}
                  </td>
                </tr>
                <tr>
                  <td class="label">Phòng chiếu</td>
                  <td>{room.roomName}</td>
                </tr>
                <tr class="block-seats">
                  <td class="label">Ghế</td>
                  <td class="data">
                    <ul>
                      {chairs &&
                        chairs.map((chair, index) => (
                          <li key={index}>
                            <p>{chair.chairType}</p>
                            <p>{chair.chairName}</p>
                          </li>
                        ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            {/*  */}
            <table class="info-wrapper">
              <thead>
                <tr class="block-box">
                  <td class="label">Giá ghế</td>
                  <td class="price">{ticketPrice}đ</td>
                </tr>
              </thead>

              <tbody>
                <tr class="block-con">
                  <td class="label">Combo</td>
                  <td class="price">{totalMenu}đ</td>
                </tr>
              </tbody>

              <tfoot class="block-price">
                <tr>
                  <td class="label">Tổng</td>
                  <td class="price">{ticketPrice+totalMenu}đ</td>
                </tr>
              </tfoot>
            </table>
            {/*  */}
            <div>
              <Link
                to={linkTo}
                onClick={linkText === "Thanh toán" ?  createOrder : undefined}
              >
                <div className="next">
                  <i className="fas fa-chevron-right"></i>
                  <span>{linkText}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Không có dữ liệu</div>
      )}
    </>
  );
}

export default BookingOnline;

function addMinutesToTime(time, minutesToAdd) {
  const timeParts = time.split(":");
  const date = new Date();
  date.setHours(parseInt(timeParts[0]));
  date.setMinutes(parseInt(timeParts[1]));
  date.setSeconds(parseInt(timeParts[2]));

  // Cộng thêm phút
  date.setMinutes(date.getMinutes() + minutesToAdd);

  // Định dạng lại thời gian với HH:mm:ss
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
