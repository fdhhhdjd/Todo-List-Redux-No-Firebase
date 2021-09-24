import * as Types from "./ActionType";
export const completeTodo = (todo) => ({
  type: Types.COMPLETE_TODO,
  payload: todo,
});
export const addTodo = (todo) => ({
  type: Types.ADD_TODO,
  payload: todo,
});
export const removeTodo = (todo) => ({
  type: Types.REMOVE_TODO,
  payload: todo,
});
export const updateTodo = (todo) => ({
  type: Types.UPDATE_TODO,
  payload: todo,
});
