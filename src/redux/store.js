import authSlice from "./reducers/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
;

export default configureStore({
  reducer: {
    auth: authSlice,
    user:userSlice,
  },
});