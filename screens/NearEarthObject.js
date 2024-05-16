import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "@/constants/styles";

const NearEarthObject = () => {
  return (
    <View style={styles.container}>
      <Text>THIS WILL BE THE DETAILS MODAL</Text>
    </View>
  );
};

export default NearEarthObject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
