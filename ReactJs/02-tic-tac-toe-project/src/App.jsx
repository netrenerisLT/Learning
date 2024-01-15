import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Set Player 1" symbol="X">
            BB
          </Player>
          <Player name="Set Player 2" symbol="O"></Player>
        </ol>
        <div>GameBoard</div>
      </div>
    </main>
  );
}

export default App;
