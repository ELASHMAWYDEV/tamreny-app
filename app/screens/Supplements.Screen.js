import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../settings/Config";
import { SupplementCard, SearchBtn, Header } from "../components";
import { useThemeContext } from "../helpers/AppProvider";

const Supplements = (props) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const [supplements, setSupplements] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getsupplements();
  }, []);

  const getsupplements = async () => {
    try {
      let response = await axios.post(`${API_URL}/articles/get`);
      let data = await response.data;

      if (data.status) {
        setSupplements(data.articles);
      } else {
        alert(data.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /******************************************************/

  /******************************************************/

  return (
    <>
      <Header {...props} title="المكملات الغذائية" backBtnEnabled />
      <MainContainer bgColor={Colors.white}>
        <SearchBtn
          style={{ position: "absolute", bottom: 15, left: 18, zIndex: 6 }}
          onSearch={setSearchQuery}
        />
        <ScrollContainer bgColor={Colors.white}>
          <Container bgColor={Colors.white}>
            {supplements.filter(
              (supplement) =>
                supplement.title.includes(searchQuery) ||
                supplement.content.includes(searchQuery)
            ).length != 0 ? (
              supplements
                .filter(
                  (supplement) =>
                    supplement.title.includes(searchQuery) ||
                    supplement.content.includes(searchQuery)
                )
                .map(({ title, content, mainImage, _id }) => (
                  <SupplementCard
                    key={_id}
                    {...props}
                    _id={_id}
                    title={title}
                    content={content}
                    mainImage={mainImage}
                  />
                ))
            ) : (
              <NormalText color={Colors.darkGray}>
                لا يوجد مكملات غذائية
              </NormalText>
            )}
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

const NormalText = styled.Text`
  font-family: Cairo-Regular;
  font-size: 20px;
  margin-top: 10px;
  color: ${(props) => props.color};
  text-align: center;
`;

export default Supplements;
