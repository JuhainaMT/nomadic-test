"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames"; // Importing classnames library
import styles from "./NavBar.module.scss";
import nomadicLogo from "../../assets/svg/logoNomadicTribe.svg";
import yellowUnderline from "../../assets/svg/yellowUnderlineActiveRoute.svg"; // Importing the underline image
import yellowUnderLineDestination from "../../assets/svg/DestinationUnderLine.svg";
import Image from "next/image";
import Link from "next/link";
import { ROUTES_MAIN } from "./routes";
import { useRouter, usePathname } from "next/navigation"; // Importing useRouter and usePathname
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const NavBar = ({ isMobile }) => {
  const router = useRouter(); // Get the router object
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState(""); // State to track active route

  useEffect(() => {
    setActiveRoute(pathname); // Set the active route on mount
  }, [pathname]);

  // Function to handle "Contact" navigation to the footer
  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Scroll to the footer section with smooth behavior
    const footerElement = document.getElementById("contact");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cx(styles.navBar, {
        [styles.mobileNavBar]: isMobile,
      })}
    >
      <div
        className={cx(styles.logo, {
          [styles.mobileLogo]: isMobile,
        })}
      >
        <Link
          href="/"
          className={cx(styles.logo, { [styles.mobileLogo]: isMobile })}
        >
          <Image
            src={nomadicLogo}
            alt="Nomadic Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>
      <nav
        className={cx(styles.navigation, {
          [styles.mobileNavigation]: isMobile,
        })}
      >
        {/* Dynamically render navigation links */}
        {ROUTES_MAIN.map((route) => {
          const isActive = activeRoute === route.route; // Check if the route is active
          return (
            <div key={route.route} className={styles.navItem}>
              {/* Adjust the "Contact" link behavior */}
              {route.route === "/contact" ? (
                <a
                  href="#"
                  onClick={handleContactClick}
                  className={cx(styles.navLink, inter.className, {
                    [styles.activeNavLink]: isActive,
                  })}
                >
                  {route.label}
                </a>
              ) : (
                <Link
                  href={route.route}
                  className={cx(styles.navLink, inter.className, {
                    [styles.activeNavLink]: isActive,
                  })}
                >
                  {route.label}
                </Link>
              )}

              {/* Display the underline based on the active route */}
              {(activeRoute === "/" ||
                activeRoute === "/contact" ||
                activeRoute === "/news") &&
                route.route === activeRoute && (
                  <Image
                    src={yellowUnderline}
                    alt="Active Route Underline"
                    className={styles.activeUnderline} // Add a class for styling the underline
                  />
                )}
              {activeRoute?.startsWith("/destination") &&
                route?.route?.startsWith("/destination") && (
                  <Image
                    src={yellowUnderLineDestination}
                    alt="Active Route Underline"
                    className={styles.activeUnderline} // Add a class for styling the underline
                  />
                )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
