import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { useKeyboard } from "../helpers/useKeyboard";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CameraComponent from "../components/PostScreen/Camera";

import UploadPostImage from "../components/PostScreen/UploadPostImage";
import images from "../components/SVG";

const initialState = {
  postName: "",
  location: "",
  image: null,
};

const PostScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { SvgLocation, SvgArrowBack, SvgTrash } = images;
  const [postData, setPostData] = useState(initialState);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const heightKeyboard = useKeyboard();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const clearState = () => {
    setPostData(initialState);
    setImage(null);
  };

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

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setImage(uri);
      setPostData((prState) => ({
        ...prState,
        image: uri,
      }));
      setTimerActive(true);
      setTimeout(() => {
        setTimerActive(false);
      }, 3000);
    }
  };

  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPostData((prState) => ({
        ...prState,
        image: result.assets[0].uri,
      }));
      setImage(result.assets[0].uri);
      setCameraOpen(false);
    }
  };

  return cameraOpen ? (
    <CameraComponent
      timerActive={timerActive}
      image={image}
      setCameraRef={setCameraRef}
      setCameraOpen={setCameraOpen}
      takePhoto={takePhoto}
      addImage={addImage}
    />
  ) : (
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
          <View style={{ borderRadius: 15 }}>
            <UploadPostImage
              setPostData={setPostData}
              image={image}
              setImage={setImage}
              setCameraOpen={setCameraOpen}
            />
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
            onPress={() => {
              console.log(postData), setPostData(initialState), setImage(null);
            }}
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
        {heightKeyboard !== 0 ? (
          ""
        ) : (
          <TouchableOpacity
            style={[
              styles.resetButton,
              {
                transform: [{ translateX: -35 }],
                backgroundColor:
                  postData.image && postData.postName ? "#FF6C00" : "#F6F6F6",
              },
            ]}
            onPress={clearState}
          >
            <SvgTrash
              color={
                postData.image && postData.postName ? "#FFFFFF" : "#BDBDBD"
              }
            />
          </TouchableOpacity>
        )}
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

  resetButton: {
    width: 70,
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: "50%",
    borderRadius: 20,
  },
});

export default PostScreen;
