import { GameProvider } from './context/GameProvider'
import Game from './components/Game/Game'
import './App.css'

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
