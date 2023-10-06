import React from "react";
// import AdvantagesIcon from "../Ui/Advantages/AdvantagesIcon";
import Image from "next/image";
import { advantagesItem } from "./advantagesItem";
import styles from "./Advantages.module.scss";

const Advantages = ({}) => {
  return (
    <div>
      <h2 className={styles.advantagesTitle}>Наши преимущества</h2>
      <div className="container">
        <ul className={styles.list}>
          {advantagesItem.map((item) => (
            <li className={styles.item} key={item.id}>
              <div>
                <Image src={item.Icon} alt="awdawd" />
              </div>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.subTitle}>{item.subTitle}</p>
              <div>
              <Image
                className={styles.itemStroke}
                src={item.stroke}
                alt="awdaw"
              />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
