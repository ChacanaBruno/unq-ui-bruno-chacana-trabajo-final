import { useEffect, useRef, useState } from 'react'
import { useGame } from '../../hooks/useGame'
import Leaderboard from '../Leaderboard/Leaderboard'
import { Storage } from '../../utils/storage'
import './GameOver.css'

const GameOver = () => {
  const { score, words, startGame } = useGame()
  const [scores, setScores] = useState([])
  const alreadySaved = useRef(false)

  useEffect(() => {
    if (alreadySaved.current) return
    alreadySaved.current = true
    const updated = score > 0 ? Storage.saveScore(score) : Storage.getScores()
    setScores(updated)
  }, [score])

  return (
    <div className="game-over">
      <h2 className="game-over-title">¡Se acabó el tiempo!</h2>
      <p className="game-over-line">
        Puntaje final: <strong>{score}</strong>
      </p>
      <p className="game-over-line">
        Palabras encadenadas: <strong>{words.length}</strong>
      </p>
      <button className="game-over-button" onClick={startGame}>
        Jugar de nuevo
      </button>
      <Leaderboard scores={scores} />
    </div>
  )
}

export default GameOver
