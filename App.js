import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Recipe from "./src/screens/Recipe";
import SearchPage from "./src/screens/SearchPage";
import { AntDesign } from "@expo/vector-icons";
import { Provider as ReceitaProvider } from "./src/context/receitaContext";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#1DA883",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Receita" component={Recipe} />
      <Stack.Screen name="Pesquisa" component={SearchPage} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <ReceitaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#de7231",
            inactiveTintColor: "#FFF",
            style: { backgroundColor: "#1DA883" },
          }}
        >
          <Tab.Screen
            name="Teste"
            component={StackNav}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color={color} size={30} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Tab2  "
            component={Recipe}
            options={{
              tabBarLabel: () => {
                return null;
              },
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="setting" color={color} size={30} />
              ),
            }}
          />*/}
        </Tab.Navigator>
      </NavigationContainer>
    </ReceitaProvider>
  );
}
