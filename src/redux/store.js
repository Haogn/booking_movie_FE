import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
import customerSlice from "./reducers/customerSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    customer: customerSlice,
  },
});
