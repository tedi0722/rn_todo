import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/actionTypes";

const initialState = {
  items: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload;
        })
      };
    case COMPLETE_TODO:
      return {
        ...state,
        items: state.items.map(item =>
          item.id !== action.payload
            ? item
            : { ...item, completed: !item.completed }
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
