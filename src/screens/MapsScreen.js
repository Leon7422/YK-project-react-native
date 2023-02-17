import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapsScreen = () => {
  const { SvgArrowBack } = images;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ ...styles.SvgBack, zIndex: 10 }}
          onPress={() => navigation.goBack()}
        >
          <SvgArrowBack />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Карти</Text>
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.843964985200444,
          longitude: 24.026282551869787,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: 49.843964985200444,
            longitude: 24.026282551869787,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#FFFFFF",
    shadowOffset: 0.5,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
    position: "relative",
  },

  headerTitle: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 55,
    lineHeight: 22,
    fontWeight: "500",
    letterSpacing: -0.408,
  },
  SvgBack: {
    position: "absolute",
    top: 55,
    left: 16,
    width: 24,
    height: 24,
  },
});
