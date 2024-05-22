import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNasaData = async (formattedDate) => {
  const apiKey = "lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN";
  const url = `https://\api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from NASA API");
  }
};

export const UseNasaNearEarthObjects = (formattedDate) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["nasaNEO", formattedDate],
    queryFn: () => fetchNasaData(formattedDate),
  });
  return { data, isLoading, isError };
};
