// @ts-nocheck
import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ColorsObj from "../settings/Colors";

const AppContext = createContext();
const ThemeContext = createContext();
const AuthContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const useThemeContext = () => useContext(ThemeContext);
export const useAuthContext = () => useContext(AuthContext);

export const AppProvider = ({ children }) => {
  const [Colors, setColors] = useState(ColorsObj);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forceLogin, setForceLogin] = useState(true);

  useEffect(() => {
    getPrimaryColor();
  }, []);

  const getPrimaryColor = async () => {
    try {
      let primary = await AsyncStorage.getItem("@primary_color");
      if (primary) {
        setColors({ ...Colors, primary });
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <AppContext.Provider value={{}}>
      <ThemeContext.Provider
        value={{
          Colors,
          setPrimaryColor: (color) => setColors({ ...Colors, primary: color }),
        }}
      >
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, forceLogin, setForceLogin }}>
          {children}
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};
