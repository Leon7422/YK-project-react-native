import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import UploadAvatarImage from "../components/UploadAvatarImage";
import ImageBackgroundMountain from "../components/ImageBackgroundMountain";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";

const backEnd = [
  {
    id: 1,
    userName: "Natali Romanova",
    photoURL:
      "https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg",
    photoAlt: "Jungle",
    commnets: [
      {
        author: "Random Guy",
        comment: "Hello",
      },
      {
        author: "Natali Romanova",
        comment: "Hi",
      },
      {
        author: "Random Guy",
        comment: "How are you?",
      },
      {
        author: "Natali Romanova",
        comment: "Im fine thnanks",
      },
    ],
    likesQuantity: 182,
    location: "Ukraine",
  },
  {
    id: 2,
    userName: "Natali Romanova",
    photoURL:
      "https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg",
    photoAlt: "Jungle",
    commnets: [
      {
        author: "Random Guy",
        comment: "Hello",
      },
      {
        author: "Natali Romanova",
        comment: "Hi",
      },
      {
        author: "Random Guy",
        comment: "How are you?",
      },
      {
        author: "Natali Romanova",
        comment: "Im fine thnanks",
      },
    ],
    likesQuantity: 182,
    location: "Ukraine",
  },
  {
    id: 3,
    userName: "Natali Romanova",
    photoURL:
      "https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg",
    photoAlt: "Jungle",
    commnets: [
      {
        author: "Random Guy",
        comment: "Hello",
      },
      {
        author: "Natali Romanova",
        comment: "Hi",
      },
      {
        author: "Random Guy",
        comment: "How are you?",
      },
      {
        author: "Natali Romanova",
        comment: "Im fine thnanks",
      },
    ],
    likesQuantity: 182,
    location: "Ukraine",
  },
];

const ProfileScreen = ({ setIsAuth }) => {
  const { SvgLike, SvgComment, SvgLocation, SvgExit } = images;
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <ImageBackgroundMountain>
            <View
              style={{
                ...styles.container,
                minHeight: windowHeight,
              }}
            >
              <UploadAvatarImage />
              <View style={styles.header}>
                <Text style={styles.headerText}>UserName</Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 18,
                    bottom: 0,
                  }}
                  onPress={() => setIsAuth(false)}
                >
                  <SvgExit />
                </TouchableOpacity>
              </View>

              <View style={styles.main}>
                {backEnd.map((item) => {
                  return (
                    <View key={item.id} style={styles.galletyItem}>
                      <View>
                        <Image
                          source={{ uri: item.photoURL }}
                          style={{ ...styles.image }}
                        />
                      </View>
                      <Text style={styles.photoName}>{item.photoAlt}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 10,
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <SvgComment />
                          <Text style={{ ...styles.text, marginLeft: 5 }}>
                            {item.commnets.length}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 30 }}>
                          <SvgLike />
                          <Text style={{ ...styles.text, marginLeft: 5 }}>
                            {item.likesQuantity}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            position: "absolute",
                            top: 0,
                            right: 0,
                          }}
                        >
                          <SvgLocation />
                          <Text style={{ ...styles.text, marginLeft: 8 }}>
                            {item.location}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ImageBackgroundMountain>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 200,
  },

  header: {
    marginTop: 92,
    marginBottom: 33,
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    color: "#212121",
    letterSpacing: 0.01,
  },
  main: {
    overflow: "scroll",
  },
  galletyItem: {
    marginHorizontal: 16,
    marginTop: 40,
  },
  image: {
    height: 240,
    borderRadius: 8,
  },
  photoName: {
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
    fontWeight: "19",
  },
  text: {
    fontSize: 16,
    fontWeight: "19",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
