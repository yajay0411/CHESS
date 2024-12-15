import { Link } from 'react-router-dom'
import css from './Chess.module.css'
import { ToggleMode } from '../../components'

const ChessDisplay = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className={css['header-section']}>
          <p className="heading">Chess</p>
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
    </>
  )
}

export default ChessDisplay
