import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};
