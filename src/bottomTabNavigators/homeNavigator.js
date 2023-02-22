import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CommentScreen from "../screens/CommentScreen";
import MapsScreen from "../screens/MapsScreen";

const Tab = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeNav" options={{ headerShown: false }}>
        {() => <HomeScreen />}
      </Tab.Screen>
      <Tab.Screen name="CommentNav" options={{ headerShown: false }}>
        {() => <CommentScreen />}
      </Tab.Screen>
      <Tab.Screen name="MapsNav" options={{ headerShown: false }}>
        {() => <MapsScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default HomeNavigator;
