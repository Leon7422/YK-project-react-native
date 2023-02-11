import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./helpers/useRoute";

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
