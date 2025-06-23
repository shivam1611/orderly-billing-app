import styles from "./ordersSection.module.css";
import OrderBox from "../../Components/OrderBox/OrderBox";

const OrdersSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <i className="fa-solid fa-clipboard"></i> Order Section
        <div className={styles.order_box}>
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
       
        </div>
      </h1>
    </div>
  );
};

export default OrdersSection;
