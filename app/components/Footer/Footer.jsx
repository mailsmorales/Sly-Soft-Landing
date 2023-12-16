"use client"
import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Logo from "@/media/Logo.png";
import styles from "./Footer.module.scss";

const item = [
  {
    id: 1,
    title: "Услуги",
  },
  {
    id: 2,
    title: "Проекты",
  },
  {
    id: 3,
    title: "Контакты",
  },
  {
    id: 4,
    title: "Этапы разработки",
  },
  {
    id: 5,
    title: "FAQ",
  },
];

const Footer = ({ dictionary }) => {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <ul className={styles.links}>
          {item.map((items) => (
            <li key={items.id} className={styles.item}>
              {items.title}
            </li>
          ))}
        </ul>
        <div className={styles.footerLine}></div>
        <div className={styles.footerBot}>
          <div className={styles.footerInsideMatters}>
            <Link href="/">
              <ExportedImage
                src={Logo}
                width={130}
                height={56}
                alt="SlySoft"
              />
            </Link>
            <span>Inside Matters</span>
          </div>
          <div className={styles.policy}>
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;