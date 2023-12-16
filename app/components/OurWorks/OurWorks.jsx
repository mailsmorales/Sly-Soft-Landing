"use client";

import React from "react";
import OurWorksCard from "./components/OurWorksCard/OurWorksCard";
import styles from "./OurWorks.module.scss";
import { ourWorksItems } from "./ourWorksItems";

const OurWorks = () => {

  return (
    <div className={styles.section}>
      <div className={styles.ourWorksTop}>
        <h2 className={styles.text}>Наши работы</h2>
        <div className={styles.checkOut}>
          <p className={styles.checkOutDesc}>
            Ознакомьтесь с нашими проектами, которые воплощают инновации,
            мастерство и страсть к воплощению идей в реальность. Каждый проект
            рассказывает уникальную историю сотрудничества, опыта и преданности
            делу создания исключительных решений.
          </p>
        </div>
      </div>
      <div className={styles.containerBlock}>
        {ourWorksItems.map((item, i) => <OurWorksCard item={item} key={`our${i}`} />)}
      </div>
      <div className={styles.sectionBlock}>
      </div>
    </div>
  );
};

export default OurWorks;