import React, { useState } from "react";
import styles from "./styles.module.css";
import mixer from "../../assets/images/mixer.avif";

import { AiOutlineClose } from "react-icons/ai";

const OurStory = (props) => {
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
    <div
      className={[styles.ourStoryContainer, props.ourStoryContainer].join(" ")}
    >
      <div className={styles.ourStoryContainerLeft}>
        <img
          alt="mixerImg"
          className={[
            styles.ourStoryContainerLeftImg,
            props.ourStoryContainerLeftImg,
          ].join(" ")}
          src={mixer}
        />
      </div>
      <div
        className={[
          styles.ourStoryContainerRight,
          props.ourStoryContainerRight,
        ].join(" ")}
      >
        <h3
          className={[
            styles.ourStoryContainerRightHeading,
            props.ourStoryContainerRightHeading,
          ].join(" ")}
        >
          Our Story
        </h3>
        <p
          className={[
            styles.ourStoryContainerRightDesc,
            props.ourStoryContainerRightDesc,
          ].join(" ")}
        >
          SERVIECES: At Sruthi Ready Mixed Concrete ( SRUTHI READY MIX CONCRETE
          ) is delivered in its completely robotized and electronic cement
          grouping plants. SRUTHI READY MIX Concrete produces and supplies
          cement blends, which are structured in its well-prepared research
          centers according to built up strategies to follow different
          arrangements of Indian Standards. Sruthi READY MIX Concrete's
          accomplished c...
        </p>
        {/* <h4>READ MORE ABOUT US</h4> */}
        <>
          <h4 onClick={toggleModal} className={styles.btnModal}>
            READ MORE ABOUT US
          </h4>

          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modalContent}>
                <h3>Our Story</h3>
                <h5>Services</h5>
                <p>
                  At Sruthi Ready Mixed Concrete ( Sruthi READY MIX CONCRETE )
                  is delivered in its completely robotized and electronic cement
                  grouping plants. SRUTHI READY MIX Concrete produces and supplies
                  cement blends, which are structured in its well-prepared
                  research centers according to built up strategies to follow
                  different arrangements of Indian Standards. SRUTHI READY MIX
                  Concrete's accomplished coordinations group works intimately
                  with you to guarantee that the solid of imperative quality is
                  conveyed on schedule and in the proper amounts. Sruthi
                  Ready Mix concrete Manufacturers and Suppliers in Kamareddy.
                </p>
                <span className={styles.closeModal} onClick={toggleModal}>
                  <AiOutlineClose />
                </span>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default OurStory;
