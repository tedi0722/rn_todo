import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Header } from "react-native-elements";
import { addTodo, removeTodo, completeTodo } from "../store/actions/todoAction";
import ItemCard from "./ItemCard";
import AddTodo from "./AddTodo";

class AllTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
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
        </View>
        <View style={styles.addBtn}>
          <AddTodo />
        </View>
      </SafeAreaView>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100
  },
  addBtn: {
    alignSelf: "flex-end",
    padding: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTodo);
