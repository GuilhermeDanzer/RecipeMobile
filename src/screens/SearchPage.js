import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Context as RecipeContext } from "../context/receitaContext";
import RecipeList from "../components/RecipeList";
const SearchPage = ({ route }) => {
  const { valor } = route.params;

  const { state, getAllReceitas, getReceitaPesquisa } = useContext(
    RecipeContext
  );

  useEffect(() => {
    getReceitaPesquisa(valor);
  }, []);

  console.log(state.pesquisaReceitas);
  return (
    <View>
      <RecipeList
        horizontal={false}
        rota="Receita"
        data={state.pesquisaReceitas}
      />
    </View>
  );
};

export default SearchPage;
