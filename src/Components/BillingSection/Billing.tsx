import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import styles from "./Billing.module.css";
import NoCartItem from "../NoCartItem/NoCartItem";
import { useEffect, useState } from "react";

const Billing = ({ cartItem, setCartItem, handleDeleteItem }) => {
  const taxes = useSelector((store) => store.taxes);
  const cart = useSelector((store) => store.cart.items);
  const total_amount = useSelector((store) => store.cart.total_amount);
  const [taxAmount, setTaxAmount] = useState(0);
  const grandTotal = total_amount + taxAmount;

  useEffect(
    function () {
      const amount =
        (total_amount * (taxes.gstRate + taxes.serviceCharge)) / 100;
      setTaxAmount(amount);
    },
    [total_amount]
  );

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
        {cart.length > 0 ? (
          cart.map((items) => (
            <CartItem
              name={items.name}
              img={items.img}
              key={items.food_id}
              price={items.price}
              cartItem={cartItem}
              setCartItem={setCartItem}
              handleDeleteItem={handleDeleteItem}
              id={items.food_id}
            />
          ))
        ) : (
          <NoCartItem />
        )}
      </div>

      <div className={styles.row_4}>
        <div className={styles.detail}>
          <div className={styles.esc}>
            <p className={styles.fade_title}>Sub Total</p>
            <p className={styles.dark_title}> ${total_amount.toFixed(2)}</p>
          </div>
          <div className={styles.esc}>
            <p className={styles.fade_title}>
              Tax {taxes.gstRate + taxes.serviceCharge}%
            </p>
            <p className={styles.dark_title}>${taxAmount.toFixed(2)}</p>
          </div>
        </div>
        <div className={styles.total}>
          <p className={styles.bg_title}>Total Amount:</p>
          <p className={styles.bg_title_amount}>${grandTotal.toFixed(2)}</p>
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
