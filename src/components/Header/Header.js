"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importing useRouter and usePathname
import Image from "next/image";
import cx from "classnames";

//components
import NavBar from "../NavBar/NavBar";
//icons
import telephoneIcon from "../../assets/svg/headerTelephone.svg";
import webIcon from "../../assets/svg/headerWeb.svg";
//styles
import styles from "./Header.module.scss";
// import HomePage from "@/app/page";

// Constants for contact information
const CONTACT_INFO = {
  phone: "+92 666 999 0000",
  email: "support@nomadictribe.com",
};

const Header = ({ isMobile }) => {
  const [isClient, setIsClient] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      setIsHomePage(pathname === "/");
    }
    console.log("pathname", pathname, isHomePage);
  }, []);

  if (!isClient) return null;

  return (
    <header
      className={cx(styles.header, {
        [styles.mobileHeader]: isMobile,
      })}
      style={{ height: isHomePage ? "100vh" : "20vh" }} // Inline style for height
    >
      {/* Conditionally render the video background only on the homepage */}
      {isHomePage && (
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.pinimg.com/564x/22/8d/af/228dafeb531cc6c3c70214eec4fb8ab5.jpg" // Fallback image if video doesn't load
        >
          {/* Video sources for different screen sizes */}
          <source
            src="https://d2neuv05ura4o9.cloudfront.net/discovery_items/3/200128_NOMADIC_16_9_LOWRES.mp4"
            type="video/mp4"
            media="(max-width: 768px)" // Low resolution for mobile devices
          />
          <source
            src="https://d2neuv05ura4o9.cloudfront.net/discovery_items/3/200128_NOMADIC_16_9_HIGHRES.mp4"
            type="video/mp4"
            media="(min-width: 769px)" // High resolution for desktop and large screens
          />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Top Bar with contact details */}
      <div
        className={cx(styles.topBar, {
          [styles.mobileTopBar]: isMobile,
        })}
      >
        <span className={styles.contactDetails}>
          <Image
            src={telephoneIcon}
            alt="Telephone icon"
            className={styles.headerTelephoneIcon}
          />
          {CONTACT_INFO.phone}
        </span>
        <span className={styles.contactDetails}>
          <Image
            src={webIcon}
            alt="Web icon"
            className={styles.headerWebIcon}
          />
          {CONTACT_INFO.email}
        </span>
      </div>

      {/* Use the NavBar component */}
      <NavBar isMobile={isMobile} />
    </header>
  );
};

export default Header;
