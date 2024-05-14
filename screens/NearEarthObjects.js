import { View, Text, StyleSheet, ImageBackground } from "react-native";

const NearEarthObjects = () => {
  return (
    <ImageBackground
      source={require("../assets/images/space.jpg")}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View>
        <Text>Near Earth Objects</Text>
      </View>
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
