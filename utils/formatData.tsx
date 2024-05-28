import { ApiResponseObject } from "@/store/context/nearEarthObjectsContext";
import { ListRenderItemInfo } from "react-native";

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

export const formatData = (itemData: ListRenderItemInfo<ApiResponseObject>) => {
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

// {
//   "index": 15,
//    "item": {
//     // "absoluteMagnitude": 24.567,
//     // "approximateDiameterInFeet": {
//     //   "maxDiameter": 238.0263461669,
//     //   "minDiameter": 106.448618093
//     // },
//     // "approximateDiameterInKilometers": {
//     //   "maxDiameter": 0.072550428,
//     //   "minDiameter": 0.0324455378
//     // },
//     // "approximateDiameterInMeters": {
//     //   "maxDiameter": 72.5504279901,
//     //   "minDiameter": 32.4455377565
//     // },
//     // "id": "54442321",
//     // "isSentryObject": false,
//     // "missDistanceInMiles": "4110869.802734199",
//     // "name": "(2024 JV17)",
//     // "neoReferenceId": "54442321",
//     // "orbitingBody": "Earth",
//     // "potentiallyHazardousAsteroid": "false",
//     // "relativeVelocityInMilesPerHour": "18745.7110558196"
//   },
//   "separators": {
//     "highlight": [Function highlight],
//     "unhighlight": [Function unhighlight],
//     "updateProps": [Function updateProps]
//   }
// }
