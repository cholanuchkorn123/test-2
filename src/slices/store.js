import { configureStore } from "@reduxjs/toolkit";
import cartslices from "./cartslices";

export default configureStore({
  reducer: {
    cart: cartslices,
  },
});
