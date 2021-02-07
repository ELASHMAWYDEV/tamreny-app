// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  TouchableNativeFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import styled from "styled-components";
import Icon from "react-native-ionicons";
import { useThemeContext } from "../helpers/AppProvider";

const SearchBtn = ({ style = styled.View`` }) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pressAnim = useRef(new Animated.Value(-400)).current;

  /******************************************************/
  const Container = styled(style)`
    width: 100%;
    height: 80px;
    overflow: hidden;
  `;

  const styles = StyleSheet.create({
    TextInputStyle: {
      width: "95%",
      height: 42,
      backgroundColor: Colors.white,
      elevation: 2,
      borderWidth: 1,
      borderColor: Colors.black + "11",
      borderRadius: 20,
      fontFamily: "ArabicUI",
      paddingRight: 22,
      paddingLeft: 22,
      paddingLeft: 30,
      textAlign: "right",
      position: "absolute",
      zIndex: 1,
    },
  });

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

  const SearchBoxContainerStyle = styled.View`
    width: 90%;
    height: 45px;
    overflow: hidden;
    left: 15px;
    top: 15px;
  `;

  const SearchText = styled.Text`
    font-family: Cairo-Bold;
    font-size: 16px;
    text-align: center;
    color: ${Colors.white};
  `;

  /******************************************************/
  const SearchBoxContainer = Animated.createAnimatedComponent(
    SearchBoxContainerStyle
  );

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
          {active && searchQuery ? (
            <SearchText>ابحث</SearchText>
          ) : (
            <>
              <BtnIcon name={active ? "ios-close" : "search"} />
            </>
          )}
        </SearchButton>
      </TouchableNativeFeedback>
      <SearchBoxContainer style={{ left: 0 }}>
        <TextInput
          style={styles.TextInputStyle}
          placeholder="بحث..."
          value={searchQuery}
          onChangeText={(value) => {
            setSearchQuery(value);
          }}
        />
      </SearchBoxContainer>
    </Container>
  );
};

export default SearchBtn;
