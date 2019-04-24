import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actionTypes";

let todoID = 1;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: todoID++,
      text: text,
      completed: false
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
