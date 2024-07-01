import Button from "./components/Button";
import Container from "./components/Container";

function App() {
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
    </main>
  );
}
export default App;
