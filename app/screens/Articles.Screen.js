import React from "react";
import styled from "styled-components";
import { Header } from "../components/index";
import Colors from "../settings/Colors";
import { ArticleCard } from "../components/index";

const Articles = (props) => {
  return (
    <>
      <Header {...props} title="المقالات" backBtnEnabled/>
      <ScrollContainer>
        <Container>
          <ArticleCard {...props}/>
          <ArticleCard {...props}/>
          <ArticleCard {...props}/>
          <ArticleCard {...props}/>
          <ArticleCard {...props}/>
          <ArticleCard {...props}/>
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

export default Articles;
