import AboutExperience from "@/components/AboutExperience/AboutExperience";
import ChooseByChallenge from "@/components/ChooseByChallenge/ChooseByChallenge";
import DestinationCard from "@/components/DestinationCard/DestinationCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Itinerary from "@/components/Itenary/Itenary";
import MoreToExplore from "@/components/MoreToExplore/MoreToExplore";
import SouthOfMadagastarSection from "@/components/SouthOfMadagastarSection/SouthOfMadagastarSection";
import React from "react";

const destinations = () => {
  return (
    <div>
      <Header />
      <SouthOfMadagastarSection />
      <DestinationCard />
      <AboutExperience />
      <Itinerary />
      <MoreToExplore />
      <ChooseByChallenge />
      <Footer />
    </div>
  );
};

export default destinations;
