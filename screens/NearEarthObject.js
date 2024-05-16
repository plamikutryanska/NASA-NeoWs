import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "@/constants/styles";

import IconButton from "@/components/shared/IconButton";
import { WatchListContext } from "../store/context/watchListContext";

const NearEarthObject = ({ route }) => {
  const context = useContext(WatchListContext);

  const detailsData = route.params.detailsData;
  const neoId = detailsData.data.id;

  const neoIsInWatchList = context.watchList.includes(neoId);
  const buttonTitle = neoIsInWatchList
    ? "Remove from Watch List"
    : "Add to Watch List";

  const changeWatchListStatus = () => {
    if (neoIsInWatchList) {
      context.removeFromWatchList(neoId);
    } else {
      context.addToWatchList(neoId);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{detailsData.name}</Text>
      <IconButton
        buttonTitle={buttonTitle}
        iconName={"eye"}
        activeStateButton={neoIsInWatchList}
        onPress={changeWatchListStatus}
      />
    </View>
  );
};

export default NearEarthObject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
  },
  shadow: {
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  infoBox: {
    borderRadius: 10,
    backgroundColor: "white",
  },
});
