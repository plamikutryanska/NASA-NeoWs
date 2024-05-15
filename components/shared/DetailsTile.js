import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "@/constants/styles";

const DetailsTile = (detailsData) => {
  const {
    name,
    approximateDiameterInFeet: { minDiameter, maxDiameter } = {},
    relativeVelocityInMilesPerHour,
    missDistanceInMiles,
    potentiallyHazardousAsteroid,
  } = detailsData;

  const detailsTitleValueData = [
    {
      title: "Approximate diameter in feet:",
      value: `Min: ${minDiameter} Max: ${maxDiameter}`,
    },
    {
      title: "Relative velocity in miles per hour:",
      value: relativeVelocityInMilesPerHour,
    },
    { title: "Miss distance in miles:", value: missDistanceInMiles },
    { title: "Potentially hazardous:", value: potentiallyHazardousAsteroid },
  ];

  return (
    <View style={styles.tileContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.objectName}>{name}</Text>
      </View>
      <View style={styles.objectDetailsContainer}>
        {detailsTitleValueData.map((data, index) => {
          return (
            <View key={index}>
              <Text style={styles.objectDetailsTitle}>{data.title}</Text>
              <Text>{data.value}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DetailsTile;

const styles = StyleSheet.create({
  tileContainer: {
    borderRadius: 10,
    margin: 20,
    overflow: "hidden",
  },
  sectionHeader: {
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  objectName: {
    color: GlobalStyles.colors.primary700,
    textTransform: "uppercase",
  },
  objectDetailsContainer: {
    minHeight: 200,
    minWidth: "100%",
    padding: 12,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "white",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  objectDetailsTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 4,
    color: GlobalStyles.colors.primary700,
  },
});
