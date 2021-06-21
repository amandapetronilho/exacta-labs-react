import { useEffect, useState } from "react";

import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { Tasks } from "../../services/tasks";
import * as S from "./styles";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Tasks.getTasks().then(setTasks);
  }, []);

  function addTask(value) {
    setTasks([
      ...tasks,
      {
        text: value,
      },
    ]);
  }

  function removeTask(task) {
    const index = tasks.indexOf(task);

    const newTasks = [
      ...tasks.slice(0, index),
      ...tasks.slice(index + 1)
    ];

    setTasks(newTasks);
  }

  return (
    <S.Wrapper>
        
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask}/>

    </S.Wrapper>
  );
}

export default Home;
