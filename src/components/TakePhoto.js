import { View, StyleSheet, TouchableOpacity } from "react-native";
import images from "./SVG";

const TakePhoto = ({ image, takePhoto, addImage }) => {
  const { SvgPhotocamera } = images;

  const colorForCamera = (image) => {
    if (image) {
      return "#FFF";
    } else {
      return "#BDBDBD";
    }
  };

  return (
    <View style={imageUploaderStyles.cameraBackground}>
      <SvgPhotocamera color={colorForCamera(image)} />
    </View>
  );
};

export default TakePhoto;

const imageUploaderStyles = StyleSheet.create({
  cameraBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 60,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
