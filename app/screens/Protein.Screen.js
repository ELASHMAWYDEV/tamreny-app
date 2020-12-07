import React, { useState } from "react";
import { TouchableNativeFeedback } from "react-native";
import { Header, SelectInput } from "../components/index";
import styled from "styled-components";
import Colors from "../settings/Colors";
import { RadioButton } from "react-native-paper";

const Protein = (props) => {
  const [gender, setGender] = useState("male");
  const [optionOne, setOptionOne] = useState(1);
  const [optionTwo, setOptionTwo] = useState(1);
  const [optionOneVisible, setOptionOneVisible] = useState(false);
  const [optionTwoVisible, setOptionTwoVisible] = useState(false);

  const options = [
    {
      value: 1,
      label: "اختيار 1",
    },
    {
      value: 2,
      label: "اختيار 2",
    },
    {
      value: 3,
      label: "اختيار 3",
    },
    {
      value: 4,
      label: "اختيار 4",
    },
  ];

  return (
    <>
      <Header {...props} title="حاسبة البروتينات" backBtnEnabled />
      <SelectInput
        visible={optionOneVisible || optionTwoVisible}
        value={optionOneVisible ? optionOne : optionTwo}
        selection={options}
        onSelectValue={(value) =>
          optionOneVisible ? setOptionOne(value) : setOptionTwo(value)
        }
        toggleSelection={() =>
          optionOneVisible
            ? setOptionOneVisible(!optionOneVisible)
            : setOptionTwoVisible(!optionTwoVisible)
        }
      />
      <ScrollContainer>
        <MainContainer>
          <Container>
            <RowContainer style={{ justifyContent: "flex-start" }}>
              <Title style={{ marginLeft: 20 }}>النوع</Title>
              <RadioButton
                color={Colors.primary}
                value="male"
                status={gender == "male" ? "checked" : "unchecked"}
                onPress={() => setGender("male")}
                uncheckedColor={Colors.primary}
              />
              <NormalText>ذكر</NormalText>
              <RadioButton
                color={Colors.primary}
                value="female"
                status={gender == "female" ? "checked" : "unchecked"}
                onPress={() => setGender("female")}
                uncheckedColor={Colors.primary}
              />
              <NormalText>أنثي</NormalText>
            </RowContainer>
            <RowContainer>
              <RoundedInput>
                <Input placeholder="العمر" keyboardType="number-pad" />
              </RoundedInput>
              <RoundedInput>
                <Input
                  placeholder="الطول"
                  keyboardType="number-pad"
                  style={{ width: "80%" }}
                />
                <InputDesc>سم</InputDesc>
              </RoundedInput>
              <RoundedInput>
                <Input
                  placeholder="الوزن"
                  keyboardType="number-pad"
                  style={{ width: "80%" }}
                />
                <InputDesc>كجم</InputDesc>
              </RoundedInput>
            </RowContainer>
            <RowContainer>
              <TouchableNativeFeedback
                onPress={() => setOptionOneVisible(!optionOneVisible)}
                useForeground
              >
                <SelectRounded>
                  <NormalText>
                    {options.find((option) => option.value == optionOne).label}
                  </NormalText>
                  <SelectArrow />
                </SelectRounded>
              </TouchableNativeFeedback>
            </RowContainer>
            <RowContainer>
              <TouchableNativeFeedback
                onPress={() => setOptionTwoVisible(!optionTwoVisible)}
                useForeground
              >
                <SelectRounded>
                  <NormalText>
                    {options.find((option) => option.value == optionTwo).label}
                  </NormalText>
                  <SelectArrow />
                </SelectRounded>
              </TouchableNativeFeedback>
            </RowContainer>
            <RowContainer>
              <TouchableNativeFeedback onPress={() => null} useForeground>
                <CalculateBtn>
                  <Title style={{ color: Colors.white }}>احسب</Title>
                </CalculateBtn>
              </TouchableNativeFeedback>
            </RowContainer>
            <LineSeparator />
            <RowContainer style={{ marginTop: 40, marginBottom: 5 }}>
              <Title>السعرات</Title>
              <ResultText>105</ResultText>
              <NormalText>كالوري</NormalText>
            </RowContainer>
            <RowContainer style={{ marginBottom: 5 }}>
              <Title>الكربوهيدرات</Title>
              <ResultText>53</ResultText>
              <NormalText>غرام</NormalText>
            </RowContainer>
            <RowContainer style={{ marginBottom: 5 }}>
              <Title>البروتينات</Title>
              <ResultText>25</ResultText>
              <NormalText>غرام</NormalText>
            </RowContainer>
            <RowContainer style={{ marginBottom: 5 }}>
              <Title>الدهون</Title>
              <ResultText>43</ResultText>
              <NormalText>غرام</NormalText>
            </RowContainer>
          </Container>
        </MainContainer>
      </ScrollContainer>
    </>
  );
};

const MainContainer = styled.View`
  flex: 1;
  padding: 10px 8px;
`;

const ScrollContainer = styled.ScrollView``;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  elevation: 10;
  border: 1px ${Colors.black + "11"};
  border-radius: 12px;
  padding: 18px 15px;
  padding-bottom: 30px;
`;

const RowContainer = styled.View`
  flex-direction: row-reverse;
  margin-bottom: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-family: Cairo-SemiBold;
  font-size: 20px;
  color: ${Colors.black};
`;

const NormalText = styled.Text`
  font-family: Cairo-Regular;
  font-size: 18px;
  color: ${Colors.black};
`;

const RoundedInput = styled.View`
  background-color: ${Colors.lightGray};
  border-radius: 30px;
  border: 1px ${Colors.black + "11"};
  elevation: 3;
  flex-direction: row-reverse;
  padding: 5px 15px;
  width: 30%;
`;

const Input = styled.TextInput`
  background-color: transparent;
  text-align: center;
  font-family: Cairo-Regular;
  font-size: 18px;
  width: 100%;
`;

const InputDesc = styled(NormalText)`
  font-size: 12px;
`;

const SelectRounded = styled.View`
  background-color: ${Colors.lightGray};
  border-radius: 30px;
  border: 1px ${Colors.black + "11"};
  padding: 5px 30px;
  elevation: 3;
  width: 100%;
  overflow: hidden;
  align-items: center;
  padding-left: 30px;
`;

const SelectArrow = styled.View`
  border: 6px transparent;
  border-top-width: 12px;
  border-top-color: ${Colors.black};
  position: absolute;
  left: 20px;
  top: 50%;
`;

const CalculateBtn = styled(SelectRounded)`
  background-color: ${Colors.primary};
  padding: 5px 30px;
  border: 1px ${Colors.primary + "11"};
  margin-top: 50px;
`;

const LineSeparator = styled.View`
  width: 80%;
  height: 3px;
  align-self: center;
  background-color: ${Colors.black};
  opacity: 0.5;
  border-radius: 15px;
  margin-top: -15px;
`;

const ResultText = styled(Title)`
  margin-left: auto;
  transform: translateX(10px);
  color: ${Colors.red};
  font-size: 22px;
`;
export default Protein;
