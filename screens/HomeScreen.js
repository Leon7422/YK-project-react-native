import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";
import userBackEnd from "../helpers/userBackEnd";

const HomeScreen = ({ setIsAuth }) => {
  const windowWidth = Dimensions.get("window").width;
  const { SvgExit, SvgLike, SvgComment, SvgLocation } = images;
  const navigation = useNavigation();
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
          <View style={styles.userContainer}>
            <View style={{ marginRight: 8 }}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
                }}
                style={styles.userAvatar}
              />
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
      data={userBackEnd}
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
                onPress={() => navigation.navigate("CommentNav")}
                style={{ flexDirection: "row" }}
              >
                <SvgComment />
                <Text style={styles.text}>{item.commnets.length}</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginLeft: 30 }}>
                <SvgLike />
                <Text style={styles.text}>{item.likesQuantity}</Text>
              </View>
              <View style={styles.locationWrapper}>
                <SvgLocation />
                <Text style={{ ...styles.text, marginLeft: 3 }}>
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
  // HEADER
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

  userContainer: {
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
    marginBottom: 32,
    alignItems: "center",
  },

  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },

  // MAIN (PHOTO LIST)

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

export default HomeScreen;
