import React from "react";
import { createDrawerNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
import Login from "../components/Login";
import Developer from "../components/Developer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: () => ({
        drawerIcon: ({ tintColor }) => (
          <Icon
            size={16}
            name="home"
            style={{ color: tintColor }}
          />
        )
      })
    },
    // Login: {
    //   screen: Login
    // },
    Developer: {
      screen: Developer,
      navigationOptions: () => ({
        drawerIcon: ({ tintColor }) => (
          <Icon
            size={16}
            name="settings"
            style={{ color: tintColor }}
          />
        )
      })
    }
  },
  {
    drawerType: "slide",
    drawerBackgroundColor: "#333333",
    contentOptions: {
      activeTintColor: "#20B2AA",
      inactiveTintColor: "#dddddd",
      activeBackgroundColor: "#282828"
    }
  }
);

export default DrawerNavigator;
