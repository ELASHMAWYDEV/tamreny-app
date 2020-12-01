import React from "react";
import { Header } from "../components/index";
import styled from "styled-components";
import Colors from "../settings/Colors";


const Article = (props) => {
  return (
    <>
    <Header {...props} title="المقالة" backBtnEnabled/>
    <ScrollContainer>
      <Container>
      </Container>
    </ScrollContainer>
  </>
  );
};


const ScrollContainer = styled.ScrollView`
  background-color: ${Colors.white};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  padding: 40px 15px;
`;


export default Article;
