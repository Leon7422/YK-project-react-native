import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import CommentScreen from "../screens/CommentScreen";

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
    </Tab.Navigator>
  );
};
export default ProfileNavigator;
