import styles from "./AboutDish.module.css";
import veg from "../../assets/Veg_symbol.svg.png";
import non_veg from "../../assets/non_veg.png";
import { motion } from "framer-motion";

const AboutDish = ({ setViewAbout, selectedCard }) => {
  return (
    <motion.div animate={{opacity:1, y:-5, scale:1.01}} className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.basic_header}>
            <div className={styles.veg_section}>
              <img src={selectedCard.isVeg ? veg : non_veg} alt="" />
            </div>
            <div className={styles.box}>
              <p className={styles.label}>Food Name</p>
              <p className={styles.heading}>{selectedCard.name}</p>
            </div>
            <div className={styles.box}>
              <p className={styles.label}>Food Price</p>
              <p className={styles.food_price}>${selectedCard.price}</p>
            </div>
            <div className={styles.box}>
              <p className={styles.label}>Current Offers ✨</p>
              <p className={styles.heading}>
                {selectedCard.offers.length == 1
                  ? selectedCard.offers
                  : selectedCard.offers.map((data) => (
                      <li>
                        <i className="fa-solid fa-star"></i>
                        {data}
                      </li>
                    ))}
              </p>
            </div>
          </div>
          <div className={styles.img_container}>
            <img src={selectedCard.img} alt="" />
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.box}>
            <p className={styles.bottom_label}>
              {/* <i className="fa-solid fa-circle-info"></i> */}
              Description
            </p>
            <p className={styles.body_text}>{selectedCard.description}</p>
          </div>
          <div className={styles.box}>
            <p className={styles.bottom_label}>
              {/* <i className="fa-solid fa-circle-info"></i> */}
              Incredients
            </p>
            <p className={styles.body_text}>
              {selectedCard.ingredients.map((data) => (
                <p>
                  
                  <i class="fa-solid fa-circle"></i> 
                  {data}
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className={styles.btn_section}>
          <button onClick={() => setViewAbout(false)}>Okay</button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutDish;
