import React from "react";
import {} from "react-native";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../helpers/useRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Main = () => {
  const [user, setUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => setUser(user));
  const state = useSelector((state) => state);
  console.log(state);
  const routing = useRoute(user);

  useEffect(() => {}, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
