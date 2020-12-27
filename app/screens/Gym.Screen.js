import React from "react";
import styled from "styled-components";
import { SliderBox } from "react-native-image-slider-box";
import Colors from "../settings/Colors";
import { Header, ReactBtn } from "../components/index";

const Gym = (props) => {
  return (
    <>
      <Header {...props} title="قاعة بغداد" backBtnEnabled />
      <ReactBtn />
      <ScrollContainer>
        <MainContainer>
          <Container>
            <Title>قاعة بغداد</Title>
            <SliderContainer>
              <SliderBox
                images={[
                  require("../assets/img/article-image.png"),
                  require("../assets/img/article-image.png"),
                  require("../assets/img/article-image.png"),
                  require("../assets/img/article-image.png"),
                ]}
                disableOnPress
                dotColor={Colors.primary}
                inactiveDotColor={Colors.white}
                circleLoop
                imageLoadingColor={Colors.primary}
              />
            </SliderContainer>
            <RowContainer
              style={{
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <SmallImage source={require("../assets/img/location.png")} />
              <NormalText numberOfLines={1}>بغداد</NormalText>
              <SmallImage
                source={require("../assets/img/distance.png")}
                style={{ height: 25, width: 25, marginRight: 20 }}
              />
              <NormalText numberOfLines={1}>1.2 كم</NormalText>
            </RowContainer>
            <Title style={{ textAlign: "right", marginBottom: 5 }}>
              نبذة مختصرة
            </Title>
            <Content>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد
            </Content>
            <Title style={{ textAlign: "right", marginBottom: 5 }}>
              نوع الاشتراك
            </Title>
            <RowContainer style={{ marginTop: 40, marginBottom: 5 }}>
              <BoldText>المدة</BoldText>
              <BoldText>السعر</BoldText>
            </RowContainer>
            <RowContainer>
              <RegularText>يومي</RegularText>
              <RegularText>كالوري</RegularText>
            </RowContainer>
            <RowContainer>
              <RegularText>اسبوعي</RegularText>
              <RegularText>غرام</RegularText>
            </RowContainer>
            <RowContainer>
              <RegularText>شهري</RegularText>
              <RegularText>غرام</RegularText>
            </RowContainer>
          </Container>
        </MainContainer>
      </ScrollContainer>
    </>
  );
};

const MainContainer = styled.View`
  flex: 1;
  padding: 10px 8px;
`;

const ScrollContainer = styled.ScrollView``;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  elevation: 10;
  border: 1px ${Colors.black + "11"};
  border-radius: 12px;
  padding: 18px 15px;
`;

const Title = styled.Text`
  font-family: Cairo-Bold;
  font-size: 20px;
  text-align: center;
  margin: 10px 0px 20px;
`;

const SliderContainer = styled.View`
  border-radius: 12px;
  elevation: 8;
  border: 1px ${Colors.black + "11"};
  overflow: hidden;
  width: 100%;
  height: 200px;
`;

const Content = styled.Text`
  font-size: 18px;
  font-family: ArabicUI;
  line-height: 34px;
`;

const RowContainer = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const SmallImage = styled.Image`
  width: 25px;
  height: 30px;
  opacity: 0.7;
  resize-mode: contain;
`;

const NormalText = styled.Text`
  font-size: 18px;
  line-height: 22px;
  font-family: ArabicUI;
  color: ${Colors.black};
  opacity: 0.9;
  margin-right: 8px;
`;

const BoldText = styled(Title)`
  font-size: 18px;
`;

const RegularText = styled(BoldText)`
  font-family: Cairo-SemiBold;
`;

export default Gym;
