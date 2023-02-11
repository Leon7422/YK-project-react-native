import { StyleSheet, Text, View } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>POSTSCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostScreen;
