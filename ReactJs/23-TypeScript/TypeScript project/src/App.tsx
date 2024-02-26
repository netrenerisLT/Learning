import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("learn swim"),
    new Todo("learn react")
  ]
  return (
    <div >
      <Todos items={todos} />
    </div>
  );
}

export default App;
