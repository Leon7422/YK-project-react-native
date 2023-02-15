import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Dimensions } from "react-native";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";
import { useKeyboard } from "../helpers/useKeyboard";

import { useState } from "react";

const backEnd = {
  photoURL:
    "https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg",
  commnets: [
    {
      id: 1,
      author: "Random Guy",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      timeStamp: "2094-09-02 10:32:18",
      ownerAvatar:
        "https://cdn.pixabay.com/photo/2017/08/01/12/14/man-2564902_960_720.jpg",
    },
    {
      id: 2,
      author: "Natali Romanova",
      comment:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      timeStamp: "1994-10-04 00:46:30",
      ownerAvatar:
        "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
    },
    {
      id: 3,
      author: "Random Guy",
      comment:
        "Ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      timeStamp: "2040-10-15 18:44:35",
      ownerAvatar:
        "https://cdn.pixabay.com/photo/2017/08/01/12/14/man-2564902_960_720.jpg",
    },
    {
      id: 4,
      author: "Natali Romanova",
      comment:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      timeStamp: "1979-10-21 13:23:53",
      ownerAvatar:
        "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
    },
  ],
  likesQuantity: 182,
  location: "Ukraine",
};
const CommentScreen = ({ setIsAuth }) => {
  const [comment, setComment] = useState("");
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const { SvgArrowBack, SvgArrowUp } = images;

  return (
    <SafeAreaView>
      <FlatList
        style={{ minHeight: "100%", backgroundColor: "#FFFFFF" }}
        ListHeaderComponent={
          <View style={{ ...styles.container }}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Коментарі</Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.svgBack}
              >
                <SvgArrowBack />
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.gallery }}></View>
            <View>
              <Image source={{ uri: backEnd.photoURL }} style={styles.image} />
            </View>
          </View>
        }
        data={backEnd.commnets}
        renderItem={({ item }) => {
          const ownerCheck = item.author === "Natali Romanova";
          return (
            <View style={{ backgroundColor: "#FFFFFF", paddingBottom: 24 }}>
              <View
                style={{
                  flexDirection: ownerCheck ? "row-reverse" : "row",
                  marginHorizontal: 16,
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.ownerAvatar }}
                    style={{
                      ...styles.authorAvatar,
                      marginLeft: ownerCheck ? 15 : 0,
                      marginRight: ownerCheck ? 0 : 15,
                    }}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#f7f7f7",
                    padding: 16,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 6,
                    width: windowWidth - 32 - 15 - 30,
                  }}
                >
                  <Text style={{ fontSize: 13, lineHeight: 19 }}>
                    {item.comment}
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      lineHeight: 12,
                      color: "#BDBDBD",
                      marginTop: 8,
                      marginLeft: ownerCheck ? 0 : "auto",
                    }}
                  >
                    {item.timeStamp}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        ListFooterComponent={<View style={styles.containerListFooter}></View>}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 16,
          backgroundColor: "#FFFFFF",
        }}
      >
        <TextInput
          value={comment}
          onChangeText={(text) => setComment(text)}
          placeholderTextColor={"#BDBDBD"}
          placeholderTextFontSize={50}
          placeholder="Коментувати..."
          style={{
            position: "relative",
            width: "100%",
            height: 50,
            padding: 16,
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 19,
            backgroundColor: "#F6F6F6",
            color: "#212121",
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log(comment);
            setComment("");
          }}
          style={{
            width: 34,
            height: 34,
            backgroundColor: "#FF6C00",
            position: "absolute",
            right: 25,
            top: "50%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <SvgArrowUp />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 32,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#FFFFFF",
    shadowOffset: 0.5,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
    position: "relative",
  },
  headerTitle: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 55,
    lineHeight: 22,
    fontWeight: "500",
    letterSpacing: -0.408,
  },
  svgBack: {
    position: "absolute",
    bottom: 8,
    left: 16,
  },
  image: {
    marginTop: 32,
    height: 240,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  authorAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  containerListFooter: {
    height: 70,
    backgroundColor: "#FFFFFF",
  },
});

export default CommentScreen;
