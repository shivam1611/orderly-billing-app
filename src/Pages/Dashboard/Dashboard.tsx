import Billing from "../../Components/BillingSection/Billing";
import MenuSlider from "../../Components/Menu Slider/MenuSlider";
import MenuSection from "../../Components/MenuSection/MenuSection";
import Navigation from "../../Components/Navigation/Navigation";
import SearchFilter from "../../Components/Search & Filter/SearchFilter";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="parent">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">Footer section</div>
      <div className="div3">
        <Billing />
      </div>
      <div className="div5">
        <div className="div-5-div1">
          <SearchFilter />
        </div>
        <div className="div-5-div2">
          <MenuSlider />
        </div>
        <div className="div-5-div3">
          <MenuSection />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
