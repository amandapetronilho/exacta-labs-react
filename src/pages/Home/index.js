import { useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

import * as S from "./styles";

function Home() {
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
    <S.Wrapper>
        
      <TaskForm value={value} onChange={onChange} onClick={onClick} />
      <TaskList tasks={tasks} />

    </S.Wrapper>
  );
}

export default Home;
