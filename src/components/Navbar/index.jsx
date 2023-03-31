import React, { useState } from 'react';
import {Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        <Link to="/stars">Второе задание</Link>
      </div>
      <div className={styles.item}>
        <Link to="/tags">Третье задание</Link>
      </div>
      <div className={styles.item}>
        <Link to="/pagination">Четвертое задание</Link>
      </div>
    </div>
  );
};

export default Navbar;
