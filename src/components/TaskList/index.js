import * as S from "./styles.js";

function TaskList ({ tasks }) {
    return (
      <ul>{tasks.map((task, index) => (
        <li key={index}>{task.text}</li>
        ))}
      </ul>
  );
}

export default TaskList;