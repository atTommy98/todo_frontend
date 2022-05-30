import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";

function App() {
  const [data, setData] = useState({
    firstName: "Sam",
  });

  function getData() {
    axios.get("http://localhost:3000").then((res) => {
      setData(res.data);
    });
  }

  function sendData() {
    axios
      .post("http://localhost:3000/reverse", data)
      .then((res) => {
        setData((prev) => ({
          ...data,
          firstName: res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="App--container">
        <button>Add</button>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
