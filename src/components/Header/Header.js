import React from 'react';
import styles from "./styles.module.css";

import {HiPhone} from "react-icons/hi";
const Header = () => {
  return (<div className={styles.HeaderContainer}>
    <div className={styles.HeaderContainerIcon}>
        <HiPhone />
    </div>
    <div className={styles.HeaderContainerNumber}>
        <h5>08048809703</h5>
    </div>
</div>)
}

export default Header