import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Header />
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.ourStory}>
        <OurStory
          ourStoryContainer={styles.ourStoryContainer}
          ourStoryContainerLeftImg={styles.ourStoryContainerLeftImg}
          ourStoryContainerRight={styles.ourStoryContainerRight}
          ourStoryContainerRightHeading={styles.ourStoryContainerRightHeading}
          ourStoryContainerRightDesc={styles.ourStoryContainerRightDesc}
        />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {/* MobileNavbar */}
      <MobileNavbar />
    </div>
  );
};

export default About;
