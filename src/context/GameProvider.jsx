import { useReducer, useCallback } from 'react'
import { GameContext } from './GameContext'
import { TURN_SECONDS, ERRORS } from '../utils/constants'
import { normalize, startsWithLastLetter, isAlreadyUsed, wordScore } from '../utils/wordRules'
import { validateWord } from '../services/wordService'
import { useTimer } from '../hooks/useTimer'

const initialState = {
  status: 'idle',
  words: [],
  score: 0,
  timeLeft: TURN_SECONDS,
  error: null,
  isChecking: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...initialState, status: 'playing' }
    case 'CHECK_START':
      return { ...state, isChecking: true, error: null }
    case 'ADD_WORD':
      if (state.status !== 'playing') return state
      return {
        ...state,
        words: [...state.words, action.payload],
        score: state.score + wordScore(action.payload),
        timeLeft: TURN_SECONDS,
        error: null,
        isChecking: false,
      }
    case 'SET_ERROR':
      return { ...state, error: action.payload, isChecking: false }
    case 'TICK': {
      const next = state.timeLeft - 1
      if (next <= 0) return { ...state, timeLeft: 0, status: 'finished' }
      return { ...state, timeLeft: next }
    }
    default:
      return state
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const tick = useCallback(() => dispatch({ type: 'TICK' }), [])
  useTimer(state.status === 'playing' && state.words.length > 0, tick)

  const startGame = () => dispatch({ type: 'START_GAME' })

  const submitWord = async (rawWord) => {
    const word = normalize(rawWord)
    if (!word) return

    const lastWord = state.words[state.words.length - 1]
    if (!startsWithLastLetter(word, lastWord)) {
      dispatch({ type: 'SET_ERROR', payload: ERRORS.CHAIN })
      return
    }
    if (isAlreadyUsed(word, state.words)) {
      dispatch({ type: 'SET_ERROR', payload: ERRORS.USED })
      return
    }

    dispatch({ type: 'CHECK_START' })
    const result = await validateWord(word)
    if (!result.success) {
      dispatch({ type: 'SET_ERROR', payload: result.error })
      return
    }
    if (!result.exists) {
      dispatch({ type: 'SET_ERROR', payload: ERRORS.NOT_EXISTS })
      return
    }
    dispatch({ type: 'ADD_WORD', payload: word })
  }

  const value = { ...state, startGame, submitWord }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
