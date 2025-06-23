import { useState } from "react";
import "./Registration.css";
import brandLogo from "../../assets/Orderly.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import store from "../../store.js";

const Registration = () => {
  // Local state of admin data object
  const [values, setValues] = useState({
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
  });

  // extracting dispatch function
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // extracting admin slice from the store
  const admin = useSelector((store) => store.admin);

  // funciton that will handle the change in input
  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "admin/CREATE_ADMIN", payload: values });
    navigate("/login");
  };
  return (
    <div className="registration-parent">
      <div className="regis-div1">
        <img src={brandLogo} alt="" />
        <h1>Effortless billing, seamless management.</h1>
        <p>Sign up now to simplify your café operations!</p>
      </div>
      <div className="regis-div2">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                className="form-input"
                value={values.first_name}
                onChange={handlechange}
              />
            </div>
            <div className="col">
              <label htmlFor="last_name"> Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-input"
                value={values.last_name}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                name="phone"
                type="phone"
                className="form-input"
                value={values.phone}
                onChange={handlechange}
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={values.email}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="form-input"
                value={values.username}
                onChange={handlechange}
              />
            </div>
            <div className="col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                value={values.password}
                onChange={handlechange}
              />
            </div>
          </div>
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
