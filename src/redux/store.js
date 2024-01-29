import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
import customerSlice from "./reducers/customerSlice";
import orderSlice from "./reducers/orderSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    customer: customerSlice,
    order: orderSlice,
  },
});
