import React from "react";
import { View, Text } from "react-native";
import { Header } from "../components/index";

const Food = (props) => {
  return (
    <>
      <Header {...props}/>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Food</Text>
      </View>
    </>
  );
};

export default Food;
