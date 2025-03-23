import styles from "./NoCartItem.module.css";
import { motion } from "framer-motion";
const NoCartItem = () => {
  return (
    <motion.div className={styles.container}>
      <i className="fa-solid fa-utensils"></i>
      <p className={styles.text}>No Items Added</p>
    </motion.div>
  );
};

export default NoCartItem;
