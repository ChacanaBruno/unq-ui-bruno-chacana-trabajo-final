import { useGame } from '../../hooks/useGame'
import './StartScreen.css'

const StartScreen = () => {
  const { startGame } = useGame()

  return (
    <div className="start-screen">
      <p className="start-rules">
        Encadená palabras: cada una tiene que empezar con la última letra de la
        anterior. Tenés 15 segundos por palabra y sumás un punto por cada letra.
      </p>
      <button className="start-button" onClick={startGame}>
        Jugar
      </button>
    </div>
  )
}

export default StartScreen
