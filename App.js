import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./src/helpers/useRoute";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => setUser(user));

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
