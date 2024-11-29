import { useState } from "react";
import Message from "./Message";
import Box from "./Box";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningBoxes, setWinningBoxes] = useState([]);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turnO ? "O" : "X";
    setBoard(newBoard);
    setTurnO(!turnO);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        setWinningBoxes([a, b, c]); // Store winning box indices
        return;
      }
    }
    if (!board.includes("")) setWinner("Draw");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setTurnO(true);
    setWinner(null);
    setWinningBoxes([]);
  };

  return (
    <div>
      {/* Result Overlay */}
      {winner && <Message winner={winner} onReset={resetGame} />}

      {/* Game Board */}
      <div className="game-container d-flex justify-content-center align-items-center flex-wrap mt-5">
        {board.map((value, index) => (
          <Box
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            isWinner={winningBoxes.includes(index)} // Highlight winning boxes
          />
        ))}
      </div>

      {/* Reset Button */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark btn-lg" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Game;
