import React from "react";
import { useFonts } from "expo-font";
import MainNavigation from "./app/routes/MainNavigation";
import { AppProvider } from "./app/helpers/AppProvider";

const App = () => {
  const [fontsLoaded] = useFonts({
    Ionicons: require("react-native-ionicons/fonts/Ionicons.ttf"),
    "Cairo-Regular": require("./app/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-SemiBold": require("./app/assets/fonts/Cairo-SemiBold.ttf"),
    "Cairo-Bold": require("./app/assets/fonts/Cairo-Bold.ttf"),
    "ArabicUI": require("./app/assets/fonts/ArabicUITextMedium.otf"),
  });


  return (
    <AppProvider>
      {fontsLoaded && (
        <>
          <MainNavigation />
        </>
      )}
    </AppProvider>
  );
};

export default App;
