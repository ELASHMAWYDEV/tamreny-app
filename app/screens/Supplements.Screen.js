// @ts-nocheck
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
      <Header {...props} title="المكملات الغذائية" backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            {supplements.length != 0 &&
              supplements.map(({ title, content, mainImage, _id }) => (
                <SupplementCard
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

export default Supplements;
