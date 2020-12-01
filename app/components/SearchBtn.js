import React, { useState } from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import Icon from "react-native-ionicons";

const Search = ({ style = styled.View`` }) => {
  const Container = styled(style)`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    border: 1px solid ${Colors.black + "11"};
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    elevation: 8;
    overflow: hidden;
  `;

  return (
    <TouchableNativeFeedback useForeground onPress={() => null}>
      <Container>
        <ShareIcon name="share" />
      </Container>
    </TouchableNativeFeedback>
  );
};

const ShareIcon = styled(Icon)`
  font-size: 32px;
  left: 1px;
  color: ${Colors.primary};
  transform: rotateY(-180deg);
`;

export default Search;
