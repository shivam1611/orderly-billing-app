const initialState = {
  items: [],
  total_amount: 0,
};

// cart reducer

export default function cart_reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/add_item":
      const updated_items = [action.payload, ...state.items];
      return {
        ...state,
        items: updated_items,
        total_amount: updated_items.reduce((acc, cur) => (acc += cur.price), 0),
      };
    case "cart/remove_item":
      const remain_items = state.items.filter(
        (item) => item.food_id !== action.payload
      );
      return {
        ...state,
        items: remain_items,
        total_amount: remain_items.reduce((acc, cur) => (acc += cur.price), 0),
      };
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
