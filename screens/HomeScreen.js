import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import images from "../components/SVG";

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

const HomeScreen = ({ setIsAuth }) => {
  const windowHeight = Dimensions.get("window").height;
  const galleryHeight = windowHeight - 88;
  const windowWidth = Dimensions.get("window").width;
  const { SvgExit, SvgLike, SvgComment, SvgLocation } = images;
  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Публікації</Text>
            <TouchableOpacity
              onPress={() => setIsAuth(false)}
              style={styles.svgExit}
            >
              <SvgExit />
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.gallery }}></View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 32,
              marginLeft: 16,
              marginBottom: 32,
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 8 }}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 16,
                }}
              ></Image>
            </View>
            <View>
              <Text style={{ fontSize: 13, lineHeight: 15, fontWeight: "700" }}>
                Natali Romanova
              </Text>
              <Text style={{ fontSize: 11, lineHeight: 13, fontWeight: "400" }}>
                email@example.com
              </Text>
            </View>
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
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  svgExit: {
    position: "absolute",
    right: 10,
    top: 55,
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

export default HomeScreen;
