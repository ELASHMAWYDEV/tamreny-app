// @ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../settings/Config";
import { Header } from "../components/index";
import { ArticleCard, SearchBtn } from "../components/index";
import { useThemeContext, useAppContext } from "../helpers/AppProvider";

const Articles = (props) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const { setIsLoading } = useAppContext();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      setIsLoading(true);
      let response = await axios.post(`${API_URL}/articles/get`);
      let data = await response.data;

      if (data.status) {
        setArticles(data.articles);
      } else {
        alert(data.errors);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  /******************************************************/

  return (
    <>
      <Header {...props} title="المقالات" backBtnEnabled />
      <MainContainer bgColor={Colors.white}>
        <SearchBtn
          style={{ position: "absolute", bottom: 15, left: 18, zIndex: 6 }}
        />
        <ScrollContainer bgColor={Colors.white}>
          <Container bgColor={Colors.white}>
            {articles.length != 0 &&
              articles.map((article, i) => (
                <ArticleCard key={i} {...props} article={article} />
              ))}
          </Container>
        </ScrollContainer>
      </MainContainer>
    </>
  );
};

const ScrollContainer = styled.ScrollView`
  background-color: ${(props) => props.bgColor};
  min-height: 100%;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.bgColor};
  padding: 20px 15px;
`;

export default Articles;
