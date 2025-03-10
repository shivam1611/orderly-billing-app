import { useSelector } from "react-redux";
import "./AdminProfile.css";
const AdminProfile = () => {
  // extracting admin Slice
  const admin = useSelector((store) => store.admin);
  return (
    <div className="container">
      <header className="admin-header">
        <h1 className="bg-title">
          <i className="fa-solid fa-user-tie"></i>Admin Panel
        </h1>
        <div className="edit-section">
          <i className="fa-solid fa-pen"></i>
          <p className="">Edit</p>
        </div>
      </header>
      <div className="box-1">
        <div className="profile-img-container">
          <img
            src="https://cdn.create.vista.com/api/media/small/158332684/stock-photo-handsome-bearded-man"
            alt=""
          />
        </div>
        <div className="detail-container">
          <div className="detail-left-section">
            <div className="bar">
              <p className="dark-text">Name</p>
              <p className="light-text">
                {admin.first_name} {admin.last_name}
              </p>
            </div>
            <div className="bar">
              <p className="dark-text">Role </p>
              <p className="light-text ">Administrator</p>
            </div>
          </div>
          <div className="detail-right-section"></div>
        </div>
      </div>
      <div className="box-1">
        <div className="detail-left-section">
          <div className="bar">
            <p className="dark-text">First Name</p>
            <p className="light-text">{admin.first_name}</p>
          </div>
          <div className="bar">
            <p className="dark-text">Last Name</p>
            <p className="light-text">{admin.last_name}</p>
          </div>
          <div className="bar">
            <p className="dark-text">Email Address</p>
            <p className="light-text">{admin.email}</p>
          </div>
          <div className="bar">
            <p className="dark-text">Phone</p>
            <p className="light-text">{admin.phone}</p>
          </div>
        </div>
      </div>
      <div className="box-1">
        <div className="bar">
          <p className="dark-text">Business Name</p>
          <p className="light-text">Relaf Restaurant</p>
        </div>
        <div className="bar">
          <p className="dark-text">Business ID</p>
          <p className="light-text">Relaf Restaurant</p>
        </div>
        <div className="bar">
          <p className="dark-text">Business Address</p>
          <p className="light-text">Relaf Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
