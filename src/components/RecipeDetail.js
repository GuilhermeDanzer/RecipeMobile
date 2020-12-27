import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Accordion from "./Accordion";
const RecipeDetails = ({ receita }) => {
  console.log(receita);
  var listaIngredientes = [];
  var listaPassos = [];
  receita.ingredientes.map((data) => {
    listaIngredientes.push({ data, value: false });
  });

  receita.passos.map((data) => {
    listaPassos.push({ data, value: false });
  });

  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{ height: 200, width: 300, alignSelf: "center", margin: 30 }}
            source={{ uri: receita.img }}
          />
          <Accordion
            check={false}
            lista={receita}
            nomeLista="Informações Gerais"
          />

          <Accordion
            check={true}
            lista={listaIngredientes}
            nomeLista="Ingredientes"
          />
          <Accordion
            check={true}
            lista={listaPassos}
            nomeLista="Passo a Passo"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;
