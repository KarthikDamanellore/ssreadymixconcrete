import React from "react";
import styles from "./styles.module.css";

import { TfiPlus } from "react-icons/tfi";

const PhotoGalleryCard = (props) => {
  return (
    <div className={styles.photoGalleryContainer}>
      <div className={styles.photoGalleryImageContainer}>
        <img src={props.GalleryImg} className={[styles.galleryImg, props.galleryImg].join(" ")} />
        <div className={styles.overlay}>
          <div className={styles.text}>
            <TfiPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryCard;
