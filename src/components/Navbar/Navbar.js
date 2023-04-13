import React from "react";
import styles from "./styles.module.css";

// import logo from "../../../src/assets/images/logo.png";
import logo2 from "../../assets/images/logo2.jpg";

import { BiSearchAlt } from "react-icons/bi";
import { BsCartDash } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <div id="navbar" className={styles.NavbarContainer}>
      {/* Navbar start */}
      <div className={styles.NavbarContainerLogo}>
        <img onClick={() => navigate("/")} src={logo2} />
      </div>
      <div className={styles.NavbarContainerMenu}>
        <ul
          className={[styles.NavbarMenuItems, props.NavbarMenuItems].join(" ")}
        >
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/updates")}>Updates</li>
          <li onClick={() => navigate("/gallery")}>Gallery</li>
          <li onClick={() => navigate("/more")}>More</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <button onClick={() => navigate("/products")}>
            BOOK APPOINTMENT
          </button>
          <li>
            <BiSearchAlt />
          </li>
          <li>
            <BsCartDash />
          </li>
        </ul>
      </div>

      <div className={styles.NavbarContainerMobileMenu}>
        <ul>
          <button onClick={() => navigate("/products")}>
            BOOK APPOINTMENT
          </button>
          <li>
            <BiSearchAlt />
          </li>
          <li>
            <BsCartDash />
          </li>
          <li>
            <FaBars />
          </li>
        </ul>
      </div>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
