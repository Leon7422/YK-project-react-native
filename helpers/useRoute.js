import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import images from "../components/SVG";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { useKeyboard } from "./useKeyboard";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const { SvgGrid, SvgPerson, SvgPlus } = images;

const colorChanger = (focused, setPostActive) => {
  if (focused) {
    return "blue";
  } else {
    return "#FFF";
  }
};

const useRoute = () => {
  const heightKeyboard = useKeyboard();
  const [postActive, setPostActive] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" options={{ headerShown: false }}>
          {() => <LoginScreen setIsAuth={setIsAuth} />}
        </AuthStack.Screen>
        <AuthStack.Screen name="Register" options={{ headerShown: false }}>
          {() => <RegisterScreen setIsAuth={setIsAuth} />}
        </AuthStack.Screen>
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

          height: postActive ? 0 : 70,
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
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (heightKeyboard === 0) {
              return <SvgGrid size={size} color={color} />;
            }
          },
        }}
      >
        {() => <HomeScreen setIsAuth={setIsAuth} />}
      </MainTab.Screen>
      <MainTab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <SvgPlus
                size={size}
                color={colorChanger(focused, setPostActive)}
              />
            );
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
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (heightKeyboard === 0) {
              return <SvgPerson size={size} color={color} />;
            }
          },
        }}
      >
        {() => <ProfileScreen setIsAuth={setIsAuth} />}
      </MainTab.Screen>
    </MainTab.Navigator>
  );
};

export default useRoute;
