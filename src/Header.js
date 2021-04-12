import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header_div}>
      <h1 className={styles.header_logo}>Keep Task App</h1>
    </div>
  );
};
export default Header;
