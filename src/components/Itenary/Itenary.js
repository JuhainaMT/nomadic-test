import React, { useEffect } from "react";
import styles from "./Itinerary.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Itinerary = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  const itinerary = [
    { day: "Day 1", title: "Antananarivo" },
    { day: "Day 2", title: "Tulear-Mikea forest. Encounter the Mikea people" },
    { day: "Day 3", title: "Mikea forest and activities with the tribe" },
    { day: "Day 4", title: "Mikea people traditions day" },
    { day: "Day 5", title: "Encounter the Mikea fishermen" },
    { day: "Day 6", title: "Antananarivo (B)" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Trip Itinerary</h2>
      <div className={styles.itinerary}>
        {itinerary.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-delay={index * 50}
          >
            <h3>{item.day}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
