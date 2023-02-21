import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";
import images from "../components/SVG";
import { useNavigation } from "@react-navigation/native";
import commentBackEnd from "../helpers/commentBackEnd";
import { useState } from "react";

const CommentScreen = () => {
  const [comment, setComment] = useState("");
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const { SvgArrowBack, SvgArrowUp } = images;

  return (
    <SafeAreaView>
      <FlatList
        style={{ minHeight: "100%", backgroundColor: "#FFFFFF" }}
        ListHeaderComponent={
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Коментарі</Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.svgBack}
              >
                <SvgArrowBack />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={{ uri: commentBackEnd.photoURL }}
                style={styles.image}
              />
            </View>
          </View>
        }
        data={commentBackEnd.comments}
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
                    ...styles.commentWrapper,
                    width: windowWidth - 32 - 15 - 30,
                  }}
                >
                  <Text style={{ fontSize: 13, lineHeight: 19 }}>
                    {item.comment}
                  </Text>

                  <Text
                    style={{
                      ...styles.timeStamp,
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
      <View style={styles.footerContainer}>
        <TextInput
          value={comment}
          onChangeText={(text) => setComment(text)}
          placeholderTextColor={"#BDBDBD"}
          placeholder="Коментувати..."
          style={styles.footerInput}
        />
        <TouchableOpacity
          onPress={() => {
            console.log(comment);
            setComment("");
          }}
          style={styles.footerSubmitButton}
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

  commentWrapper: {
    backgroundColor: "#f7f7f7",
    padding: 16,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  timeStamp: {
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    marginTop: 8,
  },

  containerListFooter: {
    height: 70,
    backgroundColor: "#FFFFFF",
  },

  // ======= Footer =======

  footerContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  footerInput: {
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
  },
  footerSubmitButton: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    position: "absolute",
    right: 25,
    top: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default CommentScreen;
