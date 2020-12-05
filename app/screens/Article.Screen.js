import React from "react";
import { Header } from "../components/index";
import styled from "styled-components";
import Colors from "../settings/Colors";

const Article = (props) => {
  return (
    <>
      <Header
        {...props}
        title="هنا يوضع عنوان المقالة ، ويعتبر هذا النص عن العنوان"
        backBtnEnabled
      />
      <ScrollContainer>
        <MainContainer>
          <Container>
            <Title>هنا يوضع عنوان المقالة ، ويعتبر هذا النص عن العنوان</Title>
            <MainImageContainer>
              <MainImage source={require("../assets/img/article-image.png")} />
            </MainImageContainer>
            <Content>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون
              مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
              مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
            </Content>
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

const MainImage = styled.Image`
  height: 200px;
  width: 100%;
  resize-mode: cover;
`;

const MainImageContainer = styled.View`
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
  margin: 25px 0;
`;

export default Article;
