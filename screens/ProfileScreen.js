import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as React from "react";
import UploadAvatarImage from "../components/UploadAvatarImage";
import ImageBackgroundMountain from "../components/ImageBackgroundMountain";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";
import backEnd from "../helpers/backEnd";

const ProfileScreen = ({ setIsAuth }) => {
  const { SvgLike, SvgComment, SvgLocation, SvgExit } = images;
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  console.log(navigation);
  return (
    <ImageBackgroundMountain>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                ...styles.container,
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
            </View>
          }
          data={backEnd}
          renderItem={({ item }) => (
            <View style={{ width: windowWidth, backgroundColor: "#FFFFFF" }}>
              <View style={{ ...styles.galletyItem }}>
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
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() => navigation.navigate("CommentNav")}
                  >
                    <SvgComment />
                    <Text style={{ ...styles.text, marginLeft: 5 }}>
                      {item.commnets.length}
                    </Text>
                  </TouchableOpacity>
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
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ImageBackgroundMountain>
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
    marginBottom: 40,
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
