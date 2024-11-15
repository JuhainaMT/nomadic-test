export function extractProgramsByRegion(inputData) {
  const data =
    typeof inputData === "string" ? JSON.parse(inputData) : inputData;

  if (!Array.isArray(data)) {
    throw new Error("Expected an array as input");
  }

  const allPrograms = [];

  data.forEach((region) => {
    if (Array.isArray(region.programs)) {
      region.programs.forEach((program) => {
        allPrograms.push({
          regionTitle: region.title,
          regionValue: program.tribe_region_value || null,
          region: program.tribe_region || null,
          region_ar: program.tribe_region_ar || null,
          climate: program.tribe_climate || null,
          climate_ar: program.tribe_climate_ar || null,
          challenge: program.tribe_challenge || null,
          challenge_ar: program.tribe_challenge_ar || null,
          ...program,
        });
      });
    }
  });

  return allPrograms;
}
