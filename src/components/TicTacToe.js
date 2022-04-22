import React, { useEffect, useState } from 'react';
import { defaultBoard, isWinner, isFilled } from '../utils';

function TicTacToe() {
  const [ board, setBoard ] = useState(defaultBoard());
  const [ turn, setTurn ] = useState(true);
  const [ scoreOne, setScoreOne ] = useState(0);
  const [ scoreTwo, setScoreTwo ] = useState(0);

  function makeMove(r, c) {
    if (board[r][c] != '') {
      return;
    }
    const arr = board;
    arr[r][c] = turn? 'X' : 'O';

    if (isWinner(arr, turn)) { // player won
      setBoard(defaultBoard());
      updateScore();
      setTurn(true);
    } else if (isFilled(arr)) { // tie
      setBoard(defaultBoard());
      setTurn(true);
    } else { // make move
      setBoard(arr);
      setTurn(!turn);
    }
  }

  function updateScore() {
    if (turn) {
      setScoreOne(scoreOne + 1);
    } else {
      setScoreTwo(scoreTwo + 1);
    }
  }

  return (
    <div
      style={{
        marginTop: '100px',
        width: '280px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      
      {/* Print Board */}
      <div>
        {board.map((row, r) => (
          <div style={{display: 'flex', height: '50px'}}>
            {row.map((col, c) => (
              <div
                style={{
                  display: 'flex',
                  width: '50px',
                  border: '2px solid black',
                  fontSize: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => { makeMove(r, c) }}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div>
        <div> Turn: {turn? 'Player 1 (X)' : 'Player 2 (O)'} </div>
        <div> Player 1: {scoreOne} </div>
        <div> Player 2: {scoreTwo} </div>
      </div>
    </div>
  );
}

export default TicTacToe;