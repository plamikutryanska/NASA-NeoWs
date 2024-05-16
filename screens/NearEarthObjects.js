import { StyleSheet, ImageBackground, FlatList } from "react-native";
import DetailsTile from "../components/shared/DetailsTile";

const DUMMY_DATA = [
  {
    approximateDiameterInFeet: {
      maxDiameter: 216.8827593336,
      minDiameter: 96.9929186035,
    },
    missDistanceInMiles: "208888.0934861784",
    id: "3274304",
    name: "(2024 JY16)",
    potentiallyHazardousAsteroid: "false",
    relativeVelocityInMilesPerHour: "37587.3867827524",
  },
  {
    approximateDiameterInFeet: {
      maxDiameter: 70.5707982649,
      minDiameter: 31.5602204294,
    },
    missDistanceInMiles: "330825.762932245",
    id: "3274305",
    name: "(2024 JH15)",
    potentiallyHazardousAsteroid: "false",
    relativeVelocityInMilesPerHour: "31594.8446007673",
  },
  {
    approximateDiameterInFeet: {
      maxDiameter: 180.3121658466,
      minDiameter: 80.6380520006,
    },
    missDistanceInMiles: "3509154.274984486",
    id: "3274306",
    name: "(2021 JN10)",
    potentiallyHazardousAsteroid: "false",
    relativeVelocityInMilesPerHour: "30014.7516587899",
  },
  {
    approximateDiameterInFeet: {
      maxDiameter: 152.7654100083,
      minDiameter: 68.3187682778,
    },
    missDistanceInMiles: "3991076.0659977164",
    id: "3274307",
    name: "(2021 JJ)",
    potentiallyHazardousAsteroid: "false",
    relativeVelocityInMilesPerHour: "12818.7820084789",
  },
  {
    approximateDiameterInFeet: {
      maxDiameter: 269.6652777184,
      minDiameter: 120.5979784299,
    },
    missDistanceInMiles: "8130172.094431008",
    id: "3274308",
    name: "(2024 HA2)",
    potentiallyHazardousAsteroid: "false",
    relativeVelocityInMilesPerHour: "13396.4903698275",
  },
];

const displayNearEarthObjects = (itemData) => {
  return <DetailsTile {...itemData.item} />;
};

const NearEarthObjects = () => {
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
