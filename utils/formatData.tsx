import { ApiResponseObject } from "@/store/context/nearEarthObjectsContext";

export type TitleValue = {
  title: string;
  value: string;
};

type DetailsDataType = {
  id: string;
  title: string;
  detailsTileData: TitleValue[];
  modalDetailsData: TitleValue[];
};

export const formatData = (itemData: any) => {
  const nearEarthObject: ApiResponseObject = itemData.item;
  const title: string = nearEarthObject.name;

  const detailsTileData: TitleValue[] = [
    {
      title: "Potentially hazardous:",
      value: nearEarthObject.potentiallyHazardousAsteroid,
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
      title: "Approximate diameter in feet:",
      value: `Min: ${nearEarthObject.approximateDiameterInFeet.minDiameter} Max: ${nearEarthObject.approximateDiameterInFeet.maxDiameter}`,
    },
  ];

  const modalDetailsData: TitleValue[] = [
    {
      title: "Approximate diameter in kilometers:",
      value: `Min: ${nearEarthObject.approximateDiameterInKilometers.minDiameter} Max: ${nearEarthObject.approximateDiameterInKilometers.maxDiameter}`,
    },
    {
      title: "Approximate diameter in meters:",
      value: `Min: ${nearEarthObject.approximateDiameterInMeters.minDiameter} Max: ${nearEarthObject.approximateDiameterInMeters.maxDiameter}`,
    },
    {
      title: "Orbiting Body:",
      value: nearEarthObject.orbitingBody,
    },
    {
      title: "Is Sentry Object:",
      value: nearEarthObject.isSentryObject.toString(),
    },
    {
      title: "Neo Reference ID:",
      value: nearEarthObject.neoReferenceId,
    },
    {
      title: "Absolute Magnitude",
      value: nearEarthObject.absoluteMagnitude.toString(),
    },
  ];

  const detailsData: DetailsDataType = {
    id: nearEarthObject.id,
    title,
    detailsTileData,
    modalDetailsData: [...detailsTileData, ...modalDetailsData],
  };

  return detailsData;
};
