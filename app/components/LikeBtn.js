import React, { useState, useRef } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import Icon from "react-native-ionicons";

const LikeBtn = ({ liked = false,  style = styled.View`` }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [pressAnim] = useState(new Animated.Value(0.9));

  const pressLike = () => {
    setIsLiked(!isLiked);
    Animated.sequence([
      Animated.timing(pressAnim, {
        toValue: isLiked ? 0.9 : 2,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(pressAnim, {
        toValue: isLiked ? 0.9 : 2.3,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(pressAnim, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const Container = styled(style)`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    border: 1px solid ${Colors.black + "1a"};
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    elevation: 8;
  `;

  return (
    <TouchableWithoutFeedback useForeground onPress={pressLike}>
      <Container>
        <LikeIcon
          name="heart"
          color={isLiked ? Colors.red : Colors.gray}
          style={{ transform: [{ scale: pressAnim }] }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const LikeIconStyled = styled(Icon)`
  font-size: 32px;
  top: 2px;
`;

const LikeIcon = Animated.createAnimatedComponent(LikeIconStyled);

export default LikeBtn;
