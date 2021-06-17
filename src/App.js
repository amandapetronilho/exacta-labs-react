import { createGlobalStyle } from 'styled-components';
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;

function App() {
  
  return (
    <div>
      <GlobalStyle />

      <Home />
    </div>
  );
}

export default App;
