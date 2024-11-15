"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./hotDestination.module.scss";
import HeartIcon from "../../assets/svg/heartIcon.js";
import { useRouter } from "next/router";
import { fetchHomePageData } from "@/api/fetch-home-page-data.js";

const HotDestination = () => {
  const router = useRouter();

  const [favorites, setFavorites] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [tribeRegions, setTribeRegions] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchHomePageData();
        setTribeRegions(data.tribeRegions); // Assuming data.tribeRegions contains the destination list
      } catch (error) {
        console.error("Error loading destinations:", error);
      }
    };

    loadDestinations();
  }, []);
  // Detect screen width to apply responsive styles and limit displayed images
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize(); // Check initial screen size on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  const handleCardClick = (name) => {
    router.push({
      pathname: `/details`,
      query: { name },
    });
  };

  return (
    <section className={styles.hotDestination}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>Hot Destination: </span> Experience
        the beauty of every country
      </h2>
      <div className={styles.destinationContainer}>
        <div className={styles.destinationGrid}>
          {tribeRegions
            .slice(0, isMobile ? 3 : tribeRegions.length)
            .map((destination, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => handleCardClick(destination.value)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={destination.image}
                    alt={destination.region}
                    className={styles.image}
                    width={240}
                    height={269}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className={styles.heartIcon}
                    onClick={() => toggleFavorite(index)}
                  >
                    <HeartIcon isFavorite={favorites[index]} />
                  </div>
                </div>
                <h3 className={styles.region}>{destination.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HotDestination;
