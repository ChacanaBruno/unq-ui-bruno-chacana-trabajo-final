import { useGame } from '../../hooks/useGame'
import './Timer.css'

const Timer = () => {
  const { timeLeft } = useGame()
  const isLow = timeLeft <= 5

  return (
    <div className={isLow ? 'timer timer-low' : 'timer'}>
      <span className="timer-label">Tiempo</span>
      <span className="timer-value">{timeLeft}s</span>
    </div>
  )
}

export default Timer
