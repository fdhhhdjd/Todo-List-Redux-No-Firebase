import React, { useState } from "react";
import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../Redux/Action";
const Todo = ({ id, task, completed, toggleTodo, removeTodo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editStack, setEditStack] = useState(task);
  return (
    <>
      <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </CSSTransition>
        <div className="Todo-buttons">
          <button onClick={removeTodo}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </TransitionGroup>
    </>
  );
};

export default Todo;
