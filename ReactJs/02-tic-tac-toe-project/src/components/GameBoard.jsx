// import { useState } from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({ changeActivePlayer, activePlayer }) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelection(rowIndex, colIndex, symbol) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [
//         ...prevGameBoard.map((innerArray) => [...innerArray]),
//       ];
//       updatedBoard[rowIndex][colIndex] = activePlayer;
//       return updatedBoard;
//     });

//     changeActivePlayer();
//   }
//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick={() => handleSelection(rowIndex, colIndex)}>
//                   {playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ changeActivePlayer, turns }) {
  console.log(turns);

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => changeActivePlayer(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
