import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
        data-testid="new-todo-input"
      />
      <input type="submit" className="input-submit" value="Submit" data-testid="new-todo-submit-btn" />
    </form>
  );
}

export default InputTodo;
