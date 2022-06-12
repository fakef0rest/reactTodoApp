import { useRef } from "react"
import './Todos.scss';

export const Todos = ({todos, setTodos}) => {
    const pRef = useRef(null);
    const handleEditTodo = todo => {
        let editedTodo = prompt('Change', todo.text)

        todo.text = editedTodo

        setTodos([...todos])

        console.log(todos)

        localStorage.setItem('todos', JSON.stringify([...todos]))
    }

    const handleDeleteTodo = (todoId) => {
        const deletedTodos = todos.filter(todo => todo.id !== todoId)

        setTodos(deletedTodos);

        localStorage.setItem('todos', JSON.stringify(deletedTodos))
    }

    const handleCheckTodo = (evt, todoId) => {

        const filteredTodos = todos.map(todo => {
            const {isCompleted, ...o} = todo;
            if (todo.id === todoId) {
                return {isCompleted: evt.target.checked, ...o};
            } else {
                return todo;
            }
        })
        setTodos(filteredTodos);

        localStorage.setItem('todos', JSON.stringify(filteredTodos))
    }
    return (
        <>
        {todos.length > 0 && <ul>
                {todos.map(todo => (
                    <li key={todo.id}>

                        <input type="checkbox" checked={todo.isCompleted} onChange={evt => handleCheckTodo(evt, todo.id)}/>
                        <p ref={pRef} className={todo.isCompleted ? 'lineThrough' : null}>{todo.text}</p>
                        <button onClick={() => handleEditTodo(todo)}>Edit</button>    
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>    

                    </li>
                ))}
            </ul>
        }
        </>
        

    )
}