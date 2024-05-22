export const getNearEarthObjectDetails = ({ data, formattedDate }) => {
  if (data) {
    return data?.near_earth_objects[formattedDate]?.map((object) => {
      return {
        name: object.name || "",
        id: object.id || "",
        approximateDiameterInFeet: {
          minDiameter:
            object.estimated_diameter?.feet?.estimated_diameter_min || "",
          maxDiameter:
            object.estimated_diameter?.feet?.estimated_diameter_max || "",
        },
        relativeVelocityInMilesPerHour:
          object.close_approach_data[0].relative_velocity?.miles_per_hour || "",
        missDistanceInMiles:
          object.close_approach_data[0].miss_distance?.miles || "",
        potentiallyHazardousAsteroid:
          object.is_potentially_hazardous_asteroid.toString() || "",
      };
    });
  }

  return [];
};
