import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is a todo app title-1",
      description: "This is new description",
    },
    {
      id: 2,
      title: "This is a todo app title-2",
      description: "This is new description",
    },
    {
      id: 3,
      title: "This is a todo app title-3",
      description: "This is new description",
    },
  ]);
  const [id, setId] = useState("");
  console.log(id);
  const deletetodo = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Todo List Application</h1>
      </div>
      <Form id={id} setId={setId} todos={todos} setTodos={setTodos} />
      <Todos todos={todos} deletetodo={deletetodo} setId={setId} />
    </>
  );
}

export default App;
