import "./SearchFilter.css";
import veg_icon from "../../assets/Veg_symbol.svg.png";
import non_veg_icon from "../../assets/non_veg.png";

const SearchFilter = () => {
  return (
    <div className="search-filter-container">
      <div className="search-section">
        <input
          type="text"
          className="dashboard-input-section"
          placeholder="Search here.."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="sort-section">
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>
            <img src={veg_icon} alt="" /> Veg
          </span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>
            <img src={non_veg_icon} alt="" /> Non-Veg
          </span>
        </label>
      </div>
    </div>
  );
};

export default SearchFilter;
