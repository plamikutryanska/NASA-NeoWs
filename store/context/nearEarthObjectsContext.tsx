import React, { createContext, useState, useEffect } from "react";
import { UseNasaNearEarthObjects } from "@/hooks/useNasaNearEarthObjects";
import { getNearEarthObjectDetails } from "@/utils/getNearEarthObjectDetails";
import { getFormattedDate } from "@/utils/getFormattedDate";

type NeoContextProps = {
  children: React.ReactNode;
};

type MinMaxDiameter = {
  minDiameter: number;
  maxDiameter: number;
};

export type ApiResponseObject = {
  name: string;
  id: string;
  approximateDiameterInFeet: MinMaxDiameter;
  approximateDiameterInKilometers: MinMaxDiameter;
  approximateDiameterInMeters: MinMaxDiameter;
  relativeVelocityInMilesPerHour: string;
  missDistanceInMiles: string;
  potentiallyHazardousAsteroid: string;
  orbitingBody: string;
  isSentryObject: boolean;
  neoReferenceId: string;
  absoluteMagnitude: number;
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
