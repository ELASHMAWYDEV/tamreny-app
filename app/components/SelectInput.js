import React, { useState } from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Modal,
  ScrollView,
} from "react-native";

//Globals
import Colors from "../settings/Colors";

const SelectInput = ({
  value,
  visible = false,
  onSelectValue = (value) => null,
  toggleSelection = () => null,
  selection = [
    {
      value: "",
      label: "",
    },
  ],
}) => {
  [value, setValue] = useState(value || selection[0].value);

  toggleModal = () => {
    toggleSelection();
  };

  changeValue = (value) => {
    setValue(value);
    onSelectValue(value);
    toggleModal();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <ScrollView style={styles.itemsContainer}>
          {selection.map((item, index) => (
            <TouchableNativeFeedback
              useForeground
              key={index}
              onPress={() => changeValue(item.value)}
            >
              <View>
                <View
                  style={[
                    styles.itemContainer,
                    value == item.value && styles.selectedValue,
                  ]}
                >
                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
                {index != selection.length - 1 && (
                  <View style={styles.separator}></View>
                )}
              </View>
            </TouchableNativeFeedback>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
  },
  itemsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
    paddingTop: 40,
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 10,
  },
  itemLabel: {
    fontFamily: "Cairo-SemiBold",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
  },
  separator: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: "center",
  },
  selectedValue: {
    backgroundColor: Colors.black,
  },
});

export default SelectInput;
