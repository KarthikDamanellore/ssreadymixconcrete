import React from "react";
import FooterStyle from "./Footer.module.css";

import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsGlobe } from "react-icons/bs";

import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={FooterStyle.FooterMainContainer} id="footer">
      <div className={FooterStyle.FooterContainer}>
        <div className={FooterStyle.FooterContainerLeftContainer}>
          <div className={FooterStyle.FooterContainerLeft}>
            <div className={FooterStyle.FooterContainerLeftHeading}>
              <h3>Get In Touch</h3>
            </div>
            <div className={FooterStyle.FooterContainerLeftContact}>
              <div className={FooterStyle.FooterContainerLeftContact1}>
                <div className={FooterStyle.FooterContainerLeftContact1Icon}>
                  <IoIosCall />
                </div>
                <div className={FooterStyle.FooterContainerLeftContact1Heading}>
                  <h3>CALL</h3>
                </div>
              </div>
              <div className={FooterStyle.FooterContainerLeftContactNumb}>
                <h3>
                  <a href="tel:9951839672">9951839672</a>
                </h3>
                <h3 className={FooterStyle.tooltiptext}>Call</h3>
              </div>
            </div>

            <div className={FooterStyle.FooterContainerLeftContact}>
              <div className={FooterStyle.FooterContainerContact}>
                <div className={FooterStyle.FooterContainerLeftContact1Icon}>
                  <AiOutlineMail />
                </div>
                <div className={FooterStyle.FooterContainerLeftContact1Heading}>
                  <h3>EMAIL</h3>
                </div>
              </div>
              <div className={FooterStyle.FooterContainerLeftContactNumb}>
                <h3>
                  <a href="mailto:Chindala.srikarreddy@gmail.com">
                  Chindala.srikarreddy@gmail.com
                  </a>
                </h3>
              </div>
            </div>

            <div className={FooterStyle.FooterContainerLeftContact}>
              <div className={FooterStyle.FooterContainerLeftContact1}>
                <div className={FooterStyle.FooterContainerLeftContact1Icon}>
                  <ImLocation />
                </div>
                <div className={FooterStyle.FooterContainerLeftContact1Heading}>
                  <h3>ADDRESS</h3>
                </div>
              </div>
              <div className={FooterStyle.FooterContainerLeftContactNumb}>
                <h3 onClick={() => navigate("/contact")}>
                  Sruthi RMC, Near Jeevadhan School, kamareddy, Telangana
                </h3>
                <h3>(View map)</h3>
              </div>
            </div>

            <div className={FooterStyle.FooterContainerLeftContact}>
              <div className={FooterStyle.FooterContainerLeftContact1}>
                <div className={FooterStyle.FooterContainerLeftContact1Icon}>
                  <BsGlobe />
                </div>
                <div className={FooterStyle.FooterContainerLeftContact1Heading}>
                  <h3>OTHERS SITE</h3>
                </div>
              </div>
              <div className={FooterStyle.FooterContainerLeftContactNumb}>
                <h3>
                  <a href="https://ssreadymixconcrete.web.app" target="_blank">
                    http://www.sruthireadymixconcrete.com
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className={FooterStyle.FooterContainerBlock1Right}></div>
        </div>
        <div className={FooterStyle.FooterContainerRight}>
          <div className={FooterStyle.FooterContainerRightProductsHeading}>
            <h3>Recently Updated Products</h3>
          </div>
          <div className={FooterStyle.FooterContainerRightProductsList}>
            <ul>
              <li>
                <span onClick={() => navigate("/products")}>
                  ready-mix concrete
                </span>
              </li>
              <li>
                <span onClick={() => navigate("/products")}>
                  ss ready mix concrete
                </span>
              </li>
              <li>
                <span onClick={() => navigate("/products")}>rmc plant</span>
              </li>
              <li>
                <span onClick={() => navigate("/products")}>
                  ready mix concrete suppliers
                </span>
              </li>
              <li>
                <span onClick={() => navigate("/products")}>
                  ready mix concrete manufacturers
                </span>
              </li>
            </ul>
          </div>
          {/* <div className={FooterStyle.FooterContainerRightProductsInput}>
                    <input/>
                </div> */}
          <div className={FooterStyle.FooterContainerRightProductsSocialMedia}>
            <div
              className={
                FooterStyle.FooterContainerRightProductsSocialMediaHeading
              }
            >
              <h3>Share This Website</h3>
            </div>
            <div
              className={
                FooterStyle.FooterContainerRightProductsSocialMediaIcons
              }
            >
              <a href="https://wa.me/+919951739672">
                <BsWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/srisreenidhireadymixconcretehyderabad/"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              {/* <a
                href="https://twitter.com/settings/account?lang=en"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>

              <a href="https://www.linkedin.com/signup" target="_blank">
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.pinterest.com/ideas/home-decor/935249274030/"
                target="_blank"
              >
                <AiFillPushpin />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className={FooterStyle.FooterBottomContainer}>
        <div className={FooterStyle.FooterContainerBottomLeft}>
          <h3>&copy; 2022</h3>
          <div></div>
          <h3>Made in India with</h3>
          <a href="https://www.getboost360.com/services/" target="_blank">
            Boost 360 for Service Buisness
          </a>
        </div>
        <div className={FooterStyle.FooterContainerBottomRight}>
          <h3>Report Abuse</h3>
          <li>
            <span onClick={() => navigate("/contact")}>Sitemap</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
