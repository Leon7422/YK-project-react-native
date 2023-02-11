import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Svg, { Circle, Path } from "react-native-svg";

export default function UploadAvatarImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    console.log("start");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View
      style={[
        imageUploaderStyles.container,
        { transform: [{ translateX: -60 }] },
      ]}
    >
      {image && (
        <Image source={{ uri: image }} style={{ width: 120, height: 120 }} />
      )}
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}
        >
          <Svg
            width={25}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
              fill="#FF6C00"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const imageUploaderStyles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: "red",
    position: "absolute",
    top: -60,
    left: "50%",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  uploadBtnContainer: {
    position: "absolute",
    right: -13,
    bottom: 14,
  },
  uploadBtn: {
    borderRadius: "50%",
    width: 25,
    height: 25,
    borderRadius: 15,
  },
});
