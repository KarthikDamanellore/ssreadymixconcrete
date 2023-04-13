import React from "react";
import styles from "./styles.module.css";
// import cardStyles from "../Home/styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
import Footer from "../../components/Footer/Footer";
import cardsData from "../../components/card/card";
import ProductsCard from "../../components/Cards/ProductsCard";
import MobileNavbar from "../../components/MobileNavbar";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <Header />
      <Navbar />
      <div className={styles.productsInsideContainer}>
        {/*<---Our Products start---> */}
        <div className={styles.ourProductsContainer}>
          <div className={styles.ourProductsContainerHeading}>
            <h3>Our Products</h3>
          </div>
          <div className={styles.ourProductContainer} id="products">
            {cardsData &&
              cardsData.map((item, index) => (
                <ProductsCard
                  key={index}
                  cardImg={item.cardImg}
                  cardName={item.cardName}
                  cardDiscount={item.cardDiscount}
                  originalPrice={item.originalPrice}
                  offerPrice={item.offerPrice}
                  cartBtn={true}
                  imageOverlayStyle={styles.imageOverlayStyle}
                  productsContainerCards={styles.productsContainerCards}
                  // imageOverlayViewStyle={styles.imageOverlayViewStyle}
                />
              ))}
          </div>
        </div>

        {/* our products end */}

        <div className={styles.productsBottomContainer}>
          <OffersUpdates />
          <Footer />
        </div>
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default Products;
