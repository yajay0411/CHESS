import { Link } from 'react-router-dom'
import css from './Tictactoe.module.css'
import { ToggleMode } from '../../components'
import TicTacToe from './Tictactoe'

const TictactoeDisplay = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className={css['header-section']}>
          <p className="heading">Tic-Tac-Toe</p>
          <div>
            <ToggleMode />
            <Link to="/">
              <button
                type="button"
                className="btn">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <TicTacToe />
      </div>
    </>
  )
}

export default TictactoeDisplay
