import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";

import UploadPostImage from "../components/UploadPostImage";
import images from "../components/SVG";

const initialState = {
  postName: "",
  location: "",
  image: null,
};

const PostScreen = ({ navigation }) => {
  const { SvgLocation, SvgArrowBack } = images;
  const [postData, setPostData] = useState(initialState);

  const buttonSubmitColorMaker = () => {
    if (postData.image && postData.postName) {
      return { backgroundColor: "#FF6C00" };
    }
    return { backgroundColor: "#F6F6F6" };
  };

  const buttonSubmitColorTextMaker = () => {
    if (postData.image && postData.postName) {
      return { color: "#FFFFFF" };
    }
    return { color: "#BDBDBD" };
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ ...styles.SvgBack, zIndex: 10 }}
            onPress={() => navigation.navigate("Home")}
          >
            <SvgArrowBack />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Створити публікацію</Text>
        </View>
        <View style={styles.main}>
          <View style={{ marginTop: 32 }}>
            <UploadPostImage setPostData={setPostData} />
          </View>
          <View style={styles.inputWrapperPostName}>
            <TextInput
              placeholder={"Назва..."}
              value={postData.postName}
              placeholderTextColor="#BDBDBD"
              style={styles.textInput}
              onChangeText={(value) => {
                setPostData((prState) => ({
                  ...prState,
                  postName: value,
                }));
              }}
            />
          </View>
          <View style={styles.inputWrapperLocation}>
            <View style={{ marginRight: 10, paddingTop: 5 }}>
              <SvgLocation />
            </View>
            <View>
              <TextInput
                placeholder={"Локація..."}
                value={postData.location}
                placeholderTextColor="#BDBDBD"
                style={styles.textInput}
                onChangeText={(value) => {
                  setPostData((prState) => ({
                    ...prState,
                    location: value,
                  }));
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            disabled={!postData.image || !postData.postName}
            style={{
              ...styles.postButton,
              ...buttonSubmitColorMaker(),
            }}
            onPress={() => console.log(postData)}
          >
            <Text
              style={{
                ...styles.textButtonPost,
                ...buttonSubmitColorTextMaker(),
              }}
            >
              Опублікувати
            </Text>
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

  SvgBack: {
    position: "absolute",
    top: 55,
    left: 16,
    width: 24,
    height: 24,
  },

  main: { marginHorizontal: 16 },

  inputWrapperPostName: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 10,
    marginTop: 40,
  },

  inputWrapperLocation: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  textInput: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },

  postButton: {
    marginTop: 30,

    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonPost: { fontSize: 16, lineHeight: 19 },
});

export default PostScreen;
