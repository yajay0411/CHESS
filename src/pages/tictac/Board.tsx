import React from 'react'
import Square from './Square'
import css from './Tictactoe.module.css'

type BoardProps = {
  history: boolean
  squares: (string | null)[]
  onSquareClick: (index: number) => void
}

const Board: React.FC<BoardProps> = ({ history, squares, onSquareClick }) => {
  const renderSquare = (index: number) => (
    <Square
      history={history}
      value={squares[index]}
      onClick={() => !history && onSquareClick(index)}
    />
  )

  return (
    <div className={history ? css['small-board'] : css['board']}>
      <div className={history ? css['small-board-row'] : css['board-row']}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={history ? css['small-board-row'] : css['board-row']}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={history ? css['small-board-row'] : css['board-row']}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
