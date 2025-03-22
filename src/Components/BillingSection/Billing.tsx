import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import styles from "./Billing.module.css";
// import { add_cart_item } from "../../features/cartSlice.js";

const Billing = () => {
  const taxes = useSelector((store) => store.taxes);
  const { items, total_amount } = useSelector((store) => store.cart);

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
            <p className={styles.fade_title}>
              Tax {taxes.gstRate + taxes.serviceCharge}%
            </p>
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
