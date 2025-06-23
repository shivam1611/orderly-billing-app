import { combineReducers } from "redux";
import cart_reducer from "./features/cartSlice";
import menu_reducer from "./features/menuSlice";
import admin_reducer from "./features/adminSlice";
import taxReducer from "./features/taxesSlice";
import order_reducer from "./features/orderSlice";

const rootReducer = combineReducers({
  cart: cart_reducer,
  menu: menu_reducer,
  admin: admin_reducer,
  taxes: taxReducer,
  order: order_reducer,
});

export default rootReducer;
