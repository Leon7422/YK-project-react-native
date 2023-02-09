import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const initialState = {
  email: "",
  password: "",
  nick: "",
};

const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loginData, setLoginData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [borderInputColorEmail, setBorderInputColorEmail] = useState("#E8E8E8");
  const [borderInputColorPassword, setBorderInputColorPassword] =
    useState("#E8E8E8");
  const [borderInputColorNick, setBorderInputColorNick] = useState("#E8E8E8");
  return (
    <View style={{ ...styles.container, height: isShowKeyboard ? 360 : 549 }}>
      <View
        style={[
          styles.avatarPlace,
          {
            transform: [{ translateX: -60 }],
          },
        ]}
      >
        <View style={styles.svgWrapper}>
          <TouchableOpacity style={styles.svg}>
            <Svg
              width={25}
              height={25}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
                fill="#FF6C00"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.header}>Регистрация</Text>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View>
              <TextInput
                onFocus={() => {
                  setBorderInputColorNick("#FF6C00");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setBorderInputColorNick("#E8E8E8");
                  setIsShowKeyboard(false);
                }}
                style={{
                  ...styles.input,
                  borderColor: borderInputColorNick,
                }}
                placeholder={"Логин"}
                value={loginData.nick}
                onChangeText={(value) => {
                  setLoginData((prState) => ({ ...prState, nick: value }));
                }}
              />
            </View>

            <View style={{ marginTop: 16 }}>
              <TextInput
                onFocus={() => {
                  setBorderInputColorEmail("#FF6C00");
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setBorderInputColorEmail("#E8E8E8");
                  setIsShowKeyboard(false);
                }}
                style={{
                  ...styles.input,
                  borderColor: borderInputColorEmail,
                }}
                placeholder={"Адрес электронной почты"}
                value={loginData.email}
                onChangeText={(value) => {
                  setLoginData((prState) => ({ ...prState, email: value }));
                }}
              />
            </View>

            <View style={{ marginTop: 16, position: "relative" }}>
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
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity
                style={styles.showPassBtn}
                onPress={() => {
                  setHidePassword((prev) => !prev);
                }}
              >
                <Text style={styles.showPassTitle}>Показать</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        {isShowKeyboard ? (
          ""
        ) : (
          <>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log(loginData);
                setLoginData(initialState);
              }}
            >
              <Text style={styles.btnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.regNav}>Уже есть аккаунт? Войти</Text>
            </View>
          </>
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
    position: "relative",
  },
  avatarPlace: {
    width: 120,
    height: 120,
    backgroundColor: "red",
    position: "absolute",
    top: -60,
    left: "50%",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  svgWrapper: {
    position: "absolute",
    right: -13,
    bottom: 14,
  },
  svg: {
    borderRadius: "50%",
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    color: "#212121",
    letterSpacing: 0.01,
    marginTop: 92,
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
  showPassBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showPassTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
  regNav: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textDecorationLine: "underline",
    marginTop: 16,
  },
});

export default RegisterForm;
