import Navigation from "../../Components/Navigation/Navigation";
import AdminProfile from "../../Components/AdminProfile/AdminProfile";
const AdminPanel = () => {



  return (
    <div className="global-parent-layout">
      <div className="global-div1">
        <Navigation />
      </div>
      <div className="global-div2">
        <AdminProfile />
      </div>
    </div>
  );
};

export default AdminPanel;
