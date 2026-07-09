import { useState } from 'react'
import { useGame } from '../../hooks/useGame'
import './WordInput.css'

const WordInput = () => {
  const { submitWord, isChecking } = useGame()
  const [value, setValue] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!value.trim()) return
    await submitWord(value)
    setValue('')
  }

  return (
    <form className="word-input" onSubmit={handleSubmit}>
      <input
        className="word-input-field"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Escribí una palabra"
        aria-label="Ingresá una palabra"
        autoComplete="off"
        autoFocus
        disabled={isChecking}
      />
      <button className="word-input-button" type="submit" disabled={isChecking || !value.trim()}>
        {isChecking ? 'Validando...' : 'Enviar'}
      </button>
    </form>
  )
}

export default WordInput
