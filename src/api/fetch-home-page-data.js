import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Function to fetch data from the endpoint
export const fetchHomePageData = async (args = "fetchHomePageData") => {
  const [url, config] = Array.isArray(args) ? args : [args, {}];

  try {
    const res = await axiosInstance.get(url, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

fetchHomePageData()
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Error:", error));
