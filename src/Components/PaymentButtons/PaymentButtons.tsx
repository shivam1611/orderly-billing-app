import { useDispatch } from "react-redux";
import styles from "./PaymentButtons.module.css";
const PaymentButtons = ({
  name,
  icon,
  selectedMode,
  setSelectedMode,
  set_payment_mode,
}) => {
  const dispatch = useDispatch();
  function handleClick(name) {
    setSelectedMode(name);
    dispatch(set_payment_mode(name));
  }
  return (
    <button
      className={`${styles.btn_1} ${styles.min_height} ${
        selectedMode == name && styles.set_selected
      }`}
      onClick={() => {
        handleClick(name);
      }}
    >
      <i className={icon}></i>
      {name}
    </button>
  );
};

export default PaymentButtons;
