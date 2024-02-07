export function TodoItem({id, completed , tittle, toggleTodo, deleteTodo}){
    return(
        <li >
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {tittle}
        </label>
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    )
}