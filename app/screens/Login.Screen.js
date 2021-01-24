// @ts-nocheck
import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import { useThemeContext, useAuthContext } from "../helpers/AppProvider";

const Login = ({ navigation }) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  /******************************************************/

  const Container = styled.ScrollView`
    padding: 15px;
    background-color: ${Colors.white};
  `;
  const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin: 30px 0px 80px;
    height: 200px;
  `;
  const Logo = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
  `;
  const Input = styled.TextInput`
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 14px;
    font-family: Cairo-Regular;
    padding: 8px 15px;
    margin-top: 8px;
    text-align: right;
    elevation: 5;
    background-color: ${Colors.white};
  `;
  const InputTitle = styled.Text`
    font-size: 18px;
    font-family: Cairo-SemiBold;
    margin-top: 20px;
  `;
  const Btn = styled.View`
    background-color: ${Colors.primary};
    width: 80%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 15px 0px;
    elevation: 6;
    align-self: center;
  `;
  const BtnText = styled.Text`
    font-family: Cairo-SemiBold;
    color: ${Colors.white};
    font-size: 20px;
  `;
  const NoticeText = styled.Text`
    font-family: Cairo-Regular;
    color: ${Colors.black};
    font-size: 16px;
    text-align: center;
    margin-top: 40px;
  `;
  /******************************************************/
  return (
    <Container>
      <LogoContainer>
        <Logo source={require("../assets/img/logo.png")} />
      </LogoContainer>
      <InputTitle>رقم الهاتف أو البريد الالكتروني</InputTitle>
      <Input placeholder="رقم الهاتف أو البريد الالكتروني" />
      <InputTitle>كلمة المرور</InputTitle>
      <Input placeholder="كلمة المرور" secureTextEntry />
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <Btn style={{ marginTop: 40 }}>
          <BtnText>تسجيل الدخول</BtnText>
        </Btn>
      </TouchableNativeFeedback>
      <NoticeText
        onPress={() => navigation.navigate("Home")}
        style={{
          marginBottom: 0,
          marginTop: 15,
          fontFamily: "Cairo-SemiBold",
          color: Colors.primary,
        }}
      >
        العودة الي الصفحة الرئيسية
      </NoticeText>
      <NoticeText>اذا لم يكن لديك حساب مسبقا</NoticeText>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("Register")}
        useForeground
      >
        <Btn style={{marginBottom: 50}}>
          <BtnText>حساب جديد</BtnText>
        </Btn>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default Login;
