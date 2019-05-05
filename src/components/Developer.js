import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { purgeStoredState } from "redux-persist";
import { persistor } from "../store/store";

export default class Developer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 20, color: "red" }}>
          !! This will clear storage !!
        </Text>
        <Button
          title="Purge"
          buttonStyle={{ backgroundColor: "red" }}
          onPress={() => persistor.purge()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
  }
});
