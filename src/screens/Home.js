import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { Context as RecipeContext } from "../context/receitaContext";
// import { Container } from './styles';

const Home = ({ navigation }) => {
  const [value, setValue] = useState();
  const { state, getAllReceitas, getReceitaPesquisa } = useContext(
    RecipeContext
  );

  useEffect(() => {
    getAllReceitas();
  }, []);

  const searchPage = async (valor) => {
    navigation.navigate("Pesquisa", { valor });
  };

  return (
    <View>
      <SearchBar
        term={value}
        onTermChange={setValue}
        onTermSubmit={() => searchPage(value)}
      />
      <Text style={styles.titulo}>Principais Receitas </Text>
      <RecipeList horizontal={true} data={state.todasReceitas} rota="Receita" />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    padding: 5,
  },
});
export default Home;
