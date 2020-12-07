import React from "react";
import styled from "styled-components";
import { Header } from "../components/index";
import Colors from "../settings/Colors";
import { GymCard, SearchBtn } from "../components/index";

const Gyms = (props) => {
  return (
    <>
      <Header {...props} title="الصالات الرياضية" backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            <GymCard {...props} />
            <GymCard {...props} />
            <GymCard {...props} />
            <GymCard {...props} />
            <GymCard {...props} />
            <GymCard {...props} />
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

export default Gyms;
