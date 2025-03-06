import { NavLink } from "react-router";
import Logo from "../../assets/Orderly_logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigation">
      <header className="header_section">
        <div className="logo">
          <img src={Logo} alt="Logos" />
        </div>
        <p className="brand">Orderly</p>
      </header>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-items active" : "nav-items"
            }
          >
            <div className="icon">
              <i className="fa-solid fa-table-columns"></i>
            </div>
            <p className="item-name">Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "nav-items active" : "nav-items"
            }
          >
            <div className="icon">
              <i className="fa-solid fa-clipboard-list"></i>
            </div>
            <p className="item-name">Orders</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-items active" : "nav-items"
            }
          >
            <div className="icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            <p className="item-name">Settings</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "nav-items active" : "nav-items"
            }
          >
            <div className="icon">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <p className="item-name">Admin</p>
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p className="admin_name">Kala Food Juction</p>
        <p className="log-out">
          <i className="fa-solid fa-right-from-bracket"></i>
        </p>
      </footer>
    </div>
  );
};

export default Navigation;
