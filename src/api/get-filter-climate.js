import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});
// Function to fetch data from the 'getClimate?locale=en' endpoint
export const fetchClimateData = async (args = "getClimate") => {
  const [url, config] = Array.isArray(args) ? args : [args, {}];

  try {
    const res = await axiosInstance.get(url, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching climate data:", error);
    throw error;
  }
};

fetchClimateData()
  .then((data) => console.log("Fetched climate data:", data))
  .catch((error) => console.error("Error:", error));