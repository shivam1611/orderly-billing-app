import { combineReducers } from "redux";
import cart_reducer from "./features/cartSlice";
import menu_reducer from "./features/menuSlice";
import admin_reducer from "./features/adminSlice";

const rootReducer = combineReducers({
  cart: cart_reducer,
  menu: menu_reducer,
  admin:admin_reducer
});

export default rootReducer;
