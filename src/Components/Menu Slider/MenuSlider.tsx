import "./MenuSlider.css";
import pizza_icon from "../../assets/pizza_icon.png";
import burger from "../../assets/burger_icon.png";
import dessert from "../../assets/dessert_icon.png";
import noodle from "../../assets/noodles_icon.png";
import main_course from "../../assets/mai_course.png";

const MenuSlider = () => {
  return (
    <div className="menu_slider_container">
      <div className="section-box">
        <div className="section-icon-box">
          <img src={pizza_icon} alt="Pizza" />
        </div>
        <p className="section-text">Pizzas</p>
      </div>
      <div className="section-box">
        <div className="section-icon-box">
          <img src={noodle} alt="Noodles" />
        </div>
        <p className="section-text">Noodles</p>
      </div>
      <div className="section-box">
        <div className="section-icon-box">
          <img src={burger} alt="Burgers" />
        </div>
        <p className="section-text">Burgers</p>
      </div>
      <div className="section-box">
        <div className="section-icon-box">
          <img src={dessert} alt="Desserts" />
        </div>
        <p className="section-text">Desserts</p>
      </div>
      <div className="section-box">
        <div className="section-icon-box">
          <img src={main_course} alt="Main Course" />
        </div>
        <p className="section-text">Main Course</p>
      </div>
    </div>
  );
};

export default MenuSlider;
