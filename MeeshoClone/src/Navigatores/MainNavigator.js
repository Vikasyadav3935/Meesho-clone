import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./BottomNavigation";
import Products from "../Screens/Products";
import Details from "../Screens/Details";

export default function MainNavigator() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>

        <MyStack/>
    </NavigationContainer>
  );
}
 