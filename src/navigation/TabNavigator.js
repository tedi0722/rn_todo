import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import AllTodo from "../components/AllTodo";
import ActiveTodo from "../components/ActiveTodo";
import CompletedTodo from "../components/CompletedTodo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: AllTodo,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            size={16}
            name="format-list-checkbox"
            style={{ color: tintColor }}
          />
        )
      })
    },
    Active: {
      screen: ActiveTodo,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            size={16}
            name="checkbox-blank-circle-outline"
            style={{ color: tintColor }}
          />
        )
      })
    },
    Completed: {
      screen: CompletedTodo,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            size={16}
            name="checkbox-marked-circle"
            style={{ color: tintColor }}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      style: {
        padding: 10,
        borderTopColor: "#333333",
        backgroundColor: "#282828"
      },
      activeTintColor: "#20B2AA"
    }
  }
);

export default TabNavigator;
