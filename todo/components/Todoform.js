import React, { useState, useRef } from "react";

function Todoform({
  input,
  handleChange,
  setInput,
  addItem,
  editValue,
  setEditValue,
}) {
  const ref = useRef(null);
  const [error, setError] = useState("");
  const callError = () => {
    setError("Todo Item cannot be Empty!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      callError();
      return;
    }
    setError("");
    addItem({
      id: Math.floor(Math.random() * 100000),
      text: input,
      edit: false,
    });
  };
  function checkRef() {
    ref.current.focus();
    if (ref.current.innerText === "Edit Todo") {
      setEditValue(false);
    }
  }

  return (
    <div>
      <h3 className="error">{error}</h3>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Add a Todo Item"
          name="text"
          className="todo-input"
          type="text"
          onChange={handleChange}
          ref={ref}
        />
        <button onClick={checkRef} className="todo-button" ref={ref}>
          {editValue ? "Edit Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
}

export default Todoform;
