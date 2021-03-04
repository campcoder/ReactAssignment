import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function Todo({ todos, handleDelete, handleEdit }) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
        >
          <div>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => {
                handleDelete(todo.id);
              }}
            />
            <TiEdit onClick={() => handleEdit(todo.id, todo.text)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
