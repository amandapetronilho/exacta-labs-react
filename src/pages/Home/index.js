import { useEffect, useState, useCallback } from "react";

import { ArrowBack, ArrowForward } from '@styled-icons/material';

import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import Pagination from "../../components/Pagination";
import { Tasks } from "../../services/tasks";
import * as S from "./styles";

const limit = 5;

function Home() {
  const [totalPages, setTotalPages] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const refreshTasks = useCallback(async (page) => {
    const { data, total } = await Tasks.getTasks(page, limit);

    setTasks(data);
    setTotalPages(Math.ceil(total / limit));
  }, []);

  async function createTask(text) {
    await Tasks.createTask({ text });

    refreshTasks(page);
  }

  async function deleteTask(task) {

    await Tasks.deleteTask(task.id);

    refreshTasks(page);
  }

  function handlePrevious() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleNext() {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    refreshTasks(page);
  }, [refreshTasks, page]);

  return (
    <S.Wrapper>

      <TaskForm onSubmit={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      
      <Pagination firstPage={page === 1} lastPage={page === totalPages} 
          page={page} onNext={handleNext} onPrevious={handlePrevious} />
      
    </S.Wrapper>
  );
}

export default Home;
