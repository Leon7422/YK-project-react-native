import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Dimensions } from "react-native";
import images from "../components/SVG";
import UploadPostImage from "../components/UploadPostImage";

const PostScreen = (props) => {
  const windowHeight = Dimensions.get("window").height;
  const { SvgExit } = images;
  console.log(props);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Створити публікацію</Text>
        </View>
        <View style={styles.main}>
          <View style={{ marginTop: 32 }}>
            <UploadPostImage />
          </View>
          <View style={{ ...styles.inputWrapper, marginTop: 40 }}>
            <TextInput
              placeholder={"Назва..."}
              placeholderTextColor="#BDBDBD"
              style={styles.textInput}
            />
          </View>
          <View style={{ ...styles.inputWrapper, marginTop: 20 }}>
            <TextInput
              placeholder={"Локація"}
              placeholderTextColor="#BDBDBD"
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.textButtonPost}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  main: { marginHorizontal: 16 },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    paddingBottom: 10,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },
  postButton: {
    marginTop: 30,
    backgroundColor: "#F6F6F6",
    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonPost: { fontSize: 16, lineHeight: 19, color: "#BDBDBD" },
});

export default PostScreen;
