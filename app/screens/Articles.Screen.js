import React from "react";
import styled from "styled-components";
import { Header } from "../components/index";
import Colors from "../settings/Colors";
import { ArticleCard, SearchBtn } from "../components/index";

const Articles = (props) => {
  return (
    <>
      <Header {...props} title="المقالات" backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            <ArticleCard {...props} />
            <ArticleCard {...props} />
            <ArticleCard {...props} />
            <ArticleCard {...props} />
            <ArticleCard {...props} />
            <ArticleCard {...props} />
          </Container>
        </ScrollContainer>
      </MainContainer>
    </>
  );
};

const ScrollContainer = styled.ScrollView`
  background-color: ${Colors.white};
  min-height: 100%;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  padding: 20px 15px;
`;

const SearchBtnStyle = styled.View`
  position: absolute;
  bottom: 15px;
  left: 18px;
  z-index: 6;
`;

export default Articles;
