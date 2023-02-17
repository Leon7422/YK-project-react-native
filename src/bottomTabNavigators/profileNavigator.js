import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import CommentScreen from "../screens/CommentScreen";
import MapsScreen from "../screens/MapsScreen";

const Tab = createStackNavigator();

const ProfileNavigator = ({ setIsAuth }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProfileNav" options={{ headerShown: false }}>
        {() => <ProfileScreen setIsAuth={setIsAuth} />}
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
export default ProfileNavigator;
