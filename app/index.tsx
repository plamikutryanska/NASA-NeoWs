import BottomTabsNavigation from "../components/navigation/BottomTabsNavigation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../constants/styles";
import "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar style='dark' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary100,
          },
          headerTintColor: "white",
        }}>
        <Stack.Screen
          name='BottomTabsDisplay'
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
