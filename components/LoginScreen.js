import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Войти</Text>
      <View style={styles.form}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 375,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    color: "#212121",
    letterSpacing: 0.01,
    marginTop: 32,
  },
});

export default LoginForm;
