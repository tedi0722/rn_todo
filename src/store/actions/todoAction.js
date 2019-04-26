import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actionTypes";

let todoID = 1;

export const addTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      ...item,
      id: todoID++
    }
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};
