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
import authOperations from "../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import postOperation from "../redux/posts/postsOperation";
import postsSelectors from "../redux/posts/postsSelectors";
import authSelectors from "../redux/auth/authSelectors";
import { useEffect, useState } from "react";
import userOperations from "../redux/user/userOperation";

const ProfileScreen = () => {
  const { nickName, userAvatar } = useSelector(authSelectors.getUser);
  const [image, setImage] = useState(userAvatar);
  const { SvgLike, SvgComment, SvgLocation, SvgExit, SvgCommentEmpty } = images;
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const dispatch = useDispatch();

  const posts = useSelector(postsSelectors.getOwnPosts)
    .slice()
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

  useEffect(() => {
    dispatch(postOperation.getOwnPosts());
  }, []);

  useEffect(() => {
    if (image !== userAvatar && image !== null) {
      dispatch(userOperations.updateUserAvatar(image));
    }
  }, [dispatch, userOperations, image]);

  const logOut = () => {
    dispatch(authOperations.authLogout());
  };
  console.log(image);
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
              <UploadAvatarImage image={image} setImage={setImage} />

              <View style={styles.header}>
                <Text style={styles.headerText}>{nickName}</Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 18,
                    bottom: 0,
                  }}
                  onPress={logOut}
                >
                  <SvgExit />
                </TouchableOpacity>
              </View>
            </View>
          }
          data={posts}
          renderItem={({ item }) => (
            <View style={{ width: windowWidth, backgroundColor: "#FFFFFF" }}>
              <View style={styles.galletyItem}>
                <View>
                  <Image source={{ uri: item.photoURL }} style={styles.image} />
                </View>
                <Text style={styles.photoName}>{item.photoAlt}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("CommentNav", {
                        postId: item.id,
                        postPhoto: item.photoURL,
                      })
                    }
                    style={{ flexDirection: "row" }}
                  >
                    {item.countComments > 0 ? (
                      <SvgComment />
                    ) : (
                      <SvgCommentEmpty />
                    )}
                    <Text style={styles.text}>{item.countComments}</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: "row", marginLeft: 30 }}>
                    <SvgLike />
                    <Text style={styles.text}>{item.likes.length}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("MapsNav", {
                        location: item.locationCoords,
                      })
                    }
                    style={styles.locationWrapper}
                  >
                    <SvgLocation />
                    <Text style={{ ...styles.text, marginLeft: 3 }}>
                      {item.location}
                    </Text>
                  </TouchableOpacity>
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
    marginLeft: 5,
  },
  locationWrapper: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default ProfileScreen;
