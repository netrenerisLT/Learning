import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const customRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customRef}>
        <Input type="text" label="name" id="name"></Input>
        <Input type="email" label="email" id="email"></Input>
        <p>
          <Button el="button">Register</Button>
        </p>
      </Form>
      <Container
        as={Button}
        el="anchor"
        href="https://www.g.lt"
        target="_blank"
      >
        I'm anchor
      </Container>
    </main>
  );
}
export default App;
