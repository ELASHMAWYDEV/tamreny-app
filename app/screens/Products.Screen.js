// @ts-nocheck
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_URL } from "../settings/Config";
import { Header } from "../components/index";
import { ProductCard, SearchBtn } from "../components/index";
import { useThemeContext, useAppContext } from "../helpers/AppProvider";

const Products = (props) => {
  const Theme = useThemeContext();
  let Colors = Theme.Colors;

  const { setIsLoading } = useAppContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      let response = await axios.post(`${API_URL}/articles/get`);
      let data = await response.data;

      if (data.status) {
        setProducts(data.articles);
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
      <Header {...props} title="متجر المنتجات" backBtnEnabled />
      <MainContainer>
        <SearchBtn style={SearchBtnStyle} />
        <ScrollContainer>
          <Container>
            {products.length != 0 &&
              products.map((product, i) => (
                <ProductCard key={i} {...props} product={product} />
              ))}
          </Container>
        </ScrollContainer>
      </MainContainer>
    </>
  );
};

export default Products;
