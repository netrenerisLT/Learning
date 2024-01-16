import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X">
            BB
          </Player>
          <Player initialName="Player 2" symbol="O"></Player>
        </ol>
        <div>GameBoard</div>
      </div>
    </main>
  );
}

export default App;
