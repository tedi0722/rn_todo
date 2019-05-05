import React from "react";
import { createStackNavigator } from "react-navigation";
import DrawerNavigator from "./DrawerNavigator";
import MenuButton from "../components/MenuButton";
import AddTodo from "../components/AddTodo";

const StackNavigator = createStackNavigator(
  {
    Home: DrawerNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: "GYSD",
      headerTitleStyle: {
        color: "#20B2AA"
      },
      headerLeft: <MenuButton navigation={navigation} />,
      headerRight: <AddTodo />,
      headerStyle: {
        backgroundColor: "#282828",
      }
      
    })
  }
);

export default StackNavigator;
