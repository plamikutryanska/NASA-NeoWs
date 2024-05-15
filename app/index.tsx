import BottomTabsNavigation from "../components/navigation/BottomTabsNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='BottomTabsDisplay'
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
