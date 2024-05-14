import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import BottomTabsNavigation from "../components/navigation/BottomTabsNavigation";
import "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar style='dark' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#c6affc",
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
