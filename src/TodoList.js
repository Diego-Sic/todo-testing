import {TodoItem} from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className = "list">
        {todos.length === 0 && "No Todos"}
        {todos.length >= 5 && todos.length < 10 && "STOP TOO MUCH"}
        {todos.length >= 10 &&  todos.length < 15 && "Seriously STOP"}
        {todos.length >= 15 && "...you have a lot to finish..."}
        {todos.map(todos => {
          return(
           
            <TodoItem id={todos.id} completed={todos.completed} title={todos.title} key={todos.id}
            toggleTodo = {toggleTodo} deleteTodo = {deleteTodo}/>
          )
        })}
      </ul>
    )
}