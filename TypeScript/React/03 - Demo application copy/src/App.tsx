import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <form>
        <Input type="text" label="vards" id="name"></Input>
        <Input type="month" label="data" id="age"></Input>
        <p>
          <Button el="button">Register</Button>
        </p>
      </form>
      <Container
        as={Button}
        el="link"
        href="https://www.g.lt"
        target="_blank"
      >
        I'm anchor
      </Container>
    </main>
  );
}
export default App;
