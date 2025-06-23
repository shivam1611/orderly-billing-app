import { useSelector } from "react-redux";
import styles from "./TaxesSettings.module.css";

const TaxesSettings = () => {
  const taxes = useSelector((store) => store.taxes);
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <p className={styles.label}>GST Rate</p>
        <p className={styles.body}>{taxes.gstRate}%</p>
      </div>
      <div className={styles.bar}>
        <p className={styles.label}>Service Charge</p>
        <p className={styles.body}>{taxes.serviceCharge}%</p>
      </div>
    </div>
  );
};

export default TaxesSettings;
