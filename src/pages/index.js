"use client"; // This ensures it's treated as a Client Component

import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import "../app/page.css";
import HotDestinations from "@/components/HotDestination/HostDestination";
import BannerComponent from "@/components/Banner/Banner";
//Import enum for static texts
import { HOME_ENUM } from "@/enum/homeEnum";
import PopularDestination from "@/components/PopularDestination/PopularDestination";
import ClimMontainSection from "@/components/ClimbMontainSection/ClimbMontainSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const HomePage = ({ isMobile }) => {
  return (
    <main>
      <div className="content">
        <Header />
        <h1 className="whereToNextText">{HOME_ENUM.whereToNext}</h1>

        <SearchBar isMobile={isMobile} />
        <HotDestinations isMobile={isMobile} />
        <BannerComponent isMobile={isMobile} />

        <PopularDestination isMobile={isMobile} />
        <ClimMontainSection isMobile={isMobile} />
        <WhyChooseUsSection isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </div>
    </main>
  );
};

export default HomePage;
