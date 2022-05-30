import React from "react";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import "./styles.css";

export default function TodoItem(props) {
  const { data } = props;

  function editTodo() {

  }

  function deleteTodo(id) {
    const url = `http://localhost:3000/todos/${id}`
    fetch(url, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <li className="todoItem--container">
      <p className="todoItem--description">{data.description}</p>
      <div className="todoItem--buttons">
        <EditButton editTodo={editTodo} />
        <DeleteButton id={data.todo_id} deleteTodo={deleteTodo} />
      </div>
    </li>
  );
}
