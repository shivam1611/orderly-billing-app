import { useEffect, useState } from "react";
import Billing from "../../Components/BillingSection/Billing";
import MenuSlider from "../../Components/Menu Slider/MenuSlider";
import MenuSection from "../../Components/MenuSection/MenuSection";
import Navigation from "../../Components/Navigation/Navigation";
import SearchFilter from "../../Components/Search & Filter/SearchFilter";
import "./Dashboard.css";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const item = useSelector((store) => store.menu.items);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(
    function () {
      setTimeout(function () {
        setFilteredArray(
          item.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase().trim())
          )
        );
      }, 1000);
    },
    [search]
  );
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
          <SearchFilter search={search} setSearch={setSearch} />
        </div>
        <div className="div-5-div2">
          <MenuSlider setFilteredArray = {setFilteredArray} />
        </div>
        <div className="div-5-div3">
          <MenuSection setSearch={setSearch} filteredArray={filteredArray} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
