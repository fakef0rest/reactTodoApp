import { useState } from "react";
import { Form, Todos } from './components';


function App() {
  const localTodos = localStorage.getItem('todos')
  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos) : []);
  return (
    <>
      <h1>Todo app</h1>
      <Form setTodos={setTodos} todos={todos}/>
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
