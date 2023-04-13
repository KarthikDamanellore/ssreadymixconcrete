import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import photoGallery from "../../components/card/photGallery";
import PhotoGalleryCard from "../../components/PhotoGallery";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar";

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Header />
      <Navbar />
      {/*<---Photo Gallery start--->*/}

      <div className={styles.photoGalleryContainer}>
        <div className={styles.photoGalleryHeading}>
          <h3>PhotoGallery</h3>
        </div>
        <div className={styles.photoGalleryOuterContainerStyle}>
          {photoGallery &&
            photoGallery.map((item, index) => {
              return (
                <PhotoGalleryCard
                  key={index}
                  GalleryImg={item.GalleryImg}
                  galleryImg={styles.galleryImg}
                />
            );
            })}
        </div>
      </div>
      {/*<---Photo Gallery End--->*/}

      <div className={styles.galleryBottonContainer}>
        <OffersUpdates />
        <Footer />
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default Gallery;
