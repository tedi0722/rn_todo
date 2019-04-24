import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AppContainer from "./src/navigation/AppContainer";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends Component {
  renderActivityIndicator() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={this.renderActivityIndicator()}
        >
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
