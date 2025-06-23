import styles from "./FoodCard.module.css";
import veg from "../../assets/Veg_symbol.svg.png";
import non_veg from "../../assets/non_veg.png";
import { useEffect, useState } from "react";
import { add_cart_item } from "../../features/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

const FoodCard = ({
  img,
  name,
  price,
  isVeg,
  setViewAbout,
  handleViewAbout,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  const menu_items = useSelector((store) => store.menu.items);

  const [added, setAdded] = useState(cart.some((food) => food.food_id == id));

  function handleAddItem(id) {
    if (cart.some((food) => food.food_id == id)) {
      return; // If item already exists, exit the function
    }
    const foundItem = menu_items.find((food) => food.food_id == id);
    if (foundItem) {
      // Ensure foundItem is not undefined
      dispatch(add_cart_item(foundItem));
    }
  }

  // Watch the items in cart and then modify the status of card using use Effect
  useEffect(() => {
    // Check if the item still exists in cartItem
    setAdded(cart.some((food) => food.food_id == id));
  }, [cart]);

  return (
    <div className={styles.card}>
      <div className={styles.offer_section}>Offers</div>
      <div className={styles.img_section} onClick={() => handleViewAbout(id)}>
        <img src={img} alt="Pizza" />
      </div>
      <div className={styles.detail_section}>
        <p className={styles.food_title}>{name}</p>
        <div className={styles.col}>
          <p className={styles.food_price}>$ {price}</p>
          <img src={isVeg ? veg : non_veg} alt="" />
        </div>
        <div className={styles.control}>
          <div className={styles.left_section}>
            <p
              className={`${
                quantity != 1 ? styles.cnt : styles.count_btn_disabled
              }`}
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((a) => a - 1);
                }
                return;
              }}
            >
              <i className="fa-solid fa-minus"></i>
            </p>
            <p className={(styles.cnt, styles.val)}>{quantity}</p>
            <p
              className={styles.cnt}
              onClick={() => {
                setQuantity((a) => a + 1);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </p>
          </div>
          <div className={styles.right_section}>
            <button
              className={`${styles.btn_add} ${
                !added ? styles.btn_add_not_selected : styles.btn_add_clicked
              }`}
              onClick={() => {
                setAdded(true);
                handleAddItem(id);
              }}
            >
              {!added ? "+ Add" : "Added"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
