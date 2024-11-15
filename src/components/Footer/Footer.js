import React from "react";
import styles from "./Footer.module.scss";
import FooterLogo from "../../assets/svg/FooterLogo.svg";
import FooterMapIcon from "../../assets/svg/FooterMapIcon.svg";
import FooterTelephone from "../../assets/svg/FooterTelephone.svg";
import FooterWebIcon from "../../assets/svg/FooterWebIcon.svg";
import Image from "next/image";
import { FOOTER_ENUM } from "@/enum/footerEnum";

const Footer = () => {
  const CONTACT_DETAILS = {
    phone: "+92 666 999 0000",
    email: "support@nomadictribe.com",
    address: "850 New Burton Rd. Suite 201, Dover, DE 19904 USA",
  };
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <Image src={FooterLogo} className={styles.logo} alt="logo" />
          <p className={styles.description}>{FOOTER_ENUM.aRespectfulJourney}</p>
          <div className={styles.contact}>
            <p>
              <span>
                <Image
                  src={FooterTelephone}
                  className={styles.logo}
                  alt="logo"
                />
              </span>{" "}
              {CONTACT_DETAILS.phone}
            </p>
            <p>
              <span>
                <Image src={FooterWebIcon} className={styles.logo} alt="logo" />
              </span>{" "}
              {CONTACT_DETAILS.email}
            </p>
            <p>
              <span>
                <Image src={FooterMapIcon} className={styles.logo} alt="logo" />
              </span>{" "}
              {CONTACT_DETAILS.address}
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.middle}>
          <div className={styles.company}>
            <h4>{FOOTER_ENUM.companyTitle}</h4>
            <ul>
              <li>{FOOTER_ENUM.aboutUs}</li>
              <li>{FOOTER_ENUM.communityBlog}</li>
              <li>{FOOTER_ENUM.rewards}</li>
              <li>{FOOTER_ENUM.workWithUs}</li>
              <li>{FOOTER_ENUM.meetTheTeam}</li>
            </ul>
          </div>
          <div className={styles.explore}>
            <h4>{FOOTER_ENUM.exploreTitle}</h4>
            <ul>
              <li>{FOOTER_ENUM.privacyPolicy}</li>
              <li>{FOOTER_ENUM.termsConditions}</li>
              <li>{FOOTER_ENUM.codeOfEthics}</li>
              <li>{FOOTER_ENUM.communityStandards}</li>
              <li>{FOOTER_ENUM.environmentalPolicy}</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h4 className={styles.newLetter}>{FOOTER_ENUM.newsletterTitle}</h4>
          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Email"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>
              {FOOTER_ENUM.subscribeButton}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
