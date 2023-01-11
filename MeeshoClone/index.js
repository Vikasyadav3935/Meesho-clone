import { registerRootComponent } from "expo";

import App from "./src/App";
import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider, MD3LightTheme} from "react-native-paper";
import { name as appName } from "./app.json";

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#f43397",
    secondary: "#f1c40f",
    tertiary: "#f0f0f0",
    gray: "#cfcdcd",
    textGray: "gray",
    catBtn: "white",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);
