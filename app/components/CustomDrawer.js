import React, { useEffect } from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-ionicons";
import Colors from "../settings/Colors";
import pkg from "../../app.json";

const CustomDrawer = (props = { navigation }) => {
  const screens = [
    {
      name: "Home",
      title: "الرئيسية",
      icon: "ios-home",
      active: true,
    },
    {
      name: "Home",
      title: "محادثاتي",
      icon: "ios-chatbubbles",
      active: false,
    },
    {
      name: "Home",
      title: "الاعدادات",
      icon: "settings",
      active: false,
    },
    {
      name: "Home",
      title: "عن التطبيق",
      icon: "ios-help-circle",
      active: false,
    },
    {
      name: "Home",
      title: "تواصل معنا",
      icon: "ios-mail",
      active: false,
    },
    {
      name: "Home",
      title: "تقييم التطبيق",
      icon: "ios-star",
      active: false,
    },
    {
      name: "Home",
      title: "تسجيل الخروج",
      icon: "ios-log-out",
      active: false,
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <LogoContainer>
        <LogoImage source={require("../assets/img/logo.png")} />
      </LogoContainer>
      <BtnsContainer>
        {screens.map((screen, i) => (
          <TouchableNativeFeedback
            key={i}
            onPress={() => props.navigation.navigate(screen.name)}
            useForeground
          >
            <DrawerBtn active={screen.active}>
              <BtnIcon name={screen.icon} active={screen.active} />
              <BtnTitle active={screen.active}>{screen.title}</BtnTitle>
            </DrawerBtn>
          </TouchableNativeFeedback>
        ))}
      </BtnsContainer>
      <FooterContainer>
        <FooterText>Version {pkg.expo.version}</FooterText>
        <FooterText>Copyright © {new Date().getFullYear()} Tamreny</FooterText>
      </FooterContainer>
    </DrawerContentScrollView>
  );
};

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const LogoImage = styled.Image`
  width: 190px;
  height: 190px;
  border-radius: ${250 / 2}px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
`;

const BtnsContainer = styled.View`
  margin-top: 50px;
`;

const DrawerBtn = styled.View`
  width: 90%;
  overflow: hidden;
  background-color: ${Colors.white};
  flex-direction: row-reverse;
  align-items: center;
  align-self: center;
  padding: 10px 15px;
  border-radius: 12px;
  margin-bottom: 5px;
  background-color: ${(props) => (props.active ? Colors.black : Colors.white)};
`;

const BtnTitle = styled.Text`
  font-size: 18px;
  font-family: Cairo-SemiBold;
  color: ${(props) => (props.active ? Colors.white : Colors.black)};
  margin-right: 15px;
`;

const BtnIcon = styled(Icon)`
  color: ${(props) => (props.active ? Colors.white : Colors.black)};
  font-size: 30px;
`;

const FooterContainer = styled.View`
  margin-top: 40px;
`;

const FooterText = styled.Text`
  font-size: 14px;
  font-family: Cairo-Regular;
  text-align: center;
  color: ${Colors.darkGray};
`;

export default CustomDrawer;
