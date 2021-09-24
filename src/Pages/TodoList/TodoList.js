import React from "react";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "../TodoInput/TodoInput";
import Todo from "../Todo/Todo";
import { addTodo, completeTodo, removeTodo } from "../../Redux/Action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.data);

  return (
    <div className="TodoList">
      <h1>Todo List With Redux 😍 No Firebase</h1>
      <ToastContainer />
      <TodoInput />
      <ul>
        <TransitionGroup className="todo=list">
          {todo &&
            todo.map((item) => (
              <>
                <CSSTransition key={item.id} className="todo">
                  <Todo
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    completed={item.completed}
                    toggleTodo={() => dispatch(completeTodo(item))}
                    removeTodo={() => dispatch(removeTodo(item))}
                  />
                </CSSTransition>
              </>
            ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
