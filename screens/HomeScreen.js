import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import images from "../components/SVG";

const HomeScreen = () => {
  const windowHeight = Dimensions.get("window").height;
  const galleryHeight = windowHeight - 88;
  const { SvgExit, SvgGrid, SvgPerson, SvgPlus } = images;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <View style={styles.svgExit}>
          <SvgExit />
        </View>
      </View>
      <View style={{ ...styles.gallery, height: galleryHeight }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  svgExit: {
    position: "absolute",
    right: 10,
    top: 55,
  },
  gallery: {},
  footer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#b3b3b3",
    height: 83,
  },
  buttonsList: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  svgPlusBtn: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
