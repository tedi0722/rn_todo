import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from 'react-navigation';
import ItemCard from "./ItemCard";
import { removeTodo, completeTodo } from "../store/actions/todoAction";
import { connect } from "react-redux";

class CompletedTodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.items.map(item => {
            return item.completed ? (
              <ItemCard
                key={item.id}
                title="title"
                text={item.text}
                iconName={
                  item.completed
                    ? "checkbox-marked-circle"
                    : "checkbox-blank-circle-outline"
                }
                remove={() => this.props.removeTodo(item.id)}
                complete={() => this.props.completeTodo(item.id)}
              />
            ) : null;
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoReducer.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id)),
    completeTodo: id => dispatch(completeTodo(id))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedTodo);
