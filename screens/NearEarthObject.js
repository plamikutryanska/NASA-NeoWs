import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import IconButton from "@/components/shared/IconButton";
import { GlobalStyles } from "@/constants/styles";
import { WatchListContext } from "@/store/context/watchListContext";

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}>
      <Text style={styles.name}>{detailsData.name}</Text>
      <IconButton
        buttonTitle={buttonTitle}
        iconName={"eye"}
        activeStateButton={neoIsInWatchList}
        onPress={changeWatchListStatus}
      />
      <View style={{ marginBottom: 64 }}>
        {detailsData.data.modalDetailsData?.map((detail, index) => {
          return (
            <View key={index} style={styles.detailsContainer}>
              <Text style={styles.title}>{detail.title}</Text>
              <Text>{detail.value}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default NearEarthObject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
    textAlign: "center",
  },
  detailsContainer: {
    borderRadius: 16,
    backgroundColor: "white",
    marginVertical: 8,
    padding: 24,
    elevation: 3,
    shadowColor: GlobalStyles.colors.primary700,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
    marginBottom: 8,
  },
});
