const initialState = {
  total_orders: [],
};

 export default function order_reducer(state = initialState, action) {
  switch (action.type) {
    case "order/add_order":
      const updateddata = [action.payload, ...state.total_orders];
      return {
        ...state,
        total_orders: updateddata,
      };
    case "order/remove_order":
      const updated = state.total_orders.filter(
        (order) => order.id !== action.payload
      );
      return { ...state, total_orders: updated };

    default:
      return state;
  }
}

export function add_order(obj) {
  return { type: "order/add_order", payload: obj };
}
export function remove_order(obj) {
  return { type: "order/remove_order", payload: obj };
}

