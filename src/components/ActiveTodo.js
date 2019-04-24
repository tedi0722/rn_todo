import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import ItemCard from "./ItemCard";
import { removeTodo, completeTodo } from "../store/actions/todoAction";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

class ActiveTodo extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {this.props.items.map(item => {
            return item.completed ? null : (
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
)(ActiveTodo);
