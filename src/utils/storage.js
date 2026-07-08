import { MAX_SCORES, STORAGE_KEY } from './constants'

export class Storage {
  static getScores() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  }

  static saveScore(score) {
    const scores = Storage.getScores()
    const updated = [...scores, score]
      .sort((a, b) => b - a)
      .slice(0, MAX_SCORES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return updated
  }
}
