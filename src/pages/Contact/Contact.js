import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
import Footer from "../../components/Footer/Footer";
import contactData from "../../components/card/contactData";
import ContactsData from "../../components/ContactData";
import BuissnessHours from "../../components/card/buissnessHours";
import MobileNavbar from "../../components/MobileNavbar";
const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Header />
      <Navbar />

      {/* Contact Details start */}
      <div className={styles.contactDataOutSideContainer}>
        <h2>Get in touch with us</h2>
        <div className={styles.contactDataContainer}>
          {contactData &&
            contactData.map((item, index) => (
              <ContactsData
                key={index}
                Icon={item.Icon}
                Heading={item.Heading}
                Desc={item.Desc}
                border={item.border}
              />
            ))}
        </div>

        <div className={styles.contactInputsDaysContainer}>
          <div className={styles.contactInputsLeft}>
            <h2>Please Contact Us If You Have Any Queries</h2>
            <input placeholder="Type Your Message" />
            <div className={styles.contactInputs}>
              <input
                placeholder="Enter your Mobile number/ email address"
                type="text"
              />
              <input type="submit" />
            </div>
          </div>
          <div className={styles.contactBuissnessHoursContainer}>
            <div className={styles.contactBuissnessHoursHeading}></div>
            <div className={styles.contactBuissnessHours}>
              <div className={styles.contactBuissnessHoursHeading}>
                <h2>Buissness Hours</h2>
              </div>
              <div className={styles.contactBuissnessHoursListContainer}>
                {BuissnessHours &&
                  BuissnessHours.map((item, index) => (
                    <div
                      className={styles.contactBuissnessHoursList}
                      key={index}
                    >
                      <div className={styles.contactBuissnessHoursListDay}>
                        {item.Day}
                      </div>
                      <div className={styles.contactBuissnessHoursListTime}>
                        {item.Time}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Details End */}

      {/* Map start */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6272173595826!2d78.604568175038!3d17.52529988338552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d2ea69b3613%3A0x2737550c567cb9b6!2sSS%20Ready%20Mix%20Concrete%20(%20Sri%20Sreenidhi%20Rmc%20)!5e0!3m2!1sen!2sin!4v1680691462784!5m2!1sen!2sin"
        style={{
          width: "100%",
          height: "500px",
          border: "0",
          allowfullscreen: "",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
      {/* Map End */}

      <div className={styles.contactBottomContainer}>
        <OffersUpdates />
        <Footer />
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default Contact;
