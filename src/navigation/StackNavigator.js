import React from 'react';
import {createStackNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import MenuButton from '../components/MenuButton';
import AddTodo from '../components/AddTodo';

const StackNavigator = createStackNavigator ({
    Home: DrawerNavigator
},
{
    defaultNavigationOptions: ({navigation}) => ({
        headerTitle: "GYSD",
        headerLeft: <MenuButton navigation={navigation} />,
        headerRight: <AddTodo />,
    })
})

export default StackNavigator;