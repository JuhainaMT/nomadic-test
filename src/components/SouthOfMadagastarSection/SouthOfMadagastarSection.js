import React, { useEffect, useState } from "react";
import styles from "./SouthOfMadagastarSection.module.scss";

const SouthOfMadagastarSection = () => {
  const [opacity, setOpacity] = useState(0); // Initial opacity set to 0

  useEffect(() => {
    const fadeIn = () => {
      setOpacity(1); // Set opacity to 1 to trigger the fade-in effect
    };

    // Trigger the fade-in effect after component mounts
    fadeIn();
  }, []);

  return (
    <div
      className={styles.mainContainer}
      style={{ opacity, transition: "opacity 1s ease-in-out" }}
    >
      <h1 className={styles.heading}>Southwest of Madagascar</h1>
    </div>
  );
};

export default SouthOfMadagastarSection;
// import React from "react";
// import styles from "./SouthOfMadagastarSection.module.scss";
// import Image from "next/image";
// const SouthOfMadagastarSection = () => {
//   return (
//     <div className={styles.mainContainer}>
//       <video autoPlay loop muted playsInline loading="lazy">
//         <source
//           src="https://videos.pexels.com/video-files/26626439/11978988_2560_1440_30fps.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       <h1 className={styles.heading}>Southwest of Madagascar</h1>
//     </div>
//   );
// };

// export default SouthOfMadagastarSection;
