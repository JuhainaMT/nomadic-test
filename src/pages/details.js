import DestinationDetails from "@/components/DestinationDetails/DestinationDetails";
import FilterComponent from "@/components/Filter/Filter";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import SouthOfMadagastarSection from "@/components/SouthOfMadagastarSection/SouthOfMadagastarSection";
import { HOME_ENUM } from "@/enum/homeEnum";
import Image from "next/image";
import { useRouter } from "next/router";
import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";
import "./destination/index.css";
import DetailHeaderSection from "@/components/DetailHeaderSection/DetailHeaderSection";
const DestinationDetail = () => {
  const router = useRouter();
  const { id, name } = router.query;
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  useEffect(() => {
    if (name) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        destination: name,
      }));
    }
  }, [name]);
  // Function to update selected filters
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    handleCloseFilter();

    const updatedQuery = { ...router.query };

    Object.keys(filters).forEach((key) => {
      if (key === "destination" && filters[key]) {
        updatedQuery["name"] = filters[key];
      } else if (filters[key]) {
        updatedQuery[key] = filters[key];
      } else {
        delete updatedQuery[key];
      }
    });

    router.push({
      pathname: router.pathname,
      query: updatedQuery,
    });
  };

  // Function to remove a specific filter
  const removeFilter = (filterKey) => {
    if (filterKey === "destination") {
      filterKey = "name";
    }

    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (filterKey === "name") {
        delete updatedFilters["name"];
        delete updatedFilters["destination"];
      } else {
        delete updatedFilters[filterKey];
      }

      const updatedQuery = { ...router.query };

      if (filterKey === "name") {
        delete updatedQuery["name"];
        delete updatedQuery["destination"];
      } else {
        delete updatedQuery[filterKey];
      }

      router.push(
        {
          pathname: router.pathname,
          query: updatedQuery,
        },
        undefined,
        { shallow: true }
      );

      return updatedFilters;
    });
  };

  return (
    <div>
      <Header />
      <DetailHeaderSection place={name} />
      <h1 className="whereToNextText">{HOME_ENUM.whereToNext}</h1>
      <div className="searchBoxContainer">
        {" "}
        <SearchBar handleOpenFilter={handleOpenFilter} />
      </div>

      <DestinationDetails
        filters={selectedFilters}
        onRemoveFilter={removeFilter}
      />
      <Dialog
        open={openFilter}
        onClose={handleCloseFilter}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "54px",
            maxWidth: "none",
            width: "auto",
          },
        }}
      >
        <FilterComponent
          onClose={handleCloseFilter}
          onApply={handleFilterChange}
        />
      </Dialog>
    </div>
  );
};

export default DestinationDetail;
