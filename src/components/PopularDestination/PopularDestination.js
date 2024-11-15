import Image from "next/image";
import styles from "./PopularDestination.module.scss";
import HeartIcon from "../../assets/svg/heartIcon.js";
import { useState, useEffect } from "react";
import { fetchHomePageData } from "@/api/fetch-home-page-data";

const PopularDestination = () => {
  const [favorites, setFavorites] = useState({});
  const [visibleCount, setVisibleCount] = useState(8); // Default to 8 images
  const [popularDestination, setPopularDestination] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchHomePageData();
        setPopularDestination(data.travelNowPrograms);
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

  // Dummy destination details
  const destinations = [
    {
      region: "10 Days  Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/474x/56/32/30/563230ffdf2d19999d3ed6bcdf162c21.jpg",
      price: "$7906.8",
      width: 200,
      height: 266,
    },
    {
      region: "10 Days  Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/564x/01/d4/d7/01d4d71022b4872125932fe69322f31b.jpg",
      price: "$7906.8",
      width: 200,
      height: 266,
    },
    {
      region: "9 Days North America",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/3b/a2/62/3ba262008be146010197d998eefd5ff2.jpg",
      price: "$4672.36",
      width: 200,
      height: 266,
    },
    {
      region: "10 Days Northern Asia",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/564x/2e/13/2e/2e132e59000aa4d018ec74e2dd06266c.jpg",
      price: "$2079",
      width: 200,
      height: 266,
    },
    {
      region: "10 Days  Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/564x/cc/5e/d9/cc5ed9f4749c7f7c38a4f7b7d4a8ecdc.jpg",
      price: "$7906.8",
      width: 200,
      height: 266,
    },
    {
      region: "10 Days  Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/736x/fd/d8/c9/fdd8c98cfea283fa3df91299a02f2be4.jpg",
      price: "$7906.8",
      width: 200,
      height: 266,
    },
    {
      region: "9 Days North America",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/25/57/6a/25576a6769feb78d0584f5efdf027b31.jpg",
      price: "$4672.36",
      width: 200,
      height: 266,
    },
    {
      region: "10 Days Northern Asia",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/564x/5d/82/75/5d8275e8424446359f7f4ca56424bc97.jpg",
      price: "$2079",
      width: 200,
      height: 266,
    },
  ];
  const extendedDestinations = [...destinations, ...destinations];

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
        <span className={styles.highlight}>Popular Experiences:</span> These are
        the best reviewed experiences
      </h2>
      <div className={styles.destinationGrid}>
        {popularDestination.slice(0, visibleCount).map((destination, index) => (
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
            <h3 className={styles.region}>
              {destination.tribe_no_of_days} Days {destination.tribe_region}
            </h3>
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

export default PopularDestination;
