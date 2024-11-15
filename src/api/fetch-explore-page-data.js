import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Function to fetch data from the 'fetchExplorePageData?locale=en' endpoint
export const fetchExplorePageData = async (
  args = "fetchExplorePageData?locale=en"
) => {
  const [url, config] = Array.isArray(args) ? args : [args, {}];
  const finalUrl = url.includes("locale=") ? url : `${url}?locale=en`;

  try {
    const res = await axiosInstance.get(finalUrl, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching explore page data:", error);
    throw error;
  }
};
