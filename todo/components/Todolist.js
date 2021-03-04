import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

function Todolist(props) {
  const [todos, setTodos] = useState([]);
  const [editValue, setEditValue] = useState(false);
  const addItem = (item) => {
    const newTodo = [item, ...todos];

    setTodos(newTodo);
    props.setInput("");
  };
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (id) => {
    setEditValue(true);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    const selected = todos.find((todo) => todo.id === id);

    props.setInput(selected.text);

    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <Todoform
        input={props.input}
        handleChange={props.handleChange}
        setInput={props.setInput}
        addItem={addItem}
        handleEdit={handleEdit}
        editValue={editValue}
        setEditValue={setEditValue}
      />
      <Todo todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default Todolist;
