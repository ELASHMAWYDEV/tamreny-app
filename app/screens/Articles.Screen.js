import React from "react";
import { View, Text } from "react-native";
import { Header } from "../components/index";

const Articles = (props) => {
  return (
    <>
      <Header  {...props} backBtnEnabled title="المقالات"/>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Articles</Text>
      </View>
    </>
  );
};

export default Articles;
