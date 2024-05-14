import WatchList from "@/screens/WatchList";
import NearEarthObjects from "@/screens/NearEarthObjects";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        headerTintColor: GlobalStyles.colors.primary700,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        tabBarActiveTintColor: GlobalStyles.colors.primary700,
      })}>
      <BottomTabs.Screen
        name='todayNearthEarthObjects'
        component={NearEarthObjects}
        options={{
          title: "Near Earth Objects",
          tabBarLabel: "Today's NeoWs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='today' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='watchList'
        component={WatchList}
        options={{
          title: "Watch List",
          tabBarLabel: "Watch List",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='eye' size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigation;
