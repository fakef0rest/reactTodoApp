import { useRef } from "react"
import { v4 } from "uuid";

export const Form = ({setTodos, todos}) => {
    const inputRef = useRef(null);
    const handleMakeTodo = evt => {
        evt.preventDefault();

        const newTodo = {
            id: v4(),
            text: inputRef.current.value,
            isCompleted: false 
        }
        
        setTodos(prev => [newTodo, ...prev])
        localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]))
        inputRef.current.value = null;
    }

    return (
        <form onSubmit={handleMakeTodo}>
            <input ref={inputRef} type="text" placeholder='Todo text' required/>
            <button type='submit'>Submit</button>
        </form>
    )
}