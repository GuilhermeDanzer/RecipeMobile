import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "./Colors";

const Accordion = (props) => {
  const [state, setState] = useState({ expanded: false });
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setState({ expanded: !state.expanded });
  };

  const onClick = (index) => {
    const temp = props.lista.slice();
    temp[index].value = !temp[index].value;
    setState({ ...state });
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.row}
        onPress={() => toggleExpand()}
      >
        <Text style={[styles.title]}>{props.nomeLista}</Text>
        <Icon
          name={state.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={30}
          color="#5E5E5E"
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {props.check
        ? state.expanded && (
            <View style={{}}>
              <FlatList
                data={props.lista}
                numColumns={1}
                scrollEnabled={false}
                keyExtractor={(item, index) => item.data}
                renderItem={({ item, index }) => (
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={[
                        styles.childRow,
                        styles.button,
                        item.value ? styles.btnActive : styles.btnInActive,
                      ]}
                      onPress={() => onClick(index)}
                    >
                      <Text style={styles.itens}>{item.data}</Text>
                      <Icon
                        name={"check-circle"}
                        size={24}
                        color={item.value ? Colors.GREEN : Colors.LIGHTGRAY}
                      />
                    </TouchableOpacity>
                    <View style={styles.childHr} />
                  </View>
                )}
              />
            </View>
          )
        : state.expanded && (
            <View style={styles.child}>
              <Text style={styles.itens}>Receita: {props.lista.nome}</Text>
              <Text style={styles.itens}>
                Tempo de preparo: {props.lista.tempo}h
              </Text>
              <Text style={styles.itens}>Porções: {props.lista.porcao}</Text>
            </View>
          )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  itens: {
    fontSize: 18,
  },

  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%",
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: "100%",
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
  child: {
    backgroundColor: Colors.GRAY,
    padding: 16,
  },
});

export default Accordion;
