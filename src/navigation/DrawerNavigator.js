import { createDrawerNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
import Login from "../components/Login";

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
  },
  Login: {
    screen: Login
  }
});

export default DrawerNavigator;
