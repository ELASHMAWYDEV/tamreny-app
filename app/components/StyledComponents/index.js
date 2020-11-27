import Styled from "styled-components/native";
import Colors from "../../settings/Color";

export const NormalText = Styled.Text`
  font-size: 14px;
  color: ${props => props.color || Colors.black};
  

`;


