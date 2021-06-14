import { useState } from "react";
import Input from "./components/Input"


function App() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <Input value={value} onChange={onChange} />
    </div>
  );
}

export default App;
