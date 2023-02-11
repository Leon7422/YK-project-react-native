import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import images from "./SVG";

export default function UploadPostImage() {
  const { SvgPhotocamera } = images;
  const [image, setImage] = useState(null);
  const addImage = async () => {
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
    <>
      <TouchableOpacity onPress={addImage}>
        <View style={imageUploaderStyles.container}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120 }}
            />
          )}
          <TouchableOpacity>
            <View style={imageUploaderStyles.uploadBtnContainer}>
              <View style={imageUploaderStyles.cameraBackgroung}>
                <SvgPhotocamera />
              </View>
            </View>
          </TouchableOpacity>
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
    height: 240,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraBackgroung: {
    backgroundColor: "#FFF",
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
