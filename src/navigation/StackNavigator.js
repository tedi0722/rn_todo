import React from 'react';
import {createStackNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import MenuButton from '../components/MenuButton';

const StackNavigator = createStackNavigator ({
    Home: DrawerNavigator
},
{
    defaultNavigationOptions: ({navigation}) => ({
        headerTitle: "GYSD",
        headerLeft: <MenuButton navigation={navigation} />
    })
})

export default StackNavigator;