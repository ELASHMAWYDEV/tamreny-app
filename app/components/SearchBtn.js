import React, { useState, useRef } from "react";
import { Animated, TouchableNativeFeedback, TextInput } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import Icon from "react-native-ionicons";

const SearchBtn = ({ style = styled.View`` }) => {
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pressAnim = useRef(new Animated.Value(-400)).current;

  const Container = styled(style)`
    width: 100%;
    height: 80px;
    overflow: hidden;
  `;

  const SearchBox = Animated.createAnimatedComponent(SearchBoxStyle);

  const pressBtn = () => {
    if (searchQuery.length == 0) {
      Animated.spring(pressAnim, {
        toValue: active ? -400 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setActive(!active);
    } else {
      
    }
  };

  return (
    <Container>
      <TouchableNativeFeedback onPress={pressBtn} useForeground>
        <SearchButton>
          {active && searchQuery.length != 0 ? (
            <SearchText>ابحث</SearchText>
          ) : (
            <>
              <BtnIcon name={active ? "ios-close" : "search"} />
            </>
          )}
        </SearchButton>
      </TouchableNativeFeedback>
      <SearchBoxContainer>
        <SearchBox
          placeholder="بحث..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ left: pressAnim }}
        />
      </SearchBoxContainer>
    </Container>
  );
};

const BtnIcon = styled(Icon)`
  font-size: 40px;
  color: ${Colors.white};
  transform: rotateY(-180deg);
`;

const SearchButton = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  border: 1px solid ${Colors.black + "11"};
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 2;
  overflow: hidden;
  z-index: 2;
  position: absolute;
`;

const SearchBoxContainer = styled.View`
  width: 90%;
  height: 45px;
  overflow: hidden;
  left: 15px;
  top: 15px;
`;

const SearchBoxStyle = styled(TextInput)`
  width: 95%;
  height: 42px;
  background-color: ${Colors.white};
  elevation: 2;
  border: 1px solid ${Colors.black + "11"};
  border-radius: 20px;
  font-family: ArabicUI;
  padding: 0 22px;
  padding-left: 30px;
  text-align: right;
  position: absolute;
  z-index: 1;
`;

const SearchText = styled.Text`
  font-family: Cairo-Bold;
  font-size: 16px;
  text-align: center;
  color: ${Colors.white};
`;

export default SearchBtn;
