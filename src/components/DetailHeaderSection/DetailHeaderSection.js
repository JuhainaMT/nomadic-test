import React, { useEffect, useState } from "react";
import styles from "./DetailHeaderSection.module.scss";

const DetailHeaderSection = ({ place }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = () => {
      setOpacity(1);
    };

    fadeIn();
  }, []);

  return (
    <div
      className={styles.mainContainer}
      style={{ opacity, transition: "opacity 1s ease-in-out" }}
    >
      <h1 className={styles.heading}>
        {place ? place.toUpperCase().replace(/_/g, " ") : ""}
      </h1>
    </div>
  );
};

export default DetailHeaderSection;
