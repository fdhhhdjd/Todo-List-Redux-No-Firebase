import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Action";
import "./TodoInput.css";
import { toast, Toast } from "react-toastify";
const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      return toast.info("Mời bạn nhập vào ô nha");
    }
    dispatch(addTodo(task), toast.success("Bạn đã thêm thành công "));
    setTask("");
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <form className="TodoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default TodoInput;
