import { ImageBackground, StyleSheet } from "react-native";

const BGimage = require("../assets/images/photoBg.jpg");

export default function ImageBackgroundMountain({ children, style }) {
  return (
    <ImageBackground source={BGimage} style={{ ...styles.image, ...style }}>
      {children}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
