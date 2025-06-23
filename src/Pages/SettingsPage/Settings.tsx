import Navigation from "../../Components/Navigation/Navigation";
import SettingsBox from "../../Components/SettingsBox/SettingsBox";

const Settings = () => {
  return (
    <div className="global-parent-layout">
      <div className="global-div1">
        <Navigation />
      </div>
      <div className="global-div2">
        <SettingsBox />
      </div>
    </div>
  );
};

export default Settings;
