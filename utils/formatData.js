export const formatData = (itemData) => {
  const nearEarthObject = itemData.item;
  const title = nearEarthObject.name;

  const detailsTileData = [
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

  const detailsData = {
    id: nearEarthObject.id,
    title,
    detailsTileData,
  };

  return detailsData;
};
