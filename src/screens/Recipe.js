import React from "react";
import { View, Text } from "react-native";
import RecipeDetails from "../components/RecipeDetail";
const Recipe = ({ route }) => {
  const { receita } = route.params;
  return (
    <View style={{ padding: 30 }}>
      <RecipeDetails receita={receita} />
    </View>
  );
};

export default Recipe;
