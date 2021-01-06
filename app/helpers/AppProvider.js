// @ts-nocheck
import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ColorsObj from "../settings/Colors";

const AppContext = createContext();
const ThemeContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const useThemeContext = () => useContext(ThemeContext);

export const AppProvider = ({ children }) => {
  const [Colors, setColors] = useState(ColorsObj);

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
        {children}
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};
