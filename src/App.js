import { Container } from "semantic-ui-react";
import "./App.css";

import { Previewer } from "./features/previewer/Previewer";
import { Input } from "./features/input/Input";

function App() {
  return (
    <div className="App">
      <Container className="d-flex w-100">
        <Container id="text-editor-container">
          <Input />
        </Container>
        <Container id="preview">
          <Previewer />
        </Container>
      </Container>
    </div>
  );
}

export default App;
