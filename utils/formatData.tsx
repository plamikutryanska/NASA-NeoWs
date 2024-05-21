import { NearEarthObject } from "@/data/mockData";

export type TitleValue = {
  title: string;
  value: string;
};

type DetailsDataType = {
  id: string;
  title: string;
  detailsTileData: TitleValue[];
};

export const formatData = (itemData: any) => {
  const nearEarthObject: NearEarthObject = itemData.item;
  const title: string = nearEarthObject.name;

  const detailsTileData: TitleValue[] = [
    {
      title: "Approximate diameter in feet:",
      value: `Min: ${nearEarthObject.approximateDiameterInFeet.minDiameter} Max: ${nearEarthObject.approximateDiameterInFeet.maxDiameter}`,
    },
    {
      title: "Relative velocity in miles per hour:",
      value: nearEarthObject.relativeVelocityInMilesPerHour,
    },
    {
      title: "Miss distance in miles:",
      value: nearEarthObject.missDistanceInMiles,
    },
    {
      title: "Potentially hazardous:",
      value: nearEarthObject.potentiallyHazardousAsteroid,
    },
  ];

  const detailsData: DetailsDataType = {
    id: nearEarthObject.id,
    title,
    detailsTileData,
  };

  return detailsData;
};
