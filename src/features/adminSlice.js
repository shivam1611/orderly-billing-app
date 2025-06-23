// Initial State of the admin User

const initial_state = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  age: null,
  isMale: true,
  dob: "",
  img: "",
  email: "",
  phone: "",
  business: {
    name: "",
    address: "",
    id: "",
  },
};

// reducer function

export default function admin_reducer(state = initial_state, action) {
  switch (action.type) {
    case "admin/CREATE_ADMIN":
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        password: action.payload.password,
        age: action.payload.age,
        isMale: action.payload.isMale,
        dob: action.payload.dob,
        phone: action.payload.phone,
        email: action.payload.email,
      };
    default:
      return state;
  }
}

// action creators functions

export function create_admin(obj) {
  return { type: "admin/CREATE_ADMIN", payload: obj };
}
