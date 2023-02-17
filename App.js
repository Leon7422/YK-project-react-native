import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./src/helpers/useRoute";

export default function App() {
  const routing = useRoute();
  return <NavigationContainer>{routing}</NavigationContainer>;
}
