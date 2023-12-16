"use client";

import styles from "./ImageSun.module.scss";
import Icons from "@/media/img";
import { useTheme } from "@/hooks/useTheme";

const ImageSun = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button className={styles.button} onClick={handleThemeChange}>
      <div className={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="40"
          viewBox="0 0 74 40"
          fill="none"
        >
          <path
            d="M12.5 5C12.5 2.51472 14.5147 0.5 17 0.5H69C71.4853 0.5 73.5 2.51472 73.5 5V21.9289C73.5 23.1224 73.0259 24.267 72.182 25.1109L59.1109 38.182C58.267 39.0259 57.1224 39.5 55.9289 39.5H1.20711L10.8891 29.818C11.9205 28.7866 12.5 27.3876 12.5 25.9289V5Z"
            stroke="url(#paint0_linear_1564_195)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1564_195"
              x1="37"
              y1="0"
              x2="37"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C2252C" />
              <stop offset="1" stopColor="#ED8127" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.sun}>
          {theme === "light" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1574_212)">
                <path
                  d="M11.9998 3.00019C12.1318 3.00019 12.2628 3.00019 12.3928 3.00019C11.1081 4.19389 10.2824 5.80003 10.0591 7.53941C9.83577 9.27879 10.229 11.0414 11.1705 12.5209C12.112 14.0004 13.5422 15.1032 15.2124 15.6377C16.8826 16.1721 18.6873 16.1043 20.3128 15.4462C19.6875 16.9507 18.6656 18.2572 17.356 19.2264C16.0464 20.1957 14.4982 20.7912 12.8767 20.9496C11.2552 21.1079 9.62104 20.8231 8.14867 20.1256C6.6763 19.428 5.42089 18.3439 4.51637 16.9888C3.61185 15.6337 3.09213 14.0585 3.01267 12.4312C2.9332 10.8038 3.29696 9.18548 4.06515 7.7487C4.83334 6.31192 5.97714 5.11061 7.37454 4.27292C8.77195 3.43523 10.3705 2.99258 11.9998 2.99219V3.00019Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 4C17 4.53043 17.2107 5.03914 17.5858 5.41421C17.9609 5.78929 18.4696 6 19 6C18.4696 6 17.9609 6.21071 17.5858 6.58579C17.2107 6.96086 17 7.46957 17 8C17 7.46957 16.7893 6.96086 16.4142 6.58579C16.0391 6.21071 15.5304 6 15 6C15.5304 6 16.0391 5.78929 16.4142 5.41421C16.7893 5.03914 17 4.53043 17 4Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 11H21M20 10V12"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1574_212">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <Icons.Sun />
          )}
        </div>
      </div>
    </button>
  );
};

export default ImageSun;
