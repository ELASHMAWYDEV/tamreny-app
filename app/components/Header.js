// @ts-nocheck
import React, { useState, useEffect } from "react";
import { TouchableNativeFeedback, Image } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-ionicons";
import { StatusBar } from "react-native";
import { ChangeColor } from "../components/index";
import { useThemeContext } from "../helpers/AppProvider";
import PowerFace from "../assets/img/power-face.png";

const Header = ({ title = "Header", navigation, backBtnEnabled = false }) => {
  const [changeColorVisible, setChangeColorVisible] = useState(false);
  const [primaryFace, setPrimaryFace] = useState(
    Image.resolveAssetSource(PowerFace).uri
  );

  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  useEffect(() => {
    getFaceImage();
  }, []);

  const getFaceImage = async () => {
    try {
      let imageUri = await AsyncStorage.getItem("@primary_face");
      if (imageUri) {
        setPrimaryFace(JSON.parse(imageUri));
      }
    } catch (e) {
      alert(e.message);
    }
  };

  /******************************************************/

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

  const FaceContainer = styled.View`
    width: 45px;
    height: 45px;
    border-radius: 15px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    overflow: hidden;
    elevation: 7;
  `;

  const FaceImage = styled.Image`
    width: 40px;
    height: 40px;
    resize-mode: contain;
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
    max-width: 50%;
    text-align: center;
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

  /******************************************************/

  return (
    <>
      <ChangeColor
        visible={changeColorVisible}
        onClose={() => {
          setChangeColorVisible(false);
          getFaceImage();
        }}
      />
      <Container>
        <TouchableNativeFeedback
          onPress={() => setChangeColorVisible(true)}
          useForeground
        >
          <FaceContainer>
            <FaceImage source={{ uri: primaryFace.toString() }} />
          </FaceContainer>
          {/* <ShareContainer>
            <ShareIcon name="share" />
          </ShareContainer> */}
        </TouchableNativeFeedback>
        <Title numberOfLines={1}>{title}</Title>
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
    </>
  );
};

export default Header;
