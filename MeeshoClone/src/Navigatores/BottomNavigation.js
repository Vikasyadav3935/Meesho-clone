import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useTheme} from 'react-native-paper'
import Account from "../Screens/Account";
import Categories from "../Screens/Categories";
import Community from "../Screens/Community";
import Home from "../Screens/Home";
import MyOrders from "../Screens/MyOrders";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";




const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: useTheme().colors.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="alpha-m" size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="shape-outline"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Myorders"
        component={MyOrders}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons color={color} name="bag" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="people-outline" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="account-outline"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator
