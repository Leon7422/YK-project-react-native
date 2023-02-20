import React from "react";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../helpers/useRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import authOperations from "../redux/auth/authOperations";

const Main = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const routing = useRoute(currentUser);

  useEffect(() => {
    dispatch(authOperations.authCurrentUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
