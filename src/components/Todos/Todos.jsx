export const Todos = ({todos, setTodos}) => {
    const handleEditTodo = todo => {
        let editedTodo = prompt('Ozgartirish', todo.text)

        todo.text = editedTodo

        setTodos([...todos])
    }

    const handleDeleteTodo = (todoId) => {
        const deletedTodos = todos.filter(todo => todo.id !== todoId)

        setTodos([...deletedTodos]);
    }
    return (
        <>
        {todos.length > 0 && <ul>
                {todos.map(todo => (
                    <li key={todo.id}>

                        <input type="checkbox" />
                        <p>{todo.text}</p>
                        <button onClick={() => handleEditTodo(todo)}>Edit</button>    
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>    

                    </li>
                ))}
            </ul>
        }
        </>
        

    )
}