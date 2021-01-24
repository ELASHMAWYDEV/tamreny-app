import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import MainNavigation from "./MainNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          initialRouteName="MainNavigation"
          drawerPosition="right"
        >
          <Drawer.Screen name="MainNavigation" component={MainNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DrawerNavigation;
