import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import ShareBtn from "./ShareBtn";
import LikeBtn from "./LikeBtn";
import { SliderBox } from "react-native-image-slider-box";

const ImageExerciseCard = ({
  navigation,
  _id,
  images = [],
  title,
  description,
  categoryId,
}) => {
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() => navigation.navigate("Gym", { _id })}
    >
      <Container>
        <LikeBtn style={LikeBtnStyle} />
        <ShareBtn style={ShareBtnStyle} />
        <SliderContainer>
          <SliderBox
            images={images}
            disableOnPress
            sliderBoxHeight={170}
            dotColor={Colors.primary}
            inactiveDotColor={Colors.black + "89"}
            circleLoop
            imageLoadingColor={Colors.primary}
          />
        </SliderContainer>
        <Title numberOfLines={1}>{title}</Title>
        <Description numberOfLines={1}>{description}</Description>
      </Container>
    </TouchableNativeFeedback>
  );
};

const Container = styled.View`
  width: 100%;
  height: 230px;
  border-radius: 10px;
  background-color: ${Colors.white};
  elevation: 10;
  margin-bottom: 15px;
  border: 1px solid ${Colors.black + "11"};
  overflow: hidden;
`;

const SliderContainer = styled.View`
  width: 102%;
  height: 70%;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.black + "22"};
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Cairo-Bold;
  line-height: 30px;
  margin-top: 5px;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 14px;
  font-family: ArabicUI;
  margin: 0 10px;
  line-height: 26px;
  color: ${Colors.darkGray};
  text-align: center;
`;
const LikeBtnStyle = styled.View`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: 10px;
`;

const ShareBtnStyle = styled(LikeBtnStyle)`
  left: 10px;
`;

export default ImageExerciseCard;