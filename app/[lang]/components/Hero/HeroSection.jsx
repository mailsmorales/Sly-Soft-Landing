import React from "react";
import styles from "./HeroSection.module.scss";
import "../../globals.scss";

const item = [
  {
    id: 1,
    title: "Web Development",
    subTitle: "By using latest technologies we shape digital products",
  },
  {
    id: 2,
    title: "UX/UI Design",
    subTitle: "We produce an engaging, cutting-edge, and useful design",
  },
  {
    id: 3,
    title: "Database",
    subTitle: "Empower Your Business with Robust Databases",
  },
  {
    id: 4,
    title: "Infrastructure",
    subTitle: "Building the Backbone of Digital Product",
  },
];

const HeroSection = () => {
  return (
    <div className={styles.customImg}>
      <div className="container">
        <div className={styles.overlay}>
          <div className={styles.overlayB}>
            <h1 className={styles.heroText}>
              High-quality software development created for business automation
            </h1>
          </div>
          <div className={styles.item}>
            <ul className={styles.links}>
              {item.map((items) => (
                <li key={items.id} className={styles.item}>
                  <div className={styles.itemTitle}>{items.title}</div>
                  <div className={styles.itemSub}>{items.subTitle}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={styles.advantages}>Наши преимущества</div> */}
    </div>
  );
};

export default HeroSection;
