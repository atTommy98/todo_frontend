import React from "react";
import "./styles.css";

export default function DeleteButton(props) {
  const { id, deleteTodo } = props;
  return (
    <button onClick={() => deleteTodo(id)} className="deleteButton">
      Delete
    </button>
  );
}
