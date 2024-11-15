import Image from "next/image";
import styles from "./DestinationDetails.module.scss";
import HeartIcon from "../../assets/svg/heartIcon";
import CloseIcon from "../../assets/svg/CrossIconFilter.svg";
import { fetchExplorePageData } from "../../api/fetch-explore-page-data.js";
import { CircularProgress, Box, Typography, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { extractProgramsByRegion } from "./convert-details-data";
const DestinationDetails = ({ filters, onRemoveFilter, ref }) => {
  const router = useRouter();
  const { name } = router.query;

  const [favorites, setFavorites] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [completeDetails, setCompleteDetails] = useState(false);
  const [formattedData, setFormattedData] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDetailsPage =
    (router.pathname === "/details" || router.pathname === "/details/") &&
    Object.keys(router.query).length === 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDetailsPage && formattedData && formattedData.length < 0) {
      fetchData();
    }

    if (completeDetails && completeDetails.length > 0) {
      const formattedData = extractProgramsByRegion(completeDetails);
      setFormattedData(formattedData);
    }
  }, [isDetailsPage, router.query, completeDetails]);

  const toggleFavorite = (programId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [programId]: !prevFavorites[programId],
    }));
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchExplorePageData();
      if (isDetailsPage) {
        setCompleteDetails(data.regionData);
        setLoading(false);
        return;
      }
      setRegionData([]);
      setError(null);

      if (data && data.regionData && name) {
        const formattedName = name
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/\+/g, "_");
        const matchedRegion = data.regionData.find((region) => {
          const formattedTitle = region.title
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/\+/g, "_");
          return formattedTitle === formattedName;
        });

        if (matchedRegion) {
          let filteredPrograms = matchedRegion.programs;
          if (router.query.climate) {
            filteredPrograms = filteredPrograms.filter((program) => {
              return (
                program.tribe_climate.toLowerCase() ===
                router.query.climate.toLowerCase()
              );
            });
          }

          if (router.query.priceRange) {
            const priceRangeValues = [];
            for (let i = 0; i < router.query.priceRange.length; i += 2) {
              const min = parseFloat(router.query.priceRange[i]);
              const max = parseFloat(router.query.priceRange[i + 1]);
              if (!isNaN(min) && !isNaN(max)) priceRangeValues.push([min, max]);
            }

            filteredPrograms = filteredPrograms.filter((program) => {
              const programPrice = parseFloat(program.starting_from);
              return priceRangeValues.some(
                (range) => programPrice >= range[0] && programPrice <= range[1]
              );
            });
          }

          setRegionData(filteredPrograms);
        } else {
          console.log("No matching region found.");
          setError("No package under this region!");
        }
      } else {
        console.log("Invalid data format received.");
        setError("Invalid data format received.");
      }
    } catch (err) {
      console.error("Error fetching explore page data:", err);
      setError("Error fetching explore page data.");
    } finally {
      setLoading(false);
    }
  };
  console.log("formatted data", formattedData);
  useEffect(() => {
    fetchData();
  }, [name, router.query.climate, router.query.priceRange, router.query]);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#fff",
        }}
      >
        <CircularProgress sx={{ color: "#ffc107" }} />
      </Box>
    );
  }
  console.log("region draa", regionData);
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "100px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          sx={{
            maxWidth: 600,
            margin: "20px",
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Typography
              sx={{
                color: "#721c24",
                fontWeight: 600,
                fontSize: 18,
                marginBottom: 1,
              }}
            >
              No Package Available
            </Typography>
            <Typography sx={{ color: "#721c24", fontSize: 16 }}>
              There are no packages available under this region at the moment.
            </Typography>
          </CardContent>
        </div>
      </Box>
    );
  }
  if (!regionData && completeDetails.length < 0) {
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
    <section className={styles.hotDestination} ref={ref}>
      {filters && (
        <div className={styles.selectedFilters}>
          {Object.entries(filters).map(([key, value]) => {
            // Skip rendering priceRange if it's an empty array
            if (
              key === "priceRange" &&
              Array.isArray(value) &&
              value.length === 0
            ) {
              return null;
            }

            return (
              value && (
                <div key={key} className={styles.filterChip}>
                  <span>
                    {key === "priceRange" && Array.isArray(value)
                      ? `$${parseInt(value[0]).toLocaleString()} - $${parseInt(
                          value[1]
                        ).toLocaleString()}`
                      : value.toUpperCase()}
                  </span>
                  <Image
                    src={CloseIcon}
                    alt="close"
                    className={styles.closeIcon}
                    onClick={() => onRemoveFilter(key)}
                  />
                </div>
              )
            );
          })}
        </div>
      )}

      {!isDetailsPage && (
        <h2 className={styles.regionTitle}>{regionData?.title}</h2>
      )}

      {!isDetailsPage && (
        <div className={styles.destinationGrid}>
          {regionData && regionData.length > 0
            ? regionData.map((program) => (
                <div key={program.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={program.banner}
                      alt={program.name}
                      className={styles.image}
                      width={220}
                      height={269}
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className={styles.heartIcon}
                      onClick={() => toggleFavorite(program.id)}
                    >
                      <HeartIcon isFavorite={favorites[program.id]} />
                    </div>
                  </div>
                  <h3 className={styles.region}>{program.tribe_name}</h3>
                  <p className={styles.description}>{program.name}</p>
                  <p className={styles.price}>
                    ${program.starting_from.toLocaleString()}
                    <span className={styles.perPersonText}> / Per Person</span>
                  </p>
                </div>
              ))
            : ""}
        </div>
      )}
      {isDetailsPage && (
        <div className={styles.destinationGridDetails}>
          {formattedData && formattedData.length > 0
            ? Object.entries(
                formattedData.reduce((acc, program) => {
                  const region = program.regionTitle || "Unspecified Region";
                  if (!acc[region]) acc[region] = [];
                  acc[region].push(program);
                  return acc;
                }, {})
              ).map(([regionTitle, programs], index) => (
                <div key={regionTitle} className={styles.regionSection}>
                  <h2 className={styles.regionTitle}>{regionTitle}</h2>

                  <div className={styles.programsContainer}>
                    <div className={styles.programsGrid}>
                      {programs.map((program) => (
                        <div key={program.id} className={styles.card}>
                          <div className={styles.imageWrapper}>
                            <Image
                              src={program.banner}
                              alt={program.name}
                              className={styles.image}
                              width={220}
                              height={289}
                              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              style={{ objectFit: "cover" }}
                            />
                            <div
                              className={styles.heartIcon}
                              onClick={() => toggleFavorite(program.id)}
                            >
                              <HeartIcon isFavorite={favorites[program.id]} />
                            </div>
                          </div>
                          <h3 className={styles.region}>
                            {program.tribe_name}
                          </h3>
                          <p className={styles.description}>{program.name}</p>
                          <p className={styles.price}>
                            ${program.starting_from.toLocaleString()}
                            <span className={styles.perPersonText}>
                              {" "}
                              / Per Person
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      )}
    </section>
  );
};

export default DestinationDetails;
