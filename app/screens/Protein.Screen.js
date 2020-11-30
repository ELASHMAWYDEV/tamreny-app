import React from "react";
import { View, Text } from "react-native";
import { Header } from "../components/index";

const Protein = (props) => {
  return (
    <>
      <Header  {...props}/>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Protein</Text>
      </View>
    </>
  );
};

export default Protein;
