import React from "react";
import { BsShare } from "react-icons/bs";

import styles from "./Products.module.css";

const ProductsCard = (props) => {
  return (
    <div
      className={[
        styles.productsContainerCards,
        props.productsContainerCards,
      ].join("  ")}
    >
      {props.cardImg && (
        <div className={styles.productsContainerCardsHover}>
          <img
            className={[
              styles.productsContainerCard_img,
              props.productsContainerCard_img,
            ].join("  ")}
            src={props.cardImg}
          />
          <div
            className={[styles.updatesOverlay, props.updatesOverlay].join(" ")}
          ></div>
          {props.cartBtn && (
            <div className={styles.imageOverlayViewStyle}>
              <button>ADD TO CART</button>
              <button>DETAILS</button>
            </div>
          )}
        </div>
      )}
      <div className={styles.productsContainer_Cards}>
        <div>
          <h3
            className={[
              styles.productsContainerCardsName,
              props.productsContainerCardsName,
            ].join(" ")}
          >
            {props.cardName}
          </h3>
        </div>
        <div className={styles.productsContainerCardsBorder}></div>
        <div
          className={[
            styles.productsContainerCardsBottomContent,
            props.productsContainerCardsBottomContent,
          ].join(" ")}
        >
          <div className={styles.productsContainerCardsPriceDetails}>
            <div className={styles.productsContainerCardsPriceOffer}>
              {props.cartBtn && (
                <div className={styles.productsContainerCardsOfferButton}>
                  <button>{props.cardDiscount}</button>
                </div>
              )}
              {/* <div className={styles.productsContainerCardsBlock2c1Off2}>
                        <img src={priceIcon}/>
                      </div> */}
            </div>
            {props.originalPrice && (
              <div className={styles.productsContainerCardsPriceses}>
                <h3>INR {props.originalPrice}</h3>
                <h3>INR {props.offerPrice}</h3>
              </div>
            )}
            {props.date && (
              <h3 className={styles.ProductsDate}> {props.date}</h3>
            )}
          </div>
          <div
            className={
              // props.productsContainerCardsBottomDesc &&
              props.productsContainerCardsBottomDesc
            }
          >
            {props.readMore && <h3> {props.readMore}</h3>}
            <span>
              <BsShare />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
