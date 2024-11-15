import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";
import { BANNER_ENUM } from "@/enum/bannerEnum";
import { useRouter } from "next/router"; // Import useRouter

const BannerComponent = () => {
  const router = useRouter(); // Initialize router

  // Function to handle navigation on button click
  const handleBookNowClick = () => {
    // Redirect to details page (you can adjust the path as needed)
    router.push("/details"); // Modify the path as needed
  };

  return (
    <div className={styles.banner}>
      {/* Container for the content over the banner */}
      <div className={styles.content}>
        {/* Title text */}
        <h2 className={styles.title}>{BANNER_ENUM.planYourTrip}</h2>

        {/* Description text */}
        <p className={styles.description}>{BANNER_ENUM.bannerDesc}</p>

        {/* Button container for the 'Book Now' button */}
        <div className={styles.buttonContainer}>
          {/* Book Now button with custom styling, clicking calls handleBookNowClick */}
          <button className={styles.button} onClick={handleBookNowClick}>
            {BANNER_ENUM.bookNowButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
