import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CommentScreen from "../screens/CommentScreen";

const Tab = createStackNavigator();

const HomeNavigator = ({ setIsAuth }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeNav" options={{ headerShown: false }}>
        {() => <HomeScreen setIsAuth={setIsAuth} />}
      </Tab.Screen>
      <Tab.Screen name="CommentNav" options={{ headerShown: false }}>
        {() => <CommentScreen setIsAuth={setIsAuth} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default HomeNavigator;
