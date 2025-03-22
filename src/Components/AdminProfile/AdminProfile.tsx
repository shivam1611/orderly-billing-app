import { useSelector } from "react-redux";
import styles from "./AdminProfile.module.css";
import AdminForm from "../AdminForm/AdminForm";
import { useState } from "react";
const AdminProfile = () => {
  // extracting admin Slice
  const admin = useSelector((store) => store.admin);
  const [formView, setFormView] = useState(false);
  return (
    <div className={styles.container}>
      {formView && <AdminForm setFormView = {setFormView} />}
      <header className={styles.admin_header}>
        <h1 className={styles.bg_title}>
          <i className="fa-solid fa-user-tie"></i>Admin Panel
        </h1>
        <div className={styles.edit_section} onClick={() => setFormView(true)}>
          <i className="fa-solid fa-pen"></i>
          <p className="">Edit</p>
        </div>
      </header>
      <div className={styles.box_1}>
        <div className={styles.profile_img_container}>
          <img
            src="https://cdn.create.vista.com/api/media/small/158332684/stock_photo_handsome_bearded_man"
            alt=""
          />
        </div>
        <div className={styles.detail_container}>
          <div className={styles.detail_left_section}>
            <div className={styles.bar}>
              <p className={styles.dark_text}>Name</p>
              <p className={styles.light_text}>
                {admin.first_name} {admin.last_name}
              </p>
            </div>
            <div className={styles.bar}>
              <p className={styles.dark_text}>Role </p>
              <p className={styles.light_text}>Administrator</p>
            </div>
          </div>
          <div className={styles.detail_right_section}></div>
        </div>
      </div>
      <div className={styles.box_1}>
        <div className={styles.detail_left_section}>
          <div className={styles.bar}>
            <p className={styles.dark_text}>First Name</p>
            <p className={styles.light_text}>{admin.first_name}</p>
          </div>
          <div className={styles.bar}>
            <p className={styles.dark_text}>Last Name</p>
            <p className={styles.light_text}>{admin.last_name}</p>
          </div>
          <div className={styles.bar}>
            <p className={styles.dark_text}>Email Address</p>
            <p className={styles.light_text}>{admin.email}</p>
          </div>
          <div className={styles.bar}>
            <p className={styles.dark_text}>Phone</p>
            <p className={styles.light_text}>{admin.phone}</p>
          </div>
        </div>
      </div>
      <div className={styles.box_1}>
        <div className={styles.bar}>
          <p className={styles.dark_text}>Business Name</p>
          <p className={styles.light_text}>Relaf Restaurant</p>
        </div>
        <div className={styles.bar}>
          <p className={styles.dark_text}>Business ID</p>
          <p className={styles.light_text}>Relaf Restaurant</p>
        </div>
        <div className={styles.bar}>
          <p className={styles.dark_text}>Business Address</p>
          <p className={styles.light_text}>Relaf Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
