import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import images from "../components/SVG";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { useKeyboard } from "./useKeyboard";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const { SvgGrid, SvgPerson, SvgPlus } = images;

const colorChanger = (focused) => {
  if (focused === true) {
    return "blue";
  } else {
    return "#FFF";
  }
};

const useRoute = (isAuth) => {
  const heightKeyboard = useKeyboard();
  const [isShowKeyBoard, setIsShowKeyboard] = useState(false);
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <AuthStack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
          shadowColor: 0,

          height: heightKeyboard === 0 ? 70 : 0,
          paddingTop: heightKeyboard === 0 ? 15 : 0,
          paddingBottom: heightKeyboard === 0 ? 15 : 0,
          paddingLeft: 45,
          paddingRight: 45,
          borderTopWidth: 1,
          borderTopColor: "#b3b3b3",
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (heightKeyboard === 0) {
              return <SvgGrid size={size} color={color} />;
            }
          },
        }}
      />
      <MainTab.Screen
        isShowKeyBoard={isShowKeyBoard}
        setIsShowKeyboard={setIsShowKeyboard}
        name="Post"
        component={PostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (heightKeyboard === 0) {
              return <SvgPlus size={size} color={colorChanger(focused)} />;
            }
          },

          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            width: 70,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (heightKeyboard === 0) {
              return <SvgPerson size={size} color={color} />;
            }
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
