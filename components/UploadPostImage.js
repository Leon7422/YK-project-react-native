import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import images from "./SVG";
import { useKeyboard } from "../helpers/useKeyboard";

export default function UploadPostImage({ setPostData }) {
  const windowWidth = Dimensions.get("window").width;
  const heightKeyboard = useKeyboard();
  const { SvgPhotocamera } = images;
  const [image, setImage] = useState(null);
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
    }
  };
  const colorForCamera = (image) => {
    if (image) {
      return "#FFF";
    } else {
      return "#BDBDBD";
    }
  };
  return (
    <>
      <TouchableOpacity onPress={addImage}>
        <View
          style={{
            ...imageUploaderStyles.container,
            height: heightKeyboard === 0 ? 240 : 80,
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: windowWidth - 32,
                height: heightKeyboard === 0 ? 240 : 80,
                borderRadius: 8,
              }}
            />
          )}

          <View
            style={[
              imageUploaderStyles.uploadBtnContainer,
              { transform: [{ translateX: -30 }, { translateY: -30 }] },
            ]}
          >
            <View style={imageUploaderStyles.cameraBackgroung}>
              <SvgPhotocamera color={colorForCamera(image)} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={imageUploaderStyles.editText}>
        {image ? "Редагувати" : "Загрузити"} фото
      </Text>
    </>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  uploadBtnContainer: { position: "absolute", top: "50%", left: "50%" },
  cameraBackgroung: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 60,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  editText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    marginTop: 8,
  },
});
