import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import CommentScreen from "../screens/CommentScreen";

const Tab = createStackNavigator();

const ProfileScreenNav = ({ setIsAuth }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProfileNav"
        component={ProfileScreen}
        setIsAuth={setIsAuth}
      />
      <Tab.Screen
        name="CommentNav"
        component={CommentScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default ProfileScreenNav;
