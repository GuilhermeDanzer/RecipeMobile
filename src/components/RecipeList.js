import React, { usena } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecipeList = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        horizontal={props.horizontal} //horizontal ={true}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({ item, index }) => (
          <View style={styles.container} key={item._id}>
            <TouchableOpacity
              opacity={0.7}
              onPress={() => navigation.navigate(props.rota, { receita: item })}
            >
              <Image style={styles.img} source={{ uri: item.img }} />
              <Text style={styles.titulo}>{item.nome}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 200,
  },
  titulo: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default RecipeList;
