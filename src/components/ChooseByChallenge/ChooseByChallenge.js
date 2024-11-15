import React, { useState, useEffect } from "react";
import Image from "next/image";
import AridImage from "../../assets/svg/ChallengeImageOne.svg";
import MildImage from "../../assets/svg/ChallengeImageTwo.svg";
import TropicalImage from "../../assets/svg/ChallengeImageThree.svg";
import styles from "./ChooseByChallenge.module.scss";

const ChooseByChallenge = () => {
  const destinations = [
    { image: AridImage, alt: "Arid Climate" },
    { image: MildImage, alt: "Mild Climate" },
    { image: TropicalImage, alt: "Tropical Climate" },
    { image: AridImage, alt: "Arid Climate" }, // Duplicates for a circular effect
    { image: MildImage, alt: "Mild Climate" },
    { image: TropicalImage, alt: "Tropical Climate" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle screen resizing and detect if the screen is mobile or not
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);

    handleResize(); // Set the initial value based on current screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === (isMobile ? 0 : destinations.length - 3)
          ? 0
          : prevIndex + 1
      );
    }, 1000); // Change to 1 second for faster speed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [destinations.length, isMobile]);

  return (
    <div>
      <section className={styles.readyToTravelContainer}>
        <h1 className={styles.areYouReady}>Choose by Challenge</h1>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${
                currentIndex * (isMobile ? "" : 33.33)
              }%)`,
            }}
          >
            {destinations
              .slice(0, isMobile ? 3 : destinations.length)
              .map((destination, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      className={styles.image}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseByChallenge;
