import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
import customerSlice from "./reducers/customerSlice";
import dishSlice from "./reducers/dishSlice";
import categorySlice from "./reducers/categorySlice";
import eventSlice from "./reducers/eventSlice";
import locationSlice from "./reducers/locationSlice";
import theaterSlice from "./reducers/theaterSlice";
import roomSlice from "./reducers/roomSlice";
import timeSlice from "./reducers/timeSlice";
import genreSlice from "./reducers/genreSlice";
import movieSlice from "./reducers/movieSlice";
import orderSlice from "./reducers/orderSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    customer: customerSlice,
    dishs: dishSlice,
    category: categorySlice,
    events: eventSlice,
    locations: locationSlice,
    theaters: theaterSlice,
    rooms: roomSlice,
    times: timeSlice,
    genres: genreSlice,
    movies: movieSlice,
    order: orderSlice,
  },
});
