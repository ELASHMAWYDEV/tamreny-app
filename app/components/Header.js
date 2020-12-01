import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import Icon from "react-native-ionicons";
import { StatusBar } from "react-native";

const Header = ({ title = "Header", navigation, backBtnEnabled = false }) => {
  return (
    <Container>
      <TouchableNativeFeedback onPress={() => null} useForeground>
        <ShareContainer>
          <ShareIcon name="share" />
        </ShareContainer>
      </TouchableNativeFeedback>
      <Title>{title}</Title>
      {backBtnEnabled ? (
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          useForeground
        >
          <BackContainer>
            <BackIcon name="ios-arrow-back" />
          </BackContainer>
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          onPress={() => navigation.openDrawer()}
          useForeground
        >
          <BarContainer>
            <BarLine width={100} />
            <BarLine width={65} />
            <BarLine width={80} />
          </BarContainer>
        </TouchableNativeFeedback>
      )}
    </Container>
  );
};

const Container = styled.View`
  elevation: 20;
  width: 100%;
  height: 95px;
  padding-top: ${StatusBar.currentHeight + 10}px;
  padding-bottom: 5px;
  background-color: ${Colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

const ShareContainer = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 15px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  overflow: hidden;
`;

const ShareIcon = styled(Icon)`
  color: white;
  font-size: 30px;
  transform: rotateY(-180deg);
`;

const BackIcon = styled(Icon)`
  color: white;
  font-size: 30px;
  transform: rotateY(-180deg);
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: Cairo-SemiBold;
  color: ${Colors.white};
  align-self: center;
`;

const BarContainer = styled.View`
  width: 50px;
  height: 45px;
  padding: 10px 6px;
  border-radius: 15px;
  overflow: hidden;
  align-self: center;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 15px;
`;

const BackContainer = styled(BarContainer)`
  justify-content: center;
  align-items: center;
`;

const BarLine = styled.View`
  width: ${(props) => props.width}%;
  height: 3.5px;
  background-color: ${Colors.white};
  border-radius: 10px;
`;

export default Header;
