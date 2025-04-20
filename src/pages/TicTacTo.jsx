import React, { useState } from "react";
import App from '../App.jsx'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent overwriting a cell or continuing after a winner is decided

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O"; // Assign "X" or "O" based on the turn
    setBoard(newBoard);
    setIsXTurn(!isXTurn); // Toggle turn
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setIsXTurn(true); // Reset turn to "X"
  };

  return (
    <div className="tictactoe">
      <h2 className="text-3xl font-bold">Tic-Tac-Toe</h2>
      <div className="board">
        {board.map((value, i) => (
          <button
            key={i}
            className="cell"
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>
      <h3>
        {winner
          ? `Winner: ${winner}`
          : board.every(Boolean)
          ? "It's a draw!"
          : `Next Player: ${isXTurn ? "X" : "O"}`}
      </h3>
      <button className="reset-btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default TicTacToe;