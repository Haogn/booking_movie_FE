import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
import customerSlice from "./reducers/customerSlice";
import dishSlice from "./reducers/dishSlice";
import categorySlice from "./reducers/categorySlice";
import eventSlice from "./reducers/eventSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    customer: customerSlice,
    dishs: dishSlice,
    category: categorySlice,
    events: eventSlice,
  },
});
