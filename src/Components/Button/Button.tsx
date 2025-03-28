import styles from "./Button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { set_order_type } from "../../features/cartSlice.js";

const Button = ({ name, selected, setSelected }) => {
  const dispatch = useDispatch();
  function handleClick(name) {
    setSelected(name);
    dispatch(set_order_type(name));
  }
  return (
    <button
      onClick={() => handleClick(name)}
      className={`${styles.btn_1} ${selected == name && styles.set_selected}`}
    >
      {name}
    </button>
  );
};

export default Button;
