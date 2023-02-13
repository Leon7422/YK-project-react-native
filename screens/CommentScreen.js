import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";

const CommentScreen = ({ setIsAuth }) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;
  const galleryHeight = windowHeight - 88;
  const { SvgArrowBack } = images;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Коментарі</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.svgExit}
        >
          <SvgArrowBack />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.gallery, height: galleryHeight }}></View>
    </View>
  );
};

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
});

export default CommentScreen;
