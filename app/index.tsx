import NearEarthObject from "@/screens/NearEarthObject";
import BottomTabsNavigation from "../components/navigation/BottomTabsNavigation";
import { WatchListContextProvider } from "../store/context/watchListContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "@/constants/styles";
import "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <WatchListContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='BottomTabsDisplay'
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NearEarthObject'
          component={NearEarthObject}
          options={{
            presentation: "modal",
            title: "Neo Details",
            headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
            headerTintColor: GlobalStyles.colors.primary50,
          }}
        />
      </Stack.Navigator>
    </WatchListContextProvider>
  );
}
