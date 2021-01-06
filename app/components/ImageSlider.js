// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import { useThemeContext } from "../helpers/AppProvider";

const ImageSlider = ({ width, height }) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const sliderRef = useRef();

  useEffect(() => {
    console.log(sliderRef.current.parentElement);
  });

  let images = [
    "http://localhost:5000/images/image-exercises/e793fb55-9f13-4e47-8c61-578c3e16ec42.jpg",
    "http://localhost:5000/images/image-exercises/7878baf4-5a9f-4d6d-8e26-9a64e8cf252b.jpg",
    require("../assets/img/article-image.png"),
    "http://localhost:5000/images/image-exercises/acd78ab6-cbd8-4ff9-92a8-6b258df1de81.png",
  ];

  /******************************************************/
  const Container = styled.View`
    width: ${(props) => props.width || "300px"};
    height: ${(props) => props.height || "200px"};
  `;

  const Slider = styled.ScrollView`
    background-color: ${Colors.lightGray};
  `;

  const ImageComponent = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
  `;
  /******************************************************/
  return (
    <Container height={height} width={width}>
      <Slider
        ref={sliderRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* {images.map((image, i) => (
          <ImageComponent
            key={i}
            source={typeof image === "string" ? { uri: image } : image}
          />
        ))} */}
        <Image
          source={require("../assets/img/article-image.png")}
          style={{ width: "100%", height: 100 }}
        />
      </Slider>
    </Container>
  );
};

export default ImageSlider;
