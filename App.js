import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./src/helpers/useRoute";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const routing = useRoute();
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
