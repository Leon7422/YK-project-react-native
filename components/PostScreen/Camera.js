import { FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";
import { View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
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
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#212121",
        position: "relative",
      }}
    >
      {timerActive ? (
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 15,
            width: 160,
            height: 120,
            zIndex: 10,
          }}
        >
          <Image source={{ uri: image }} style={{ width: 120, height: 160 }} />
        </View>
      ) : (
        ""
      )}
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
        }}
        style={{
          width: windowWidth,
          height: (windowWidth * 4) / 3,
        }}
      ></Camera>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: 70,
            height: 70,
            borderRadius: 90,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setCameraOpen(false);
          }}
        >
          <Ionicons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhoto}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: 100,
            height: 100,
            borderRadius: 90,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="camera" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: 70,
            height: 70,
            borderRadius: 90,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={addImage}
        >
          <Fontisto name="photograph" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraComponent;

//
//
//

//         <TouchableOpacity
//           onPress={takePhoto}
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             width: 100,
//             height: 100,
//             borderRadius: 90,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <FontAwesome5 name="camera" size={50} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             width: 70,
//             height: 70,
//             borderRadius: 90,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onPress={addImage}
//         >
//           <Fontisto name="photograph" size={40} color="white" />
//         </TouchableOpacity>
