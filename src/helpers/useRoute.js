import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PostScreen from "../screens/PostScreen";
import HomeNavigator from "../bottomTabNavigators/homeNavigator";
import ProfileNavigator from "../bottomTabNavigators/profileNavigator";

import images from "../components/SVG";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { useKeyboard } from "./useKeyboard";

import getActiveRouteState from "./getActiveRouteState";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const { SvgGrid, SvgPerson, SvgPlus } = images;

const colorChanger = (focused) => {
  if (focused) {
    return "blue";
  } else {
    return "#FFF";
  }
};

const useRoute = () => {
  const heightKeyboard = useKeyboard();
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
    <>
      <MainTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFF",
            shadowColor: 0,
            height: 70,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 45,
            paddingRight: 45,
            borderTopWidth: 1,
            borderTopColor: "#b3b3b3",
          },
        }}
      >
        <MainTab.Screen
          name="Home"
          options={({ navigation }) => {
            let navName = null;
            if (navigation?.getState()) {
              navName = getActiveRouteState(
                getActiveRouteState(navigation?.getState())?.state
              )?.name;
            }
            return {
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => {
                return <SvgGrid size={size} color={color} />;
              },
              tabBarStyle:
                navName === "CommentNav"
                  ? { display: "none" }
                  : {
                      backgroundColor: "#FFF",
                      shadowColor: 0,
                      height: 70,
                      paddingTop: 15,
                      paddingBottom: 15,
                      paddingLeft: 45,
                      paddingRight: 45,
                      borderTopWidth: 1,
                      borderTopColor: "#b3b3b3",
                    },
            };
          }}
        >
          {() => <HomeNavigator setIsAuth={setIsAuth} />}
        </MainTab.Screen>
        <MainTab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <SvgPlus size={size} color={colorChanger(focused)} />;
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
          options={({ navigation }) => {
            let navName = null;
            if (navigation?.getState()) {
              navName = getActiveRouteState(
                getActiveRouteState(navigation?.getState())?.state
              )?.name;
            }
            return {
              headerShown: false,
              tabBarIcon: ({ focused, size, color }) => {
                return <SvgPerson size={size} color={color} />;
              },
              tabBarStyle:
                navName === "CommentNav"
                  ? { display: "none" }
                  : {
                      backgroundColor: "#FFF",
                      shadowColor: 0,
                      height: 70,
                      paddingTop: 15,
                      paddingBottom: 15,
                      paddingLeft: 45,
                      paddingRight: 45,
                      borderTopWidth: 1,
                      borderTopColor: "#b3b3b3",
                    },
            };
          }}
        >
          {() => <ProfileNavigator setIsAuth={setIsAuth} />}
        </MainTab.Screen>
      </MainTab.Navigator>
    </>
  );
};

export default useRoute;
