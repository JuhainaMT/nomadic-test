"use client"; // This ensures it's treated as a Client Component

import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import cx from "classnames"; // Importing classnames library
import searchImage from "../../assets/svg/searchIcon.svg";
import { Inter } from "next/font/google";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TwoMonthDatePicker.css";
import "react-calendar/dist/Calendar.css";
import CalenderIcon from "../../assets/svg/CalenderIcon.svg";
import FilterIcon from "../../assets/svg/FilterIcon.svg";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import classnames from "classnames"; // Importing classnames library for conditional class handling

const inter = Inter({ subsets: ["latin"] });

const SearchBar = ({ handleOpenFilter }) => {
  // State variables for input fields
  const [destination, setDestination] = useState("");
  const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility
  const isMobile = useMediaQuery("(max-width:992px)");
  const router = useRouter();

  // Set the initial check-in date to today's date
  const [checkIn, setCheckIn] = useState(new Date());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState();
  const [guests, setGuests] = useState("");

  // Function to determine the CSS class for each day in the date picker
  const getDayClassName = (date) => {
    // Calculate the current date and tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // If the date is today or earlier, do not apply any special class
    if (date < tomorrow) {
      return ""; // Return empty string or a specific class for disabled dates if desired
    }

    // Apply a special class for tomorrow onwards
    return classnames({
      [styles.activeDay]: date >= tomorrow, // Apply 'activeDay' style from your SCSS module
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.searchMainContainer}>
      {" "}
      <form onSubmit={handleSearch} className={styles.searchBar}>
        <div className={styles.inputGroup}>
          <label className={cx(styles.label, inter.className)}>Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            value={destination}
            className={styles.inputGroup}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        {!isMobile && <div className={styles.inputSeparator}></div>}
        <div className={styles.inputGroupCalender}>
          <label className={cx(styles.label, inter.className)}>Check In</label>

          <DatePicker
            selected={checkIn}
            minDate={new Date()}
            onChange={(date) => setCheckIn(date)} // Single date selection
            monthsShown={2} // Show two months side by side
            dropdownMode="select" // Optional: Choose 'select' for dropdowns
            dayClassName={getDayClassName} // Apply custom classes to the date picker
          />
        </div>
        <div className={styles.inputGroupCalenderMob}>
          <label className={cx(styles.label, inter.className)}>Check In </label>

          {/* Date Picker Component */}
          <DatePicker
            minDate={new Date()}
            selected={checkIn}
            onChange={(date) => setCheckIn(date)} // Single date selection
            monthsShown={1} // Show one month
            dropdownMode="select" // Optional: Choose 'select' for dropdowns
            dayClassName={getDayClassName} // Apply custom classes to the date picker
          />
        </div>

        {/* {!isMobile && <div className={styles.inputSeparator}></div>} */}
        {/* <div className={styles.inputGroup}>
          <label className={cx(styles.label, inter.className)}>Who</label>
          <input
            type="number"
            placeholder="Add guests"
            value={guests}
            className={styles.inputGroup}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div> */}
        <div
          style={{
            display: isMobile ? "flex" : "block",
            alignItems: "center",
            alignSelf: "flex-end",
            gap: "0px",
          }}
        >
          {isMobile && router.pathname === "/details" && (
            <Image
              src={FilterIcon}
              alt="filter"
              onClick={handleOpenFilter}
              className={styles.filterIconInMobile}
            />
          )}
          <button type="submit" className={styles.searchButton}>
            <Image
              src={searchImage}
              className={styles.searchIcon}
              alt="search"
            />
          </button>
        </div>
      </form>
      {!isMobile && router.pathname === "/details" && (
        <Image
          src={FilterIcon}
          alt="filter"
          onClick={handleOpenFilter}
          className={styles.filterIcon}
        />
      )}
    </div>
  );
};

export default SearchBar;
