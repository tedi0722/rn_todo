import { createAppContainer } from "react-navigation";
import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from './StackNavigator';


const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
