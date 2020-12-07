import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components";
import Colors from "../settings/Colors";
import ShareBtn from "./ShareBtn";
import LikeBtn from "./LikeBtn";

const ArticleCard = ({ navigation }) => {
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() => navigation.navigate("Article")}
    >
      <Container>
        <LikeBtn style={LikeBtnStyle} />
        <ShareBtn style={ShareBtnStyle} />
        <ArticleImage source={require("../assets/img/article-image.png")} />
        <Title numberOfLines={1}>
          هنا يوضع عنوان المقالة ، ويعتبر هذا النص هو عنوان المدونة التي سيتم
          نشرها
        </Title>
        <Description numberOfLines={2}>
          هنا يوضع نص يعبر عن بداية المقال ، حيث يتم أخذ أول جزء من المقال و
          وضعه هنا ، وهذا النص ليس له أي صلة بالنص الأصلي وانما هو نص مماثل لما
          يمكن فعله
        </Description>
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
