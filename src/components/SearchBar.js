import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.viewStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        onEndEditing={() => onTermSubmit()}
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Pesquisar"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    //  backgroundColor: "#f0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#fff",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 10,
    color: "white",
  },
});

export default SearchBar;
