import { useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const useGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameState, setGameState] = useState("playing");

  const startGame = () => {
    setSquares(Array(9).fill(null));
    setGameState("playing");
  };

  const play = (squareIndex) => {
    // player moves
    const newSquares = [...squares];
    newSquares[squareIndex] = "whale";
    setSquares(newSquares);

    // check if player has won/drawn
    const hasPlayerWon = winningCombinations.some((combination) =>
      combination.every((squareIndex) => newSquares[squareIndex] === "whale"),
    );
    if (hasPlayerWon) {
      setGameState("won");
      return;
    }
    if (!newSquares.includes(null)) {
      setGameState("drew");
      return;
    }

    // computer moves at random
    const emptySquareIndexes = newSquares
      .map((square, index) => (square === null ? index : null))
      .filter((square) => square !== null);
    const randomSquareIndex =
      emptySquareIndexes[Math.floor(Math.random() * emptySquareIndexes.length)];
    newSquares[randomSquareIndex] = "dolphin";
    setSquares(newSquares);

    // check if computer has won (no need to check for draw, as player always moves first)
    const hasComputerWon = winningCombinations.some((combination) =>
      combination.every((squareIndex) => newSquares[squareIndex] === "dolphin"),
    );
    if (hasComputerWon) {
      setGameState("lost");
    }
  };

  return [squares, gameState, startGame, play];
};

export default useGame;
