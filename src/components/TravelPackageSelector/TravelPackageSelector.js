import React, { useState } from "react";
import styles from "./TravelPackageSelector.module.scss";
import CalenderIcon from "../../assets/svg/CalenderIcon.svg";
import TravelerIcon from "../../assets/svg/peopleIcon.svg";
import { TRAVEL_PACKAGE_ENUM } from "@/enum/travelPackageEnum";
import DatePicker from "react-datepicker"; // Import DatePicker from react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import "./custom-datepicker.css";
import RadioButtonChecked from "../../assets/png/RadioButtonChecked.png";
import RadioButtonUnchecked from "../../assets/png/RadioButtonUnchecked.png";

const TravelPackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [date, setDate] = useState(TRAVEL_PACKAGE_ENUM.DATE);
  const [startDate, setStartDate] = useState(TRAVEL_PACKAGE_ENUM.DATE);
  const [travelers, setTravelers] = useState(TRAVEL_PACKAGE_ENUM.TRAVELERS);

  const handlePackageSelect = (packageNumber) => {
    setSelectedPackage(packageNumber);
  };
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleTravelersChange = (event) => {
    setTravelers(event.target.value);
  };

  return (
    <div className={styles.travelPackageSelector}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2>{TRAVEL_PACKAGE_ENUM.HEADER_PRICE}</h2>
        <p>{TRAVEL_PACKAGE_ENUM.HEADER_PRICE_DESCRIPTION}</p>
      </div>
      <p className={styles.selectText}>
        {TRAVEL_PACKAGE_ENUM.SELECT_DATES_TRAVELERS}
      </p>
      {/* Date and Travelers Section */}

      <div className={styles.dateTravelersSection}>
        <div className={styles.datePicker}>
          <span className={styles.icon}>
            {/* Calendar Icon (Assuming `CalenderIcon` is the path to your icon) */}
            <Image
              src={CalenderIcon}
              className={styles.icons}
              alt="date"
              width={24}
              height={24}
            />
          </span>
          {/* Date Picker Component */}

          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            monthsShown={2} // Show two months side by side
            dropdownMode="select" // Optional: Choose 'select' for dropdowns
          />
        </div>
        <div className={styles.datePickerMob}>
          <span className={styles.icon}>
            {/* Calendar Icon (Assuming `CalenderIcon` is the path to your icon) */}
            <Image
              src={CalenderIcon}
              className={styles.icons}
              alt="date"
              width={24}
              height={24}
            />
          </span>
          {/* Date Picker Component */}

          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            monthsShown={1} // Show two months side by side
            dropdownMode="select" // Optional: Choose 'select' for dropdowns
          />
        </div>
        <div className={styles.travelersPicker}>
          <span className={styles.icon}>
            {/* Travelers Icon (Assuming `TravelerIcon` is the path to your icon) */}
            <Image
              src={TravelerIcon}
              className={styles.icons}
              alt="traveler"
              width={24}
              height={24}
            />
          </span>
          {/* Travelers Input */}
          <input
            type="number"
            min="1"
            value={travelers}
            onChange={handleTravelersChange}
            className={styles.travelersInput}
          />
        </div>
      </div>
      {/* Available Packages Section */}
      <div className={styles.packagesSection}>
        <h3>{TRAVEL_PACKAGE_ENUM.AVAILABLE_PACKAGES}</h3>
        {[1, 2, 3].map((pkg) => (
          <div
            key={pkg}
            className={`${styles.package} ${
              selectedPackage === pkg ? styles.selected : ""
            }`}
            onClick={() => handlePackageSelect(pkg)}
          >
            <div className={styles.packageHeader}>
              <h4>{`${TRAVEL_PACKAGE_ENUM.TRAVEL_PACKAGE} ${pkg}`}</h4>{" "}
              {selectedPackage === pkg ? (
                <Image
                  src={RadioButtonChecked}
                  alt="selected radio"
                  style={{ width: "24px", height: "24px" }}
                />
              ) : (
                <Image
                  src={RadioButtonUnchecked}
                  alt="selected radio"
                  style={{ width: "24px", height: "24px" }}
                />
              )}
            </div>
            <p
              className={styles.travelPackageOneDetails}
            >{`${TRAVEL_PACKAGE_ENUM.TRAVEL_PACKAGE} ${pkg} ${TRAVEL_PACKAGE_ENUM.TRAVEL_PACKAGE_DETAILS}`}</p>
            <p className={styles.adultPricingDetails}>
              {TRAVEL_PACKAGE_ENUM.ADULT_PRICING}
            </p>
            <p className={styles.adultPricingDetails}>
              <span>{TRAVEL_PACKAGE_ENUM.TOTAL_PRICE}</span>
            </p>
            <p className={styles.priceIncludesFee}>
              {TRAVEL_PACKAGE_ENUM.PRICE_INCLUDES_FEES}
            </p>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <button className={styles.bookNowButton}>
        {TRAVEL_PACKAGE_ENUM.BOOK_NOW_BUTTON}
      </button>
    </div>
  );
};

export default TravelPackageSelector;
