import "./App.css";
import { useState } from "react";
import Todolist from "./components/Todolist";
function App() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="todo-app">
      <Todolist input={input} handleChange={handleChange} setInput={setInput} />
    </div>
  );
}

export default App;
