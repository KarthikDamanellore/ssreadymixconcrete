import React from "react";
import styles from "./styles.module.css";
// import {AiOutlineWhatsApp} from "react-icons/ai";
import whatsapp from "../../assets/images/wa-icon.svg";
const ChatwithUS = () => {
  return (
    <a href="https://wa.me/+919951739672">
      <div className={styles.ChatwithUSContainer}>
        {/* <span><AiOutlineWhatsApp/></span> */}
        <img src={whatsapp} alt="whatsAppIcon" />
        <h6>Chat With Us</h6>
      </div>
    </a>
  );
};

export default ChatwithUS;
