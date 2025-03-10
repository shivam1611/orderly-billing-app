const initialState = {
  items: [],
  total_amount: 0,
};

// cart reducer

export default function cart_reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/add_item":
      return {
        ...state,
        items: [action.payload, ...state.items],
        total_amount: items.reduce((acc, cur) => (acc += cur.price), 0),
      };
    case "cart/remove_item":
      return {
        ...state,
        items: state.items.filter((item) => item.food_id !== action.payload),
      };
    default:
      return state;
  }
}
