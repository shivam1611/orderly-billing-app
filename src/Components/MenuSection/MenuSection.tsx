import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./MenuSection.module.css";
import FoodCard from "../FoodCard/FoodCard";
import NoFood from "../NoFoodFound/NoFood";
import Loader from "../Loader/Loader"; // Create a Loader component
import AboutDish from "../AboutDish/AboutDish";


const MenuSection = ({
  filteredArray,
  setSearch,
  setFilteredArray,

  cartItem,
}) => {
  const menu = useSelector((store) => store.menu.items);
  const [loading, setLoading] = useState(true);
  const [viewAbout, setViewAbout] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (filteredArray.length >= 0) {
      setTimeout(() => setLoading(false), 1000); // Simulating a delay
    }
  }, [filteredArray]);

  function handleViewAbout(id) {
    setSelectedCard(menu.find((obj) => obj.food_id === id));
    setViewAbout(true);
  }
  return (
    <div className={styles.menu_section}>
      {viewAbout && (
        <AboutDish setViewAbout={setViewAbout} selectedCard={selectedCard} />
      )}
      {loading ? (
        <Loader />
      ) : filteredArray.length > 0 ? (
        filteredArray.map((food) => (
          <FoodCard
            img={food.img}
            name={food.name}
            key={food.food_id}
            price={food.price}
            isVeg={food.isVeg}
            setViewAbout={setViewAbout}
            handleViewAbout={handleViewAbout}
            id={food.food_id}
            
            cartItem={cartItem}
          />
        ))
      ) : (
        <NoFood setSearch={setSearch} setFilteredArray={setFilteredArray} />
      )}
    </div>
  );
};

export default MenuSection;
