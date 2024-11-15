import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  IconButton,
  TextField,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "../../assets/svg/CloseIcon.svg";
import Image from "next/image";
import "../../app/page.css";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fetchClimateData } from "@/api/get-filter-climate";
import { fetchRegionData } from "@/api/get-filter-region";

const FilterComponent = ({ onClose, onApply }) => {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState([
    router?.query?.priceRange[0] || "",
    router?.query?.priceRange[1] | "",
  ]);
  const [destination, setDestination] = useState(router?.query?.name || "");
  const [climate, setClimate] = useState(router?.query?.climate || "");
  const [loading, setLoading] = useState(false);
  const [climateOptions, setclimateOptions] = useState([]);
  const [regionOptions, setRegionOptions] = useState([]);

  const isMobile = useMediaQuery("(max-width:700px)");

  // Fetch climate data on component mount
  useEffect(() => {
    const getClimateData = async () => {
      setLoading(true);
      try {
        const data = await fetchClimateData();
        setclimateOptions(data || [{ value: "Mild", name: "Mild" }]);
      } catch (error) {
        console.error("Failed to fetch climate data:", error);
      } finally {
        setLoading(false);
      }
    };
    getClimateData();
  }, []);
  useEffect(() => {
    const getRegionData = async () => {
      setLoading(true);
      try {
        const data = await fetchRegionData();
        setRegionOptions(
          data.regions || [
            { value: "southern_africa", name: "Southern Africa" },
          ]
        );
      } catch (error) {
        console.error("Failed to fetch climate data:", error);
      } finally {
        setLoading(false);
      }
    };
    getRegionData();
  }, []);
  // Handle changes to the price range slider
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  // Clear all selections
  const handleClear = () => {
    setPriceRange([500, 8500]);
    setDestination();
    setClimate();
  };
  const handlePriceRangeChange = (e, index) => {
    const updatedPriceRange = [...priceRange];
    updatedPriceRange[index] = e.target.value;
    setPriceRange(updatedPriceRange);
  };
  const handleApply = () => {
    const filters = {
      priceRange,
      destination,
      climate,
    };
    if (onApply) {
      onApply(filters);
    }
    onClose();
  };
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "700px",
          backgroundColor: "#fff",
        }}
      >
        <CircularProgress sx={{ color: "#ffc107" }} />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "54px",
        padding: !isMobile ? "44px 30px" : "26px 32px",
        margin: "auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        color: "#333",
        width: isMobile ? "100%" : "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "#000",
            fontSize: isMobile ? "20px" : "30px",
            fontFamily: "var(--font-poppins)",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          Filters
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <Image src={CloseIcon} alt="close" />
        </IconButton>
      </Box>

      {/* Price Range */}
      <Box
        sx={{
          marginBottom: "24px",
          borderRadius: "13px",
          background: "#FAFAFA",
          padding: isMobile ? "16px 20px" : "30px 40px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "16px" : "18px",
            color: "#000",
            fontFamily: "var(--font-poppins)",
            fontStyle: "normal",
            lineHeight: "normal",
            marginBottom: "3px",
          }}
        >
          Price Range
        </Typography>

        <Slider
          value={priceRange.length === 0 ? [500, 8500] : priceRange}
          onChange={handlePriceChange}
          min={500}
          max={8500}
          step={50}
          valueLabelDisplay="auto"
          color="secondary"
          sx={{
            color: "#ffc107",
            "& .MuiSlider-thumb": {
              height: "20px",
              width: "20px",
              backgroundColor: "#ffc107",
              border: "2px solid #ffc107",
            },
            "& .MuiSlider-track": {
              height: "11px",
            },
            "& .MuiSlider-rail": {
              height: "11px",
              color: "#D9D9D9",
              borderRadius: "30px",
            },
          }}
        />
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "var(--font-poppins)",
              fontSize: isMobile ? "16px" : "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              marginLeft: "16px",
              marginRight: "8px",
            }}
          >
            From
          </Typography>
          <TextField
            value={priceRange[0]}
            onChange={(e) => handlePriceRangeChange(e, 0)}
            variant="outlined"
            size="small"
            sx={{
              width: isMobile ? "100%" : "141px",
              margin: isMobile ? "8px 0" : "0 16px",
              height: "42px",
              fontFamily: "Poppins, sans-serif",

              borderRight: "15px",
              fontSize: "25px",
              fontWeight: "700 !important",
              color: "#000",
              lineHeight: "normal",
              "& .MuiInputBase-input": {
                fontWeight: "700 !important",
              },
            }}
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "36px",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>$</Typography>
                </Box>
              ),
            }}
          />

          <Typography
            sx={{
              fontSize: isMobile ? "16px" : "20px",
              color: "#000",
              fontFamily: "var(--font-poppins)",

              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              marginLeft: isMobile ? "0px" : "56px",
              marginRight: "8px",
            }}
          >
            To
          </Typography>
          <TextField
            value={priceRange[1]}
            onChange={(e) => handlePriceRangeChange(e, 1)}
            variant="outlined"
            sx={{
              width: isMobile ? "100%" : "141px",
              margin: isMobile ? "8px 0" : "0 8px",
              fontFamily: "Poppins, sans-serif",

              borderRight: "15px",
              fontSize: "25px",
              fontWeight: "700 !important",
              color: "#000",
              lineHeight: "normal",
              height: "40px",
              "& .MuiInputBase-input": {
                fontWeight: "700 !important",
              },
              "& .MuiInputBase-root": {
                height: "40px",
                paddingTop: "0",
                paddingBottom: "0",
                border: "none",
              },
              "& .MuiOutlinedInput-root": {
                height: "40px",
                paddingTop: "0",
                paddingBottom: "0",
                border: "none",
              },
            }}
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "36px",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>$</Typography>
                </Box>
              ),
            }}
          />
        </Box>
      </Box>

      {/* Destination */}
      <Box
        sx={{
          marginBottom: "24px",
          borderRadius: "13px",
          background: "#FAFAFA",
          padding: isMobile ? "16px 20px" : "30px 40px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,

            color: "#000",
            fontFamily: "var(--font-poppins)",
            fontStyle: "normal",
            lineHeight: "normal",
            marginBottom: "3px",
            fontSize: isMobile ? "16px" : "18px",
          }}
        >
          Region
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={destination}
            onChange={(e) => {
              const value = e.target.value;
              setDestination(value);
            }}
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(1, 1fr)"
                : "repeat(4, 1fr)",
              gap: 2,
            }}
          >
            {Array.isArray(regionOptions) && regionOptions.length > 0 ? (
              regionOptions.map((regionOption, index) => (
                <FormControlLabel
                  key={index}
                  value={regionOption.value}
                  control={<Radio />}
                  label={
                    regionOption.name === "Placeholder" ? "" : regionOption.name
                  }
                  sx={{
                    display:
                      regionOption.name === "Placeholder" ? "none" : "block",
                    color:
                      destination === regionOption.value
                        ? "#ffc107 !important"
                        : "#333 !important",
                    fontWeight:
                      destination === regionOption.value
                        ? "700 !important"
                        : "400 !important",
                    "& .MuiRadio-root": {
                      color:
                        destination === regionOption.value
                          ? "#ffc107 !important"
                          : "#999 !important",
                      "&.Mui-checked": {
                        color: "#ffc107 !important",
                      },
                    },
                  }}
                />
              ))
            ) : (
              <p>No climate data available</p>
            )}
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Climate */}
      <Box
        sx={{
          padding: isMobile ? "16px 20px" : "28px 35px",
          marginBottom: "33px",
          borderRadius: "13px",
          background: "#FAFAFA",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "16px" : "18px",
            color: "#000",
            fontFamily: "var(--font-poppins)",
            fontStyle: "normal",
            lineHeight: "normal",
            marginBottom: "3px",
          }}
        >
          Climate
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(1, 1fr)"
                : "repeat(4, 1fr)",
              gap: isMobile ? "13px" : 8,
            }}
          >
            {Array.isArray(climateOptions) && climateOptions.length > 0 ? (
              climateOptions.map((climateOption, index) => (
                <FormControlLabel
                  key={index}
                  value={climateOption.value}
                  control={<Radio />}
                  label={
                    climateOption.name === "Placeholder"
                      ? ""
                      : climateOption.name
                  }
                  sx={{
                    display:
                      climateOption.name === "Placeholder" ? "none" : "block",
                    color:
                      climate === climateOption.value
                        ? "#ffc107 !important"
                        : "#333 !important",
                    fontWeight:
                      climate === climateOption.value
                        ? "700 !important"
                        : "400 !important",
                    "& .MuiRadio-root": {
                      color:
                        climate === climateOption.value
                          ? "#ffc107 !important"
                          : "#999 !important",
                      "&.Mui-checked": {
                        color: "#ffc107 !important",
                      },
                    },
                  }}
                />
              ))
            ) : (
              <p>No climate data available</p>
            )}
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Footer with Clear and Apply All buttons */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: isMobile ? "row" : "row",
          justifyContent: isMobile ? "flex-end" : "flex-end",
        }}
      >
        <Button
          onClick={handleClear}
          sx={{
            color: "#D0D0D0",
            textTransform: "none",
            fontSize: isMobile ? "12px" : "15px",
            padding: "16px 8px",
            fontWeight: 700,

            "&:hover": {
              boxShadow: "none",
              background: "none",
              color: "#000",
            },
          }}
        >
          Clear all
        </Button>
        <Button
          onClick={handleApply}
          variant="contained"
          sx={{
            backgroundColor: "#ffc107",
            color: "#fff",
            borderRadius: "24px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "12px" : "15px",
            width: "146px",
            height: " 51px",
            // padding: "9px 14px",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "none",
            transition: "box-shadow 0.3s ease",

            "&:hover": {
              boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Apply All
        </Button>
      </Box>
    </Box>
  );
};

export default FilterComponent;
