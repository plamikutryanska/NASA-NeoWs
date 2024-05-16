import { StyleSheet, ImageBackground, FlatList } from "react-native";
import DetailsTile from "../components/shared/DetailsTile";
import { DUMMY_DATA } from "@/data/mockData";

const displayNearEarthObjects = (itemData) => {
  const nearEarthObject = itemData.item;
  const title = nearEarthObject.name;
  const shortList = [
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
  const detailsTitleValueData = {
    id: nearEarthObject.id,
    shortList: shortList,
    longList: [...shortList],
  };

  return (
    <DetailsTile tileTitle={title} tileDetailsData={detailsTitleValueData} />
  );
};

const NearEarthObjects = () => {
  // ADD EMPTY STATE ONCE I HAVE REAL DATA
  return (
    <ImageBackground
      source={require("../assets/images/space.jpg")}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={displayNearEarthObjects}
        keyExtractor={(item) => item.name}
      />
    </ImageBackground>
  );
};

export default NearEarthObjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.7,
  },
});
