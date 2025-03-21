import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Registration from "./Pages/RegistrationPage/Registration";
import Settings from "./Pages/SettingsPage/Settings";
import PathNotFound from "./Pages/PathNotFound/PathNotFound";
import Orders from "./Pages/Orders/Orders";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./App.css";
// import AdminPanel from "./Pages/AdminPanel/AdminPanel";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import Registration from "./Pages/RegistrationPage/Registration";
// import Settings from "./Pages/SettingsPage/Settings";
// import PathNotFound from "./Pages/PathNotFound/PathNotFound";
// import Orders from "./Pages/Orders/Orders";
// import { useSelector } from "react-redux";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthRedirect /> {/* This component handles redirection on first visit */}
//       <Routes>
//         <Route path="/" element={<Registration />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="*" element={<PathNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// // Component to handle redirection based on registration status
// const AuthRedirect = () => {
//   const admin = useSelector((store) => store.admin);
//   const navigate = useNavigate();
//   const [isRegistered, setIsRegistered] = useState(false);

//   useEffect(() => {
//     // Check if admin credentials exist (can be from localStorage or Redux state)
//     const adminUsername = admin.username;
//     const adminPassword = admin.password;

//     if (adminUsername && adminPassword) {
//       setIsRegistered(true);
//       navigate("/login"); // Redirect to Login if registered
//     } else {
//       navigate("/"); // Redirect to Registration if not registered
//     }
//   }, []);

//   return null; // This component doesn't render anything, it just handles navigation
// };

// export default App;
