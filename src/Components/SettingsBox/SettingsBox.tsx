import { NavLink, Outlet } from "react-router";
import styles from "./SettingsBox.module.css";
const SettingsBox = () => {
  return (
    <div className={styles.container}>
      <header className={styles.top_bar}>
        <NavLink to="menu">
          {" "}
          <p className={styles.tab}>Menu</p>
        </NavLink>
        <NavLink to="taxes">
          {" "}
          <p className={styles.tab}>Taxes</p>
        </NavLink>
      </header>
      <div className={styles.bottom_bar}>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsBox;
