import styles from "./CartItem.module.css";

const CartItem = ({ name, img, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.left_section}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.right_section}>
        <h1 className={styles.food_name}>{name}</h1>
        <p className={styles.price}>$ {price}</p>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default CartItem;
