import React from 'react';
import styles from "./styles.module.css";

const OffersUpdates = () => {
  return (<div className={styles.offersUpdatesContainer}>
    <div className={styles.offersUpdatesInsideContainer}>
      <h3>Subscribe for latest offers & updates</h3>
      <p>We hate spam too..</p>
      <div className={styles.offersUpdatesInputs}>
              <input placeholder="Enter your Mobile number/ email address" type="text" />
              <input type="submit" />
            </div>
    </div>

    

  </div>)
}

export default OffersUpdates