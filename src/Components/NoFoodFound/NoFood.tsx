import { useSelector } from "react-redux";
import styles from "./NoFood.module.css";

const NoFood = ({ setSearch, setFilteredArray }) => {
  const items = useSelector((store) => store.menu.items);

  function handleClick() {
    setSearch("");
    setFilteredArray(items);
  }
  return (
    <div className={styles.container}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>No items found !!</p>
      <button onClick={() => handleClick()}>Back</button>
    </div>
  );
};

export default NoFood;
