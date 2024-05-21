import { View, Text, StyleSheet } from "react-native";

type EmptyStateProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProps) => {
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
