import { Route, Routes } from 'react-router-dom'
import { AllGamesListing } from './components'
import { ChessDisplay, TictactoeDisplay } from './pages'

function App() {
  return (
    <div className="page-wrapper">
      <Routes>
        <Route
          path="/"
          element={<AllGamesListing />}></Route>
        <Route
          path="/chess"
          element={<ChessDisplay />}></Route>
        <Route
          path="/tictactoe"
          element={<TictactoeDisplay />}></Route>
      </Routes>
    </div>
  )
}

export default App
