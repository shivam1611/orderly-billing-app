import styles from "./MenuSlider.module.css";
import pizza_icon from "../../assets/pizza_icon.png";
import burger from "../../assets/burger_icon.png";
import dessert from "../../assets/dessert_icon.png";
import noodle from "../../assets/noodles_icon.png";
import main_course from "../../assets/mai_course.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const MenuSlider = ({ setFilteredArray }) => {
  const items = useSelector((store) => store.menu.items);
  const [active, setActive] = useState("");

  const handleFilter = (category) => {
    setActive(category);
    setTimeout(() => {
      setFilteredArray(
        items.filter((item) => item.category.toLowerCase() === category)
      );
    }, 500);
  };

  return (
    <div className={styles.menu_slider_container}>
      <div
        className={`${styles.section_box} ${
          active == "pizza" && styles.activeClass
        }`}
        onClick={() => handleFilter("pizza")}
      >
        <div className={`${styles.section_icon_box}`}>
          <img src={pizza_icon} alt="Pizza" />
        </div>
        <p className={styles.section_text}>Pizzas</p>
      </div>
      <div
        className={`${styles.section_box} ${
          active == "noodles" && styles.activeClass
        }`}
        onClick={() => handleFilter("noodles")}
      >
        <div className={styles.section_icon_box}>
          <img src={noodle} alt="Noodles" />
        </div>
        <p className={styles.section_text}>Noodles</p>
      </div>
      <div
        className={`${styles.section_box} ${
          active == "burger" && styles.activeClass
        }`}
        onClick={() => handleFilter("burger")}
      >
        <div className={styles.section_icon_box}>
          <img src={burger} alt="Burgers" />
        </div>
        <p className={styles.section_text}>Burgers</p>
      </div>
      <div
        className={`${styles.section_box} ${
          active == "dessert" && styles.activeClass
        }`}
        onClick={() => handleFilter("dessert")}
      >
        <div className={styles.section_icon_box}>
          <img src={dessert} alt="Desserts" />
        </div>
        <p className={styles.section_text}>Desserts</p>
      </div>
      <div
        className={`${styles.section_box} ${
          active == "main course" && styles.activeClass
        }`}
        onClick={() => handleFilter("main course")}
      >
        <div className={styles.section_icon_box}>
          <img src={main_course} alt="Main Course" />
        </div>
        <p className={styles.section_text}>Main Course</p>
      </div>
    </div>
  );
};

export default MenuSlider;
