import { dataGames } from '../../constants'
import GameCard from '../game_card/GameCard'
import ToggleMode from '../toggle_mode/toggleMode'
import css from './AllGameListing.module.css'

const AllGamesListing = () => {
  const games = dataGames
  return (
    <>
      <div className="content-wrapper">
        <div className={css['header-section']}>
          <p className="heading">Welcome to Games.com</p>
          <ToggleMode />
        </div>
      </div>
      <div className="content-wrapper">
        {games &&
          games.map((game) => (
            <GameCard
              key={game.title}
              gameCarddata={game}
            />
          ))}
      </div>
    </>
  )
}

export default AllGamesListing
