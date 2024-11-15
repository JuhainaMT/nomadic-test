// components/AboutExperience.js
import React, { useState } from "react";
import styles from "./AboutExperience.module.scss";
import { ABOUT_EXPERIENCE_ENUM } from "@/enum/aboutExperienceEnum";
import TravelPackageSelector from "../TravelPackageSelector/TravelPackageSelector";
import SelectArrowDown from "@/assets/SelectArrowDown";
import SelectArrow from "@/assets/SelectArrowUp";
const AboutExperience = () => {
  // State to manage accordion toggles
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };
  const formatSectionTitle = (section) => {
    return section
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.experienceText}>About Experience</h2>
        <p className={styles.experienceDesc}>
          {ABOUT_EXPERIENCE_ENUM.EXPERIENCE} <br />{" "}
          {ABOUT_EXPERIENCE_ENUM.EXPERIENCE2}
        </p>

        <ul className={styles.details}>
          {ABOUT_EXPERIENCE_ENUM.DETAILS.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className={styles.aboutTribe}>About the Tribe</h2>
        <div className={styles.accordion}>
          {Object.keys(ABOUT_EXPERIENCE_ENUM.ABOUT_TRIBE).map((section) => (
            <div key={section} className={styles.accordionSection}>
              <button
                className={styles.accordionButton}
                onClick={() => toggleSection(section)}
              >
                {formatSectionTitle(section)}
                <span>
                  {openSection === section ? (
                    <SelectArrowDown />
                  ) : (
                    <SelectArrow />
                  )}
                </span>
              </button>
              {openSection === section && (
                <div className={styles.accordionContent}>
                  <p>{ABOUT_EXPERIENCE_ENUM.ABOUT_TRIBE[section]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.travelPackageSelectorContainer}>
        <TravelPackageSelector />
      </div>
    </div>
  );
};

export default AboutExperience;
