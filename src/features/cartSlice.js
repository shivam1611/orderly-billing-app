const initialState = {
  items: [],
  order_type: "",
  gross_amount: 0,
  tax_amount: 0,
  total_amount: 0,
  payment_mode: "",
};

// cart reducer

export default function cart_reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/add_item":
      const updated_items = [action.payload, ...state.items];
      return {
        ...state,
        items: updated_items,
        gross_amount: updated_items.reduce((acc, cur) => (acc += cur.price), 0),
      };
    case "cart/remove_item":
      const remain_items = state.items.filter(
        (item) => item.food_id !== action.payload
      );
      return {
        ...state,
        items: remain_items,
        gross_amount: remain_items.reduce((acc, cur) => (acc += cur.price), 0),
      };
    case "cart/setOrderType":
      return { ...state, order_type: action.payload };
    case "cart/setPaymentMode":
      return { ...state, payment_mode: action.payload };
    case "cart/setGrossAmount":
      return { ...state, gross_amount: action.payload };
    case "cart/setTaxAmount":
      return { ...state, tax_amount: action.payload };
    case "cart/setTotalAmount":
      return { ...state, total_amount: action.payload };
    default:
      return state;
  }
}

export function add_cart_item(obj) {
  return { type: "cart/add_item", payload: obj };
}

export function remove_cart_item(id) {
  return { type: "cart/remove_item", payload: id };
}

export function set_order_type(data) {
  return { type: "cart/setOrderType", payload: data };
}
export function set_payment_mode(data) {
  return { type: "cart/setPaymentMode", payload: data };
}
export function set_gross_amount(data) {
  return { type: "cart/setGrossAmount", payload: data };
}

export function set_tax_amount(data) {
  return { type: "cart/setTaxAmount", payload: data };
}
export function set_total_amount(data) {
  return { type: "cart/setTotalAmount", payload: data };
}
