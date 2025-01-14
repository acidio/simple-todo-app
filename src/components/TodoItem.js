import React from "react";

import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [inputTitle, setInputTitle] = React.useState(props.todo.title);

  const handleInputTitleChange = (e) => {
    setInputTitle(e.target.value);
  }

  const handleTitleUpdate = () => {
    props.handleChangeProps(props.todo.id, { title: inputTitle });
  }

  const { completed, id } = props.todo;

  return (
    <li className={styles.itemContainer} data-testid="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleToggleTodoProps(id)}
      />
      <input
        type="text"
        value={inputTitle}
        onChange={handleInputTitleChange}
        onBlur={handleTitleUpdate}
        data-testid="todo-item-input-title"
        className={`${styles.inputTitle} ${completed ? styles.inputTitleCompleted : ""}`}
      />
      <button onClick={() => props.deleteTodoProps(id)} className={styles.btnDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
