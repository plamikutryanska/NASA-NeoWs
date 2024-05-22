import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Links = {
  next?: string;
  prev?: string;
  self?: string;
};

type EstimatedDiameter = {
  feet: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  kilometers: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  meters: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  miles: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
};

type CloseApproachData = {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  miss_distance: {
    astronomical: string;
    kilometers: string;
    lunar: string;
    miles: string;
  };
  orbiting_body: string;
  relative_velocity: {
    kilometers_per_hour: string;
    kilometers_per_second: string;
    miles_per_hour: string;
  };
};

export type NeoObject = {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  estimated_diameter: EstimatedDiameter;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: Links[];
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
};

export type NasaNearEarthObjects = {
  element_count: number;
  links: Links;
  near_earth_objects: {
    [key: string]: NeoObject[];
  };
};

type UseNasaNearEarthObjects = {
  data?: NasaNearEarthObjects;
  isLoading: boolean;
  isError: boolean;
};

const fetchNasaData = async (
  formattedDate: string
): Promise<NasaNearEarthObjects> => {
  const apiKey = "lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN";
  const url = `https://\api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from NASA API");
  }
};

export const UseNasaNearEarthObjects = (
  formattedDate: string
): UseNasaNearEarthObjects => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["nasaNEO", formattedDate],
    queryFn: () => fetchNasaData(formattedDate),
  });
  return { data, isLoading, isError };
};
