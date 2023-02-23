
import React from 'react';
import {  Link } from "react-router-dom";
import styles from './MenuBar.module.css'

const MenuBar= () =>{
  return (
  <div className={styles.menucss}>
    <li className={styles.menucssLi}>
      <Link to="/" className={styles.Licolor}>Home</Link>
    </li>
    <li className={styles.menucssLi}>
      <Link to="/contact" className={styles.Licolor}>Contact</Link>
    </li>
  </div>
  );
}
export default MenuBar;