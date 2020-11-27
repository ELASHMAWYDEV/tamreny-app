import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigation } from "@react-navigation/drawer";
import { Home, Article, Articles, Food, Protein } from "../screens/index";

const Drawer = createDrawerNavigation();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Articles" component={Articles} />
        <Drawer.Screen name="Food" component={Food} />
        <Drawer.Screen name="Protein" component={Protein} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
