import { useGame } from '../../hooks/useGame'
import './WordChain.css'

const WordChain = () => {
  const { words } = useGame()

  if (words.length === 0) {
    return <p className="word-chain-empty">Escribí la primera palabra para empezar.</p>
  }

  const lastWord = words[words.length - 1]
  const nextLetter = lastWord[lastWord.length - 1]

  return (
    <div className="word-chain">
      <ul className="word-chain-list">
        {words.map((word) => (
          <li key={word} className="word-chain-item">{word}</li>
        ))}
      </ul>
      <p className="word-chain-hint">
        La próxima palabra debe empezar con <strong>{nextLetter}</strong>
      </p>
    </div>
  )
}

export default WordChain
