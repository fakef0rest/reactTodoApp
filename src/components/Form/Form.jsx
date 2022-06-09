import { useRef } from "react"
import { v4 } from "uuid";

export const Form = ({setTodos}) => {
    const inputRef = useRef(null);
    const handleMakeTodo = evt => {
        evt.preventDefault();

        const newTodo = {
            id: v4(),
            text: inputRef.current.value,
            isCompleted: false 
        }
        
        setTodos(prev => [newTodo, ...prev])
        inputRef.current.value = null;
    }

    return (
        <form onSubmit={handleMakeTodo}>
            <input ref={inputRef} type="text" placeholder='Todo text' required/>
            <button type='submit'>Submit</button>
        </form>
    )
}