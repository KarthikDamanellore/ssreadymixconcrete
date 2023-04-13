import React from 'react';
import styles from "./styles.module.css";

const ContactsData = (props) => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsInsideContainer}>
        <span>{props.Icon}</span>
        <h5>{props.Heading}</h5>
        <p>{props.Desc}</p>
      </div>
    </div>
  )
}
export default ContactsData;