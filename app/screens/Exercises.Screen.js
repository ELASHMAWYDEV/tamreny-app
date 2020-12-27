import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../settings/Config";
import { Header } from "../components/index";
import Colors from "../settings/Colors";
import { ImageExerciseCard, SearchBtn } from "../components/index";

const ImageExercises = (props) => {
  //Get params
  let { categoryId, name, type } = props.route.params || {};

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = async () => {
    try {
      let response = await axios.post(`${API_URL}/exercises/get`, {
        categoryId,
        type,
      });
      let data = await response.data;

      if (data.status) {
        setExercises(data.exercises);
      } else {
        alert(data.errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header {...props} title={name} backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            {exercises.map(({ _id, images, title, description }, i) => (
              <ImageExerciseCard
                key={i}
                {...props}
                _id={_id}
                categoryId={categoryId}
                images={images}
                title={title}
                description={description}
              />
            ))}
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

export default ImageExercises;
