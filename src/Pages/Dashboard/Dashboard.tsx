import Billing from "../../Components/BillingSection/Billing";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Navigation from "../../Components/Navigation/Navigation";
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
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};
export default Dashboard;
