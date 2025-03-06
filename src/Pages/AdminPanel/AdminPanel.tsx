import React from "react";
import Navigation from "../../Components/Navigation/Navigation";

const AdminPanel = () => {
  return (
    <div className="global-parent-layout">
      <div className="global-div1">
        <Navigation />
      </div>
      <div className="global-div2"> main section</div>
    </div>
  );
};

export default AdminPanel;
