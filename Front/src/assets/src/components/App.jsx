import Form from "./Form";
import "../styles/App.scss"
import List from "./List";
import { useState } from "react";

function App() {

  const [task, setTask]= useState([]);



  function addList(newTask){
    setTask([...task, newTask]);
  }

 

  return (
    <div className="ppal">
      <h1 className="ppal__title">Lista de Tareas</h1>
      <Form addList={addList} className="ppal__form"/>
      <List  task={task} className="ppal__list"/>
    </div>
  );
}

export default App;