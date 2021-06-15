import { useState } from "react";
import Input from "./components/Input"
import Button from "./components/Button"

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function onChange(event) {
    setValue(event.target.value)
  }

  function onClick() {
    setTasks([
      ...tasks,
      {
        text: value,
      },
    ]);

    setValue("");
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <Input value={value} onChange={onChange} />

        <Button onClick={onClick}>Adicionar task</Button>
      </form>

      <ul>{tasks.map((task, index) => (
        <li key={index}>{task.text}</li>
      ))}</ul>
    </div>
  );
}

export default App;
