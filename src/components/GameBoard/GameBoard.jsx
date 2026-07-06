import Scoreboard from '../Scoreboard/Scoreboard'
import Timer from '../Timer/Timer'
import WordChain from '../WordChain/WordChain'
import WordInput from '../WordInput/WordInput'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useGame } from '../../hooks/useGame'
import './GameBoard.css'

const GameBoard = () => {
  const { error } = useGame()

  return (
    <div className="game-board">
      <div className="game-board-top">
        <Scoreboard />
        <Timer />
      </div>
      <WordChain />
      <WordInput />
      <ErrorMessage message={error} />
    </div>
  )
}

export default GameBoard
