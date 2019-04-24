import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-navigation";
import { connect } from "react-redux";
import { addTodo, removeTodo, completeTodo } from "../store/actions/todoAction";
import ItemCard from "./ItemCard";

class AllTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.items.map(item => {
            return (
              <ItemCard
                key={item.id}
                text={item.text}
                iconName={
                  item.completed
                    ? "checkbox-marked-circle"
                    : "checkbox-blank-circle-outline"
                }
                remove={() => this.props.removeTodo(item.id)}
                complete={() => this.props.completeTodo(item.id)}
              />
            );
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
    addTodo: todo => dispatch(addTodo(todo)),
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
)(AllTodo);
