import { useGame } from '../../hooks/useGame'
import StartScreen from '../StartScreen/StartScreen'
import GameBoard from '../GameBoard/GameBoard'
import GameOver from '../GameOver/GameOver'
import './Game.css'

const Game = () => {
  const { status } = useGame()

  return (
    <div className="game">
      <h1 className="game-title">Palabras Encadenadas</h1>
      {status === 'idle' && <StartScreen />}
      {status === 'playing' && <GameBoard />}
      {status === 'finished' && <GameOver />}
    </div>
  )
}

export default Game
