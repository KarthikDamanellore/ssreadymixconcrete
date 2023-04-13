import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import OurPagecard from "../../components/card/ourPagecard";
import ProductsCard from "../../components/Cards/ProductsCard";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar";
const More = () => {
  return (
    <div className={styles.moreContainer}>
      <Header />
      <Navbar />
      {/* Ourpages start*/}
      <div className={styles.OurpageContainer}>
        <div className={styles.OurpageContainerHeading}>
          <h3>Our Pages</h3>
        </div>
        <div className={styles.OurpageContainerCard}>
          {OurPagecard &&
            OurPagecard.map((item, index) => (
              <ProductsCard
                key={index}
                cardName={item.ourPageCardName}
                date={item.cardOneLeft}
                readMore={"Read More"}
                productsContainerCards={styles.ourPageContainerCard}
                productsContainerCardsName={styles.ourPageCardName}
                productsContainerCardsBottomDesc={
                  styles.productsContainerCardsBottomDesc
                }
              />
            ))}
        </div>
      </div>
      {/* Ourpages end*/}

      <div className={styles.moreBottomContainer}>
        <OffersUpdates />
        <Footer />
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default More;
