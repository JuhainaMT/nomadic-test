import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./DestinationCard.module.scss";
import ChallengeIcon from "../../assets/svg/ChallengeIcon.svg";
import ClimateIcon from "../../assets/svg/ClimateIcon.svg";
import DaysIcon from "../../assets/svg/DaysIcon.svg";
import RegionIcon from "../../assets/svg/RegionIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const DestinationCard = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.infoSection}>
        <div className={styles.duration}>
          <Image src={DaysIcon} alt="Duration icon" className={styles.icon} /> 6
          Days
        </div>
        <div className={styles.region}>
          <Image src={RegionIcon} alt="Region icon" className={styles.icon} />{" "}
          Region: Southern Africa
        </div>
        <div className={styles.challenge}>
          <Image
            src={ChallengeIcon}
            alt="Challenge icon"
            className={styles.icon}
          />{" "}
          Challenge: Beginner
        </div>
        <div className={styles.climate}>
          <Image src={ClimateIcon} alt="Climate icon" className={styles.icon} />{" "}
          Climate: Tropical
        </div>
      </div>
      <div className={styles.mainImageContainer}>
        {" "}
        <div
          className={styles.imageSub}
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-delay="0"
        >
          {" "}
          <Image
            src="https://i.pinimg.com/564x/bd/eb/83/bdeb83f02f82b10bec2bfb3032a7731a.jpg"
            alt="Destination Image 1"
            className={styles.image1}
            width={500}
            height={648}
          />
        </div>
        <div
          className={styles.imageGrid}
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-delay="0"
        >
          <Image
            src="https://i.pinimg.com/736x/12/b6/7f/12b67f59723ad53e476163f27a9596d7.jpg"
            alt="Destination Image 2"
            className={styles.image2}
            width={532}
            height={318}
          />
          <Image
            src="https://i.pinimg.com/564x/66/45/be/6645be63a8e77e54e8fa75d3ce1afc98.jpg"
            alt="Destination Image 3"
            className={styles.image}
            width={532}
            height={322}
          />
        </div>
      </div>
      <div className={styles.mainImageContainerMob}>
        {" "}
        <div className={styles.imageSub}>
          {" "}
          <Image
            src="https://i.pinimg.com/564x/bd/eb/83/bdeb83f02f82b10bec2bfb3032a7731a.jpg"
            alt="Destination Image 1"
            className={styles.image1}
            width={300}
            height={280}
          />
        </div>
        <div className={styles.imageGrid}>
          <Image
            src="https://i.pinimg.com/736x/12/b6/7f/12b67f59723ad53e476163f27a9596d7.jpg"
            alt="Destination Image 2"
            className={styles.image2}
            width={300}
            height={280}
          />
          <Image
            src="https://i.pinimg.com/564x/66/45/be/6645be63a8e77e54e8fa75d3ce1afc98.jpg"
            alt="Destination Image 3"
            className={styles.image}
            width={300}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
