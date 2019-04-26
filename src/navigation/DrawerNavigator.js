import { createDrawerNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
import Login from "../components/Login";
import Developer from "../components/Developer";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator
    },
    // Login: {
    //   screen: Login
    // },
    Developer: {
      screen: Developer
    }
  },
  {
    drawerType: "slide"
  }
);

export default DrawerNavigator;
