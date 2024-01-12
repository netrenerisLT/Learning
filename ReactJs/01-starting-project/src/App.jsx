import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = [
  "Fundamental",
  "Crucial",
  "Core",
  "Best",
  "Legendary",
];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const randomWord = reactDescriptions[genRandom(reactDescriptions.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
