import * as S from "./styles.js";

function TaskList ({ tasks, deleteTask }) {
    return (
      <S.List>{tasks.map((task, index) => (
        <S.ListItem key={index}>
          {task.text}

          <S.DeleteIcon onClick={() => deleteTask(task)}/>
        </S.ListItem>
        ))}
      </S.List>
  );
}

export default TaskList;