import { FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";

const CameraComponent = ({
  timerActive,
  image,
  setCameraRef,
  setCameraOpen,
  takePhoto,
  addImage,
}) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.cameraContainer}>
      {timerActive && (
        <View style={styles.smallPhotoContainer}>
          <Image source={{ uri: image }} style={{ width: 120, height: 160 }} />
        </View>
      )}
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
        }}
        style={{
          width: windowWidth,
          height: (windowWidth * 4) / 3,
        }}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.smallButtonNavigationContainer}
          onPress={() => {
            setCameraOpen(false);
          }}
        >
          <Ionicons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.snapPhotoContainer}>
          <FontAwesome5 name="camera" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButtonNavigationContainer}
          onPress={addImage}
        >
          <Fontisto name="photograph" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#212121",
    position: "relative",
  },
  smallPhotoContainer: {
    position: "absolute",
    top: 50,
    left: 15,
    width: 160,
    height: 120,
    zIndex: 10,
  },
  navigationContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 1,
  },
  smallButtonNavigationContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 70,
    height: 70,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  snapPhotoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 100,
    height: 100,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
