import { Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  iconName: any;
  buttonTitle: string;
  activeStateButton: boolean;
  onPress: () => void;
};

const IconButton = ({
  iconName,
  buttonTitle,
  activeStateButton,
  onPress,
}: IconButtonProps) => {
  const activeTextColor: string = activeStateButton
    ? GlobalStyles.colors.primary50
    : GlobalStyles.colors.primary700;

  const buttonBackgroundColor: string = activeStateButton
    ? GlobalStyles.colors.primary700
    : GlobalStyles.colors.primary50;

  return (
    <Pressable
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonBackgroundColor },
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonTitle, { color: activeTextColor }]}>
        {buttonTitle}
      </Text>
      <Ionicons name={iconName} size={24} color={activeTextColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    padding: 12,
    width: 200,
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: "gray",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  buttonTitle: {
    fontSize: 12,
  },
});
