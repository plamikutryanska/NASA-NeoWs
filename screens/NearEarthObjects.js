import { useContext } from "react";
import { StyleSheet, ImageBackground, FlatList } from "react-native";

import DetailsTile from "@/components/shared/DetailsTile";
import { NearEarthObjectsContext } from "@/store/context/nearEarthObjectsContext";
import { formatData } from "@/utils/formatData";

const displayNearEarthObjects = (itemData) => {
  const data = formatData(itemData);
  return <DetailsTile tileDetailsData={data} />;
};

const NearEarthObjects = () => {
  const context = useContext(NearEarthObjectsContext);
  const apiResponse = context.apiResponse;
  // ADD EMPTY STATE ONCE I HAVE REAL DATA
  return (
    <ImageBackground
      source={require("../assets/images/space.jpg")}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <FlatList
        data={apiResponse}
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
