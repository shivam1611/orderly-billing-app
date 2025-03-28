import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import styles from "./Billing.module.css";
import NoCartItem from "../NoCartItem/NoCartItem";
import { useEffect, useState } from "react";
import {
  set_order_type,
  set_payment_mode,
  set_tax_amount,
  set_total_amount,
} from "../../features/cartSlice.js";
import { add_order } from "../../features/orderSlice.js";
import Button from "../Button/Button.js";
import PaymentButtons from "../PaymentButtons/PaymentButtons.js";

const Billing = ({ cartItem, setCartItem, handleDeleteItem }) => {
  const taxes = useSelector((store) => store.taxes);
  const data = useSelector((store) => store.cart);
  const cart = useSelector((store) => store.cart.items);
  const gross_amount = useSelector((store) => store.cart.gross_amount);
  const datamain = useSelector((store) => store.order);
  const [taxAmount, setTaxAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const dispatch = useDispatch();

  // order type
  const orderType = ["Dining", "Take Away", "Dilivery"];
  const [selected, setSelected] = useState("");

  // payment Mode
  const payment_mode = [
    { name: "Cash", icon: "fa-solid fa-money-bills" },
    { name: "Card", icon: "fa-solid fa-credit-card" },
    { name: "QR Code", icon: "fa-solid fa-qrcode" },
  ];
  const [selectedMode, setSelectedMode] = useState("");

  // const [selected_order_type, set_selected_order_type] = useState
  //billing logic

  const [Order, setOrder] = useState({});

  // function that makes bill at last
  function handleSubmitOrder(data) {
    dispatch(add_order(data));
    console.log(datamain);
  }

  useEffect(
    function () {
      const amount =
        (gross_amount * (taxes.gstRate + taxes.serviceCharge)) / 100;
      console.log(amount);
      setTaxAmount(amount);
      setGrandTotal(gross_amount + amount);
      dispatch(set_tax_amount(amount.toFixed(2)));
      dispatch(set_total_amount(grandTotal.toFixed(2)));
    },
    [gross_amount, taxAmount]
  );
  return (
    <div className={styles.billing}>
      <header className={styles.header}>
        <i className="fa_solid fa_file_invoice"></i>
        <p className={styles.title}>Order Generator</p>
      </header>

      <div className={styles.row_1}>
        {orderType.map((name) => (
          <Button
            name={name}
            key={name}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
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
            <p className={styles.dark_title}> ${gross_amount.toFixed(2)}</p>
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
          {payment_mode.map((data) => (
            <PaymentButtons
              name={data.name}
              icon={data.icon}
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
              key={data.name}
              set_payment_mode={set_payment_mode}
            />
          ))}
        </div>
        <div className={styles.call_to_action_section}>
          <button className={styles.btn_disable}>Cancel</button>
          <button
            className={styles.btn_main}
            onClick={() => dispatch(add_order(data))}
          >
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
