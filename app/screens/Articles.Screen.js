// @ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../settings/Config";
import { Header } from "../components/index";
import { ArticleCard, SearchBtn } from "../components/index";
import { useThemeContext } from "../helpers/AppProvider";

const Articles = (props) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      let response = await axios.post(`${API_URL}/articles/get`);
      let data = await response.data;

      if (data.status) {
        setArticles(data.articles);
      } else {
        alert(data.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /******************************************************/
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

  /******************************************************/

  return (
    <>
      <Header {...props} title="المقالات" backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            {articles.length != 0 &&
              articles.map(({ title, content, mainImage, _id }) => (
                <ArticleCard
                  key={_id}
                  {...props}
                  _id={_id}
                  title={title}
                  content={content}
                  mainImage={mainImage}
                />
              ))}
          </Container>
        </ScrollContainer>
      </MainContainer>
    </>
  );
};

export default Articles;
