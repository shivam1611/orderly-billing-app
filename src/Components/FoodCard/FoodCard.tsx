import styles from "./FoodCard.module.css";
import veg from "../../assets/Veg_symbol.svg.png";
import non_veg from "../../assets/non_veg.png";
import { useState } from "react";

const FoodCard = ({ img, name, price, isVeg }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.offer_section}>Offers</div>
      <div className={styles.img_section}>
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
                setAdded((a) => !a);
              }}
            >{!added ? "+ Add" : "Added"}
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
