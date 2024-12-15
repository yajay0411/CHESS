import { Link } from 'react-router-dom'
import css from './GameCard.module.css'

type GameCardProps = {
  title: string
  imageUrl: string
  link: string
}

const GameCard = ({ gameCarddata }: { gameCarddata: GameCardProps }) => {
  return (
    <>
      <div className="figure-container">
        <Link to={gameCarddata.link}>
          <figure className={css['figure']}>
            <img
              src={gameCarddata.imageUrl}
              alt={gameCarddata.title}
            />
            <figcaption>{gameCarddata.title}</figcaption>
          </figure>
        </Link>
      </div>
    </>
  )
}

export default GameCard
