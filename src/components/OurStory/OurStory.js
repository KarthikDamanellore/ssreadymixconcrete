import React from "react";
import styles from "./styles.module.css";
import mixer from "../../assets/images/mixer.avif";

const OurStory = (props) => {
  return (
    <div
      className={[styles.ourStoryContainer, props.ourStoryContainer].join(" ")}
    >
      <div className={styles.ourStoryContainerLeft}>
        <img alt="mixerImg"
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
          SERVIECES: At Sruthi Ready Mixed Concrete ( SRUTHI READY MIX
          CONCRETE ) is delivered in its completely robotized and electronic
          cement grouping plants. SRUTHI READY MIX Concrete produces and supplies
          cement blends, which are structured in its well-prepared research
          centers according to built up strategies to follow different
          arrangements of Indian Standards. Sruthi READY MIX Concrete's accomplished
          c...
        </p>
        <h4>READ MORE ABOUT US</h4>
      </div>
    </div>
  );
};

export default OurStory;
