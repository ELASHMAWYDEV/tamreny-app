import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  Article,
  Articles,
  Food,
  Protein,
  Gyms,
  Gym,
} from "../screens/index";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Protein" component={Protein} />
      <Stack.Screen name="Gyms" component={Gyms} />
      <Stack.Screen name="Gym" component={Gym} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
