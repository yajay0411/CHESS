import React, { useEffect, useState } from 'react'
import Board from './Board'
import css from './Tictactoe.module.css'

const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (const line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null))
  const [history, setHistory] = useState<(string | null)[][]>([])
  const [isXNext, setIsXNext] = useState(true)
  const [draw, setDraw] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)

  const status = winner ? `Winner: ${winner}` : draw ? `Match Draw` : `Next Turn: ${isXNext ? 'X' : 'O'}`

  const handleSquareClick = (index: number) => {
    if (squares[index] || winner) return

    const newSquares = squares.slice()
    newSquares[index] = isXNext ? 'X' : 'O'
    setSquares(newSquares)
    setHistory((prev) => [...prev, newSquares])
    setIsXNext(!isXNext)
  }
  // Use `useEffect` to act as a callback after `squares` state updates
  useEffect(() => {
    const newWinner = calculateWinner(squares)
    if (newWinner) {
      setWinner(newWinner)
    } else if (squares.every((square) => square !== null)) {
      setDraw(true)
    }
  }, [squares])

  const handleHistorySquareClick = (index: number, item: (string | null)[]) => {
    const turn = [0, 2, 4, 6, 8].includes(index) ? 'X' : 'O'
    history.splice(index + 1, history.length)
    setSquares(item)
    setHistory(history)
    setDraw(false)
    setWinner(null)
    setIsXNext(turn === 'X' ? false : true)
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setHistory([])
    setDraw(false)
    setWinner(null)
    setIsXNext(true)
  }

  return (
    <div className={css['tictactoe-section']}>
      <div className={css['status-section']}>
        <div className={css['status']}>{status}</div>
        <div className={css['history-section']}>
          {history &&
            history.map((item, index) => (
              <span
                key={index}
                onClick={() => handleHistorySquareClick(index, item)}>
                <Board
                  history={true}
                  squares={item}
                  onSquareClick={handleSquareClick}
                />
              </span>
            ))}
        </div>
        <button
          className="btn"
          onClick={handleReset}>
          Restart Game
        </button>
      </div>
      <div>
        <Board
          history={false}
          squares={squares}
          onSquareClick={handleSquareClick}
        />
      </div>
    </div>
  )
}

export default TicTacToe
