import "./FoodCard.css";
import veg from "../../assets/Veg_symbol.svg.png";

const FoodCard = () => {
  return (
    <div className="card">
      <div className="img-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSH5sF5LdtmDfNxiht4k2WWrOr7Ykr5ewkQ&s"
          alt="Pizza"
        />
      </div>
      <div className="detail-section">
        <p className="food-title">Pizza</p>
        <div className="col">
          <p className="food-price">$ 12.5</p>

          <img src={veg} alt="" />
        </div>
        <div className="control">
          <div className="left-section">
            <p className="cnt">
              <i className="fa-solid fa-minus"></i>
            </p>
            <p className="cnt val">1</p>
            <p className="cnt">
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
          <div className="right-section">
            <button className="btn-add"> + Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
