import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add(styles.activeModal);
  } else {
    document.body.classList.remove(styles.activeModal);
  }

  return (
    <>
      <button onClick={toggleModal} className={styles.btnModal}>
        Make An Enquiry
      </button>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h5>Make An Enquiry</h5>
            <input
              type="Text"
              placeholder="Welcome to sruthi ready mix concrete"
            />
            <input
              type="email"
              placeholder="Your mobile Number/email address"
            />
            <button>Submit</button>
            <span className={styles.closeModal} onClick={toggleModal}>
              <AiOutlineClose />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
