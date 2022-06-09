import { useState } from "react";
import { Form, Todos } from './components';


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>Todo app</h1>
      <Form setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
