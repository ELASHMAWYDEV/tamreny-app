import React from "react";
import { Modal } from "react-native";
import { useThemeContext } from "../helpers/AppProvider";


const Loading = () => {

  const Theme = useThemeContext();
  let Colors = Theme.Colors;


  return <Modal></Modal>;
};

export default Loading;
