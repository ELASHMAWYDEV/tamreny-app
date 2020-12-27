import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import ShareBtn from "./ShareBtn";
import LikeBtn from "./LikeBtn";

const ArticleCard = ({ navigation, title, content, mainImage, _id }) => {
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() =>
        navigation.navigate("Article", {
          _id,
        })
      }
    >
      <Container>
        <LikeBtn style={LikeBtnStyle} />
        <ShareBtn style={ShareBtnStyle} />
        <ArticleImage source={{ uri: mainImage }} />
        <Title numberOfLines={1}>{title}</Title>
        <Description numberOfLines={2}>{content}</Description>
      </Container>
    </TouchableNativeFeedback>
  );
};

const Container = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background-color: ${Colors.white};
  elevation: 10;
  margin-bottom: 15px;
  border: 1px solid ${Colors.black + "11"};
  overflow: hidden;
`;

const ArticleImage = styled.Image`
  width: 102%;
  height: 60%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Cairo-SemiBold;
  line-height: 24px;
  margin: 14px 12px 5px 30px;
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 22px;
  font-family: ArabicUI;
  margin: 0px 12px 5px 30px;
  color: ${Colors.darkGray};
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

export default ArticleCard;
