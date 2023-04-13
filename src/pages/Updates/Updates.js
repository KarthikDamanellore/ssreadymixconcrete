import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import cardOne from "../../components/card/cardOne";
import ProductsCard from "../../components/Cards/ProductsCard";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar";
const Updates = () => {
  return (
    <div className={styles.updatesContainer}>
      <Header />
      <Navbar />
      {/*<---Latest Upadates start--->*/}
      <div className={styles.latestUpdatesMainContainer}>
        <div className={styles.latestUpdatesContainer}>
          <div className={styles.latestUpdatesHeading}>
            <h3>Latest Upadtes</h3>
          </div>

          <div className={styles.latestUpadtesCardContainer}>
            {cardOne &&
              cardOne.map((item, index) => (
                <ProductsCard
                  key={index}
                  cardImg={item.cardOneImg}
                  cardName={item.cardOneDesc}
                  date={item.cardOneLeft}
                  readMore={"Read More"}
                  cartBtn={false}
                  productsContainerCards={styles.latestUpdateCards}
                  productsContainerCardsBottomDesc={
                    styles.latestUpdatesBottomDesc
                  }
                  productsContainerCard_img={styles.latestUpdates_img}
                  updatesOverlay={styles.updatesOverlay}
                />
              ))}
          </div>

          <div className={styles.latestUpdatesBottomHeading}>
            <h3>VIEW ALL UPDATES</h3>
          </div>
        </div>
      </div>
      {/*<---Latest Upadates End--->*/}
      <div className={styles.updatesBottomContainer}>
        <OffersUpdates />
        <Footer />
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default Updates;
