// components/NomadicTrek.js
import styles from "./WhyChooseUsSection.module.scss";
import travelWorld from "../../assets/svg/travelWorld.svg";
import travelSloganIcon from "../../assets/svg/travelSloganHere.svg";
import MVPImage from "../../assets/svg/MVP.svg";
import NomadicTribe from "../../assets/svg/NomadicTribe.svg";
import Airline from "../../assets/svg/Airline.svg";
import NomadicTribeLogo from "../../assets/svg/NomadicTribeLogo.svg";
import Image from "next/image";
export default function WhyChooseUsSection() {
  return (
    <div className={styles.heroSection}>
      {/* Text Content */}
      <h1 className={styles.whyChoosetext}>Why choose</h1>
      <div>
        <Image
          src={NomadicTribeLogo}
          alt="nomadic tribe"
          className={styles.logo}
        />
      </div>
      <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum is simply free text
        available in the <br />
        market for you, but the majority have suffered alteration in some form.
      </p>

      {/* Button Section */}
      <div className={styles.buttonContainer}>
        <button>
          <p className={styles.heading}>Professional and Certified</p>
          <p className={styles.subContent}>
            Lorem ipsum is simply free text dolor sit but the majority have
            suffered amet, consectetur notted.
          </p>
        </button>
        <button>
          {" "}
          <p className={styles.heading}>Get Instant Tour Bookings</p>
          <p className={styles.subContent}>
            Lorem ipsum is simply free text dolor sit but the majority have
            suffered amet, consectetur notted.
          </p>
        </button>
      </div>

      {/* Logos Section */}
      <div className={styles.logosSection}>
        <div className={styles.images}>
          {" "}
          <Image src={travelWorld} alt="Logo 1" width={80} height={80} />
        </div>
        <div className={styles.images}>
          <Image src={travelSloganIcon} alt="Logo 2" width={80} height={80} />
        </div>
        <div className={styles.images}>
          {" "}
          <Image src={Airline} alt="Logo 3" width={80} height={80} />
        </div>
        <div className={styles.images}>
          {" "}
          <Image src={NomadicTribe} alt="Logo 4" width={80} height={80} />
        </div>
        <div className={styles.lastImages}>
          <Image src={MVPImage} alt="Logo 5" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
