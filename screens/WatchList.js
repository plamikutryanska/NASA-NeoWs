import { View, Text, StyleSheet, ImageBackground } from "react-native";

const WatchList = () => {
  return (
    <ImageBackground
      source={require("../assets/images/space.jpg")}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View>
        <Text>Watch List</Text>
      </View>
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
