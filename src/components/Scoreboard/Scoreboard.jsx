import { useGame } from '../../hooks/useGame'
import './Scoreboard.css'

const Scoreboard = () => {
  const { score, words } = useGame()

  return (
    <div className="scoreboard">
      <span className="scoreboard-score">{score} puntos</span>
      <span className="scoreboard-count">{words.length} palabras</span>
    </div>
  )
}

export default Scoreboard
