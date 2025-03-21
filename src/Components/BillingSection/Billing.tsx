import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import styles from "./Billing.module.css";
// import { add_cart_item } from "../../features/cartSlice.js";

const Billing = () => {
  const { items, total_amount } = useSelector((store) => store.cart);
  // const dispatch = useDispatch();
  // dispatch(
  //   add_cart_item({
  //     food_id: 1,
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bdKKaTySsc4t8ahzTXQIG87Ls_J8ph907w&s",
  //     name: "Margherita Pizza",
  //     description:
  //       "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
  //     price: 7.99,
  //     isVeg: true,
  //     category: "Pizza",
  //     offers: ["Buy 1 Get 1 Free on Wednesdays", "10% off for new customers"],
  //     ingredients: [
  //       "Tomato sauce",
  //       "Mozzarella",
  //       "Basil",
  //       "Olive oil",
  //       "Pizza crust",
  //     ],
  //   })
  // );
  return (
    <div className={styles.billing}>
      <header className={styles.header}>
        <i className="fa_solid fa_file_invoice"></i>
        <p className={styles.title}>Order Generator</p>
      </header>

      <div className={styles.row_1}>
        <button className={styles.btn_1}>Dining</button>
        <button className={styles.btn_1}>Take Away</button>
        <button className={styles.btn_1}>Dilivery</button>
      </div>

      <div className={styles.cart_list}>
        {items.map((items) => (
          <CartItem
            name={items.name}
            img={items.img}
            key={items.food_id}
            price={items.price}
          />
        ))}
      </div>

      <div className={styles.row_4}>
        <div className={styles.detail}>
          <div className={styles.esc}>
            <p className={styles.fade_title}>Sub Total</p>
            <p className={styles.dark_title}> ${total_amount}</p>
          </div>
          <div className={styles.esc}>
            <p className={styles.fade_title}>Tax 5%</p>
            <p className={styles.dark_title}>${total_amount}</p>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.bg_title}>Total Amount:</p>
          <p className={styles.bg_title_amount}>${total_amount}</p>
        </div>
        <div className={styles.payment_option_box}>
          <button className={`${styles.btn_1} ${styles.min_height}`}>
            <i className="fa_solid fa_money_bills"></i>Cash
          </button>
          <button className={`${styles.btn_1} ${styles.min_height}`}>
            <i className="fa_solid fa_credit_card"></i>Card
          </button>
          <button className={`${styles.btn_1} ${styles.min_height}`}>
            <i className="fa_solid fa_qrcode"></i>QR Code
          </button>
        </div>
        <div className={styles.call_to_action_section}>
          <button className={styles.btn_disable}>Cancel</button>
          <button className={styles.btn_main}>Generate Bill</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
