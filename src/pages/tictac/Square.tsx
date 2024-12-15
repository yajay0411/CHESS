import React from 'react'
import css from './Tictactoe.module.css'
type SquareProps = {
  history: boolean
  value: string | null
  onClick: () => void
}

const Square: React.FC<SquareProps> = ({ history, value, onClick }) => {
  return (
    <button
      className={history ? css['small-square'] : css['square']}
      onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
