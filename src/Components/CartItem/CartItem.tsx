import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { remove_cart_item } from "../../features/cartSlice.js";

const CartItem = ({ name, img, price, id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);

  function handleDeleteItem() {
    dispatch(remove_cart_item(id));
  }
  return (
    <div className={styles.card}>
      <div className={styles.left_section}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.right_section}>
        <h1 className={styles.food_name}>{name}</h1>
        <p className={styles.price}>$ {price}</p>
        <i
          onClick={(id) => handleDeleteItem(id)}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
