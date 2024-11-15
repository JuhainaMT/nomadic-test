import Image from "next/image";
import styles from "./ClimbMontainSection.module.scss";
import HeartIcon from "../../assets/svg/heartIcon";
import { useState, useEffect } from "react";
import { fetchHomePageData } from "@/api/fetch-home-page-data";

const ClimbMontainSection = () => {
  const [favorites, setFavorites] = useState({});
  const [visibleCount, setVisibleCount] = useState(8);
  const [popularDestination, setPopularDestination] = useState([]);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchHomePageData();
        setPopularDestination(data.tripsByCategories[0].programs);
      } catch (error) {
        console.error("Error loading destinations:", error);
      }
    };

    loadDestinations();
  }, []);
  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  useEffect(() => {
    // Function to update visibleCount based on screen width
    const updateVisibleCount = () => {
      if (window.innerWidth < 990) {
        setVisibleCount(3); // Show 4 images on mobile
      } else {
        setVisibleCount(8); // Show 8 images on larger screens
      }
    };

    // Initial check
    updateVisibleCount();

    // Add event listener for window resize
    window.addEventListener("resize", updateVisibleCount);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  return (
    <section className={styles.hotDestination}>
      <h2 className={styles.title}>
        <span className={styles.highlight}> Climb:</span> Climb the most amazing
        mountains
      </h2>
      <div className={styles.destinationGrid}>
        {popularDestination &&
          popularDestination.length > 0 &&
          popularDestination
            .slice(0, visibleCount)
            .map((destination, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={destination.banner}
                    className={styles.image}
                    width={200}
                    height={266}
                  />
                  <div
                    className={styles.heartIcon}
                    onClick={() => toggleFavorite(index)}
                  >
                    <HeartIcon isFavorite={favorites[index]} />
                  </div>
                </div>
                <h3 className={styles.region}>{destination.tribe_name}</h3>
                <p className={styles.description}>{destination.name}</p>
                <p className={styles.price}>
                  {destination.starting_from}
                  <span className={styles.perPersonText}> / Per Person</span>
                </p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default ClimbMontainSection;
