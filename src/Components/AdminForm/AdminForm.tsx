import { useSelector } from "react-redux";
import styles from "./AdminForm.module.css";

const AdminForm = ({setFormView}) => {
  const admin = useSelector((store) => store.admin);
  return (
    <div className={styles.container}>
      <header className={styles.header}> Update admin details here...</header>
      <div className={styles.form_container}>
        <form action="#" className={styles.form}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="first_name" className={styles.form_label}>
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                className="form-input"
                value={admin.first_name}
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="last_name" className={styles.form_label}>
                First Name
              </label>
              <input
                type="text"
                name="last_name"
                className="form-input"
                value={admin.last_name}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                name="phone"
                type="phone"
                className="form-input"
                value={admin.phone}
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={admin.email}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="form-input"
                value={admin.username}
                // onChange={handlechange}
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                disabled
                className="form-input"
                value={admin.password}
                // onChange={handlechange}
              />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.option_container}>
        <div className={styles.left_section}>
          <button className={styles.btn_update}>Update Password</button>
          <button className={styles.btn_cancel} onClick={()=>setFormView(false)}>Cancel</button>
        </div>
        <div className={styles.right_section}>
          <button className={styles.okay_btn}>Update Details</button>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
