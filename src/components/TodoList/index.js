import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import "./styles.css";

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const url = "http://localhost:3000/todos";

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTodos(data)
      });
      console.log(todos)
  }, [todos]);



  return (
    <ul className="todoList--container">
      {todos.map((todoData) => {
        return (
          <TodoItem key={todoData.id} data={todoData} />
        )
      })}
    </ul>
  );
}