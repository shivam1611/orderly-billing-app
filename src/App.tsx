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
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
