import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [borderInputColorEmail, setBorderInputColorEmail] = useState("#E8E8E8");
  const [borderInputColorPassword, setBorderInputColorPassword] =
    useState("#E8E8E8");
  return (
    <View style={{ ...styles.container, height: isShowKeyboard ? 250 : 489 }}>
      <Text style={styles.header}>Войти</Text>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View>
              <TextInput
                onFocus={() => {
                  setBorderInputColorEmail("#FF6C00");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setBorderInputColorEmail("#E8E8E8");
                  setIsShowKeyboard(false);
                }}
                style={{ ...styles.input, borderColor: borderInputColorEmail }}
                placeholder={"Адрес электронной почты"}
                value={loginData.email}
                onChangeText={(value) => {
                  setLoginData((prState) => ({ ...prState, email: value }));
                }}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                onFocus={() => {
                  setBorderInputColorPassword("#FF6C00");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setBorderInputColorPassword("#E8E8E8");
                  setIsShowKeyboard(false);
                }}
                style={{
                  ...styles.input,
                  borderColor: borderInputColorPassword,
                }}
                placeholder={"Пароль"}
                value={loginData.password}
                onChangeText={(value) => {
                  setLoginData((prState) => ({ ...prState, password: value }));
                }}
                secureTextEntry={true}
              />
            </View>
          </View>
        </KeyboardAvoidingView>

        {isShowKeyboard ? (
          ""
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log(loginData);
              setLoginData(initialState);
            }}
          >
            <Text style={styles.btnText}>Войти</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 33,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    color: "#000",
    backgroundColor: "#F6F6F6",
  },
  btn: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { fontSize: 16, lineHeight: 19, color: "#FFFFFF" },
});

export default LoginForm;
