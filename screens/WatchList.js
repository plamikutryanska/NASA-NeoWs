import { useContext } from "react";
import { StyleSheet, ImageBackground, FlatList } from "react-native";
import { WatchListContext } from "@/store/context/watchListContext";
import { DUMMY_DATA } from "@/data/mockData";

import EmptyState from "@/components/shared/EmptyState";
import DetailsTile from "@/components/shared/DetailsTile";

const WatchList = () => {
  const context = useContext(WatchListContext);
  const watchList = context.watchList;
  const watchListData = DUMMY_DATA.filter((neo) => watchList.includes(neo.id));

  const displayWatchList = (itemData) => {
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
    };

    return (
      <DetailsTile tileTitle={title} tileDetailsData={detailsTitleValueData} />
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/space.jpg")}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      {watchList.length ? (
        <FlatList
          data={watchListData}
          renderItem={displayWatchList}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <EmptyState message={"Your Near Earth Objects Watch List is Empty"} />
      )}
    </ImageBackground>
  );
};

export default WatchList;

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
