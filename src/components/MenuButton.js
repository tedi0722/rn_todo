import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MenuButton = props => (
  <View style={{ padding: 10 }}>
    <Icon
      onPress={() => props.navigation.toggleDrawer()}
      size={24}
      name="menu"
      color="#20B2AA"
    />
  </View>
);

export default MenuButton;
