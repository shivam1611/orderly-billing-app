import { useSelector } from "react-redux";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const navigate = useNavigate();
  const [input_username, setUsername] = useState("");
  const [input_password, setPassword] = useState("");
  const admin = useSelector((store) => store.admin);
  const { username, password } = admin;
  const handleLogIn = (e) => {
    e.preventDefault();
    if (input_username == username && input_password == password) {
      alert("Log In Sucessfull");
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Passowrd");
      setPassword("");
      setUsername("");
    }
  };
  return (
    <div>
      <form action="#" className="form">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={input_username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={input_password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
