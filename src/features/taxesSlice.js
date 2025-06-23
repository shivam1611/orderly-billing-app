const initialState = {
  gstRate: 11,
  serviceCharge: 1.2,
};

// reducer

export default function taxReducer(state = initialState, action) {
  switch (action.type) {
    case "tax/change_gst_rate":
      return {
        ...state,
        gstRate: action.payload,
      };
    case "tax/change_service_charge":
      return {
        ...state,
        serviceCharge: action.payload,
      };

    default:
      return state;
  }
}

// dispatch function

export function change_gst(data) {
  return { type: "tax/change_gst_rate", payload: data };
}

export function change_service_charge(data) {
  return { type: "tax.change_service_charge", payload: data };
}
