import React, { createContext, useState, useEffect } from "react";
import { UseNasaNearEarthObjects } from "@/hooks/useNasaNearEarthObjects";
import { getNearEarthObjectDetails } from "@/utils/getNearEarthObjectDetails";
import { getFormattedDate } from "@/utils/getFormattedDate";

type NeoContextProps = {
  children: React.ReactNode;
};

export type ApiResponseObject = {
  name: string;
  id: string;
  approximateDiameterInFeet: {
    minDiameter: number;
    maxDiameter: number;
  };
  relativeVelocityInMilesPerHour: string;
  missDistanceInMiles: string;
  potentiallyHazardousAsteroid: string;
};

type ApiResponse = {
  apiResponse: ApiResponseObject[];
};

export const NearEarthObjectsContext = createContext<ApiResponse>({
  apiResponse: [],
});

export const NearEarthObjectsContextProvider = ({
  children,
}: NeoContextProps) => {
  const todaysDate: Date = new Date();
  const [formattedDate, setFormattedDate] = useState<string>(
    getFormattedDate(todaysDate)
  );
  const [apiResponse, setApiResponse] = useState<ApiResponseObject[]>([]);

  const { data } = UseNasaNearEarthObjects(formattedDate);
  const response: ApiResponseObject[] = getNearEarthObjectDetails({
    data,
    formattedDate,
  });

  useEffect(() => {
    setFormattedDate(getFormattedDate(todaysDate));
  }, [todaysDate]);

  useEffect(() => {
    setApiResponse(response);
  }, [response.length]);

  const contextValue: ApiResponse = {
    apiResponse,
  };

  return (
    <NearEarthObjectsContext.Provider value={contextValue}>
      {children}
    </NearEarthObjectsContext.Provider>
  );
};

export default NearEarthObjectsContextProvider;
