import { useSelector } from "react-redux";
import styles from "./MenuSection.module.css";
import FoodCard from "../FoodCard/FoodCard";

const MenuSection = ({ filteredArray }) => {
  const menu = useSelector((store) => store.menu.items);
  return (
    <div className={styles.menu_section}>
      { filteredArray.length > 0 ? filteredArray.map((food) => (
        <FoodCard
          img={food.img}
          name={food.name}
          key={food.food_id}
          price={food.price}
          isVeg={food.isVeg}
        />
      )) : <p>No item found</p> }
    </div>
  );
};

export default MenuSection;
