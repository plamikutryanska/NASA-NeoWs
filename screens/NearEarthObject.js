import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "@/constants/styles";

import IconButton from "@/components/shared/IconButton";

const NearEarthObject = ({ route }) => {
  const detailsData = route.params.detailsData;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{detailsData.name}</Text>
      <IconButton
        buttonTitle={"Add to Watch List"}
        iconName={"eye"}
        activeStateButton={true} //needs logic
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
