import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaHandshake } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const MobileNavbar = () => {
  // Toggle Menu
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // useNavigate
  const navigate = useNavigate();

  // Navigate To Top For Every Page Routing[useEffect]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mobileNavbarContainer}>
      <div className={styles.mobileNavbarInsideContainer}>
        <div className={styles.navbarHome} onClick={() => navigate("/")}>
          <span>
            <AiOutlineHome />
          </span>
          <h5>Home</h5>
        </div>
        <div
          className={styles.navbarProducts}
          onClick={() => navigate("/products")}
        >
          <span>
            <FaHandshake />
          </span>
          <h5>Products</h5>
        </div>
        <div
          className={styles.navbarContact}
          onClick={() => navigate("/contact")}
        >
          <span>
            <MdPhoneInTalk />
          </span>
          <h5>Contact</h5>
        </div>

        <div className={styles.navbarMenu}>
          <span>
            {openMenu ? (
              <RxCross1 onClick={() => setOpenMenu(!openMenu)} />
            ) : (
              <FaBars onClick={() => setOpenMenu(!openMenu)} />
            )}
          </span>
          <h5>Menu</h5>
        </div>
        {openMenu ? (
          <div className={styles.navberMenuItems}>
            <p onClick={() => navigate("/about")}>About</p>
            <p onClick={() => navigate("/updates")}>Updates</p>
            <p onClick={() => navigate("/gallery")}>Gallery</p>
            <p onClick={() => navigate("/products")}>PurchaseService</p>
            <p onClick={() => navigate("/more")}>More</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileNavbar;
