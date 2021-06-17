import * as S from "./styles.js";
import Button from "../Button";
import Input from "../Input";

function TaskForm ({ value, onChange, onClick }) {
    return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input value={value} onChange={onChange} />

      <Button onClick={onClick}>Adicionar task</Button>
    </form>
  );
}

export default TaskForm;