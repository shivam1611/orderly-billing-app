const initialState = {
  total_orders: [],
};

export default function order_reducer(state = initialState, action) {
  switch (action.type) {
    case "order/add_order":
      return {
        ...state,
        total_orders: [action.payload, ...state.total_orders],
      };

    case "order/remove_order":
      return {
        ...state,
        total_orders: state.total_orders.filter(
          (order) => order.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export function add_order(obj) {
  return { type: "order/add_order", payload: obj };
}

export function remove_order(id) {
  return { type: "order/remove_order", payload: id };
}
