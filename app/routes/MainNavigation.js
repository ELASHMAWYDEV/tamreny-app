import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, CardStyleInterpolator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { Home, Article, Articles, Food, Protein } from "../screens/index";


const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
        initialRouteName="Home"
        drawerPosition="right"
        screenOptions={{
        }}
      >
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
