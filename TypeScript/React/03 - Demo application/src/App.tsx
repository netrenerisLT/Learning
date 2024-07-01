import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const refas = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Container
        as={Button}
        el="anchor"
        href="https://www.g.lt"
        target="_blank"
      >
        I'm anchor
      </Container>
      <Container as={Button} el="button">
        I'm button
      </Container>
      <Input label="test" id="test" ref={refas}></Input>
    </main>
  );
}
export default App;
