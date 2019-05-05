import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AccordionView from "./AccordionView";
import { connect } from "react-redux";

class AllTodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AccordionView sections={this.props.items} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoReducer.items
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 20
  }
});

export default connect(mapStateToProps)(AllTodo);
