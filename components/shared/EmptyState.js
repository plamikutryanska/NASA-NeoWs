import { View, Text, StyleSheet } from "react-native";

const EmptyState = ({ message }) => {
  return (
    <View style={styles.continer}>
      <Text>{message}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  continer: {
    backgroundColor: "white",
    opacity: 0.75,
    height: "20%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
