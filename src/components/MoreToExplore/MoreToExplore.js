import Image from "next/image";
import styles from "./MoreToExplore.module.scss";
import HeartIcon from "../../assets/svg/heartIcon.js";

import { useEffect, useState } from "react";
const MoreToExplore = () => {
  const [favorites, setFavorites] = useState({});
  const [isMobile, setIsMobile] = useState(false);

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

  //Dummy destination details
  //have to move this to github

  const destinations = [
    {
      region: "10 Days Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/736x/ff/bd/88/ffbd88b131879d38def4b03ea9458861.jpg",
      price: "$7906.8",
      width: 220,

      height: 269,
    },
    {
      region: "10 Days Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/736x/58/a0/76/58a076cdf01b54af96e33bb2b96164e2.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "9 Days North America",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/4b/61/e3/4b61e37592b07e4ee93a698482216dde.jpg",
      price: "$4672.36",
      width: 220,
      height: 269,
    },
    {
      region: "10 Days Northern Asia",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/564x/4a/95/7d/4a957da1f656add1e15b7c0829887877.jpg",
      price: "$2079",
      width: 220,
      height: 269,
    },
    {
      region: "10 Days Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/564x/e0/71/75/e07175cfa3d97ff2a8292e910b957123.jpg",
      price: "$7906.8",
      width: 220,

      height: 269,
    },
    {
      region: "10 Days Middle East",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/736x/b6/fc/6b/b6fc6ba94a3ee1853e3eca2247690c72.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "9 Days North America",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/4b/61/e3/4b61e37592b07e4ee93a698482216dde.jpg",
      price: "$4672.36",
      width: 220,
      height: 269,
    },
    {
      region: "10 Days Northern Asia",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/736x/52/be/1a/52be1a2c67ccd6cd6d7fcc17a14ce8f6.jpg",
      price: "$2079",
      width: 220,
      height: 269,
    },
  ];
  const moreToExplore = [
    {
      region: "9 Days  South Africa",
      description: "Discover the Highland of Madagascar",
      image:
        "https://i.pinimg.com/564x/1f/70/9d/1f709d81d6ab2a285279aff95709f36c.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "12 Days  South Africa",
      description: "Tanzania's Indigenous Cultures Adventure",
      image:
        "https://i.pinimg.com/564x/89/47/38/8947388c67a6eef9470a75fb4fd982b8.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "9 Days South Africaa",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/5e/11/d6/5e11d6c238e54e80480e8d6d6f4189d0.jpg",
      price: "$4672.36",
      width: 220,
      height: 269,
    },
    {
      region: "10 Days South Africa",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/564x/31/92/7a/31927a046b3b9d15f9612c6651353896.jpg",
      price: "$2079",
      width: 220,
      height: 269,
    },
    {
      region: "9 Days  South Africa",
      description: "Deep South of Madagascar",
      image:
        "https://i.pinimg.com/564x/ff/0c/3b/ff0c3bb7b6f0bbb62e49112a79115260.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "12 Days  South Africa",
      description: "Flower Men & Wonders of the Southwest",
      image:
        "https://i.pinimg.com/564x/b8/07/b8/b807b8af098590cfc4344ea057fe3209.jpg",
      price: "$7906.8",
      width: 220,
      height: 269,
    },
    {
      region: "9 Days South Africaa",
      description: "Indigenous Immersion in Panama",
      image:
        "https://i.pinimg.com/564x/2e/1c/e9/2e1ce9f8fd3d220e425015333262edfc.jpg",
      price: "$4672.36",
      width: 220,
      height: 269,
    },
    {
      region: "10 Days South Africa",
      description: "Exploring Vietnam's Hidden Northeast",
      image:
        "https://i.pinimg.com/736x/d2/79/e8/d279e8d9e9eefcec3c6a911e0f7633ee.jpg",
      price: "$2079",
      width: 220,
      height: 269,
    },
  ];
  const extendedMoreToExplore = [...moreToExplore, ...moreToExplore];
  const extendedDestinations = [...destinations, ...destinations];

  return (
    <section className={styles.hotDestination}>
      <h2 className={styles.title}>More to explore</h2>
      <div className={styles.destinationGrid}>
        {extendedDestinations
          .slice(0, isMobile ? 3 : destinations.length)
          .map((destination, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={destination.image}
                  alt={destination.region}
                  className={styles.image}
                  width={destination.width}
                  height={destination.height}
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
              <h3 className={styles.region}>{destination.region}</h3>
              <p className={styles.description}>{destination.description}</p>
              <p className={styles.price}>
                {destination.price}
                <span className={styles.perPersonText}> / Per Person</span>
              </p>
            </div>
          ))}
      </div>
      <h2 className={styles.seeMoreTitle}>See more of South Africa</h2>
      <div className={styles.destinationGrid}>
        {extendedMoreToExplore
          .slice(0, isMobile ? 3 : destinations.length)
          .map((destination, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={destination.image}
                  alt={destination.region}
                  className={styles.image}
                  width={destination.width}
                  height={destination.height}
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
              <h3 className={styles.region}>{destination.region}</h3>
              <p className={styles.description}>{destination.description}</p>
              <p className={styles.price}>
                {destination.price}
                <span className={styles.perPersonText}> / Per Person</span>
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MoreToExplore;
