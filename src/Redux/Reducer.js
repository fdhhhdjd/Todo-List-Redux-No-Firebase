import * as Types from "./ActionType";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todo: [
    {
      id: 1,
      task: "Tài quá là đẹp trai 1",
      completed: false,
    },
    {
      id: 2,
      task: "Tài siêu đẹp trai",
      completed: false,
    },
  ],
};
const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.COMPLETE_TODO:
      const toggleTodo = state.todo.map((t) =>
        t.id === action.payload.id
          ? {
              ...action.payload,
              completed: !action.payload.completed,
            }
          : t
      );
      return {
        ...state,
        todo: toggleTodo,
      };
    case Types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      const addedTodo = [...state.todo, newTodo];
      return {
        ...state,
        todo: addedTodo,
      };
    case Types.REMOVE_TODO:
      const filterTodo = state.todo.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todo: filterTodo,
      };
    case Types.UPDATE_TODO:
      const update = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
      });
      return {
        ...state,
        todo: update,
      };
    default:
      return state;
  }
};
export default todoReducer;
